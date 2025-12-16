// import { useState, useRef, useCallback } from 'react';


// const BeforeAfterSlider = ({
// 	before,
// 	after,
// 	altBefore,
// 	altAfter,
// }) => {
// 	const [position, setPosition] = useState(50); // percentage
// 	const containerRef = useRef(null);
// 	const isDraggingRef = useRef(false);

// 	const updatePosition = useCallback((clientX) => {
// 		if (!containerRef.current) return;
// 		const rect = containerRef.current.getBoundingClientRect();
// 		let next = ((clientX - rect.left) / rect.width) * 100;
// 		next = Math.max(0, Math.min(100, next));
// 		setPosition(next);
// 	}, []);

// 	const handleMouseDown = (e) => {
// 		isDraggingRef.current = true;
// 		updatePosition(e.clientX);
// 	};

// 	const handleTouchStart = (e) => {
// 		isDraggingRef.current = true;
// 		updatePosition(e.touches[0].clientX);
// 	};

// 	const handleMouseMove = (e) => {
// 		if (!isDraggingRef.current) return;
// 		updatePosition(e.clientX);
// 	};

// 	const handleTouchMove = (e) => {
// 		if (!isDraggingRef.current) return;
// 		updatePosition(e.touches[0].clientX);
// 	};

// 	const stopDragging = () => {
// 		isDraggingRef.current = false;
// 	};

// 	return (
// 		<div
// 			ref={containerRef}
// 			className="relative w-full h-full cursor-col-resize select-none"
// 			onMouseMove={handleMouseMove}
// 			onMouseLeave={stopDragging}
// 			onMouseUp={stopDragging}
// 			onTouchMove={handleTouchMove}
// 			onTouchEnd={stopDragging}
// 		>
// 			{/* After (full background) */}
// 			<img
// 				src={after}
// 				alt={altAfter}
// 				className="absolute inset-0 w-full h-full object-cover"
// 			/>

// 			{/* Before (clipped by slider position) */}
// 			<div
// 				className="absolute inset-y-0 left-0 overflow-hidden"
// 				style={{ width: `${position}%` }}
// 			>
// 				<img
// 					src={before}
// 					alt={altBefore}
// 					className="w-full h-full object-cover"
// 				/>
// 			</div>

// 			{/* Vertical line */}
// 			<div
// 				className="absolute inset-y-0"
// 				style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
// 			>
// 				<div className="h-full w-[3px] bg-white shadow-lg" />
// 			</div>

// 			{/* Circle handle */}
// 			<button
// 				type="button"
// 				className="absolute top-1/2 -translate-y-1/2"
// 				style={{ left: `${position}%`, transform: 'translate(-50%, -50%)' }}
// 				onMouseDown={handleMouseDown}
// 				onTouchStart={handleTouchStart}
// 				aria-label="Slide to compare before and after"
// 			>
// 				<div className="w-10 h-10 rounded-full bg-white/95 shadow-xl flex items-center justify-center border border-black/10">
// 					<span className="block w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-gray-700 mr-[2px]" />
// 					<span className="block w-0 h-0 border-y-[6px] border-y-transparent border-r-[10px] border-r-gray-700 ml-[2px]" />
// 				</div>
// 			</button>

// 			{/* Labels */}
// 			<div className="absolute top-4 left-4">
// 				<span className="inline-block px-4 py-1.5 rounded-md bg-white/70 text-xs font-semibold uppercase tracking-wide text-gray-800">
// 					Before
// 				</span>
// 			</div>
// 			<div className="absolute top-4 right-4">
// 				<span className="inline-block px-4 py-1.5 rounded-md bg-white/70 text-xs font-semibold uppercase tracking-wide text-gray-800">
// 					After
// 				</span>
// 			</div>
// 		</div>
// 	);
// };

// export default BeforeAfterSlider;

import { useState, useRef, useCallback } from 'react';

const BeforeAfterSlider = ({
	before,
	after,
	altBefore,
	altAfter,
	onDragChange,
}) => {
	const [position, setPosition] = useState(50);
	const containerRef = useRef(null);
	const isDraggingRef = useRef(false);
	const frameRef = useRef(null);

	const updatePosition = useCallback((clientX) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		let next = ((clientX - rect.left) / rect.width) * 100;
		next = Math.max(0, Math.min(100, next));
		setPosition(next);
	}, []);

	// use requestAnimationFrame to avoid setState on every raw mousemove
	const scheduleUpdate = useCallback(
		(clientX) => {
			if (frameRef.current != null) return;
			frameRef.current = requestAnimationFrame(() => {
				frameRef.current = null;
				updatePosition(clientX);
			});
		},
		[updatePosition],
	);

	const startDragging = (clientX) => {
		isDraggingRef.current = true;
		onDragChange?.(true);
		scheduleUpdate(clientX);
	};

	const handleMouseDown = (e) => {
		e.preventDefault();
		startDragging(e.clientX);
	};

	const handleTouchStart = (e) => {
		startDragging(e.touches[0].clientX);
	};

	const handleMouseMove = (e) => {
		if (!isDraggingRef.current) return;
		scheduleUpdate(e.clientX);
	};

	const handleTouchMove = (e) => {
		if (!isDraggingRef.current) return;
		scheduleUpdate(e.touches[0].clientX);
	};

	const stopDragging = () => {
		if (!isDraggingRef.current) return;
		isDraggingRef.current = false;
		onDragChange?.(false);
	};

	return (
		<div
			ref={containerRef}
			className="relative w-full h-full cursor-col-resize select-none"
			onMouseMove={handleMouseMove}
			onMouseLeave={stopDragging}
			onMouseUp={stopDragging}
			onTouchMove={handleTouchMove}
			onTouchEnd={stopDragging}
		>
			{/* After (full background) */}
			<img
				src={after}
				alt={altAfter}
				className="absolute inset-0 w-full h-full object-cover pointer-events-none"
			/>

			{/* Before (clipped by slider position) */}
			<div
				className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
				style={{ width: `${position}%` }}
			>
				<img
					src={before}
					alt={altBefore}
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Vertical line */}
			<div
				className="absolute inset-y-0 pointer-events-none"
				style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
			>
				<div className="h-full w-[3px] bg-white shadow-lg" />
			</div>

			{/* Circle handle (the only interactive part) */}
			<button
				type="button"
				className="absolute top-1/2 -translate-y-1/2"
				style={{ left: `${position}%`, transform: 'translate(-50%, -50%)' }}
				onMouseDown={handleMouseDown}
				onTouchStart={handleTouchStart}
				aria-label="Slide to compare before and after"
			>
				<div className="w-10 h-10 rounded-full bg-white/95 shadow-xl flex items-center justify-center border border-black/10">
					<span className="block w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-gray-700 mr-[2px]" />
					<span className="block w-0 h-0 border-y-[6px] border-y-transparent border-r-[10px] border-r-gray-700 ml-[2px]" />
				</div>
			</button>

			{/* Labels */}
			<div className="absolute top-4 left-4 pointer-events-none">
				<span className="inline-block px-4 py-1.5 rounded-md bg-white/70 text-xs font-semibold uppercase tracking-wide text-gray-800">
					Before
				</span>
			</div>
			<div className="absolute top-4 right-4 pointer-events-none">
				<span className="inline-block px-4 py-1.5 rounded-md bg-white/70 text-xs font-semibold uppercase tracking-wide text-gray-800">
					After
				</span>
			</div>
		</div>
	);
};

export default BeforeAfterSlider;

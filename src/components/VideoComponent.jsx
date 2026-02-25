const VideoSection = () => {
	return (
		<section className="section-padding bg-section-alt">
			<div className="container-custom">
				{/* Section Header */}
				<div className="text-center mb-12">
					<span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
						Watch Our Work
					</span>
					<h2 className="heading-section">
						See Our <span className="heading-accent">Projects in Action</span>
					</h2>
				</div>

				{/* Video Container */}
				<div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
					<video
						className="w-full h-full object-cover rounded-2xl"
						src="/assets/video.mp4"
						autoPlay
						muted
						loop
						playsInline
						controls
					/>
				</div>
			</div>
		</section>
	);
};

export default VideoSection;
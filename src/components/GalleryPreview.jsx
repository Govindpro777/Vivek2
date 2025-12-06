// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import galleryPavers from '@/assets/gallery-pavers.jpg';
// import galleryTurf from '@/assets/gallery-turf.jpg';
// import galleryLighting from '@/assets/gallery-lighting.jpg';
// import galleryPatioCover from '@/assets/gallery-patio-cover.jpg';

// const projects = [
//   {
//     image: galleryPavers,
//     title: 'Desert Retreat Patio',
//     category: 'Pavers & Hardscape',
//   },
//   {
//     image: galleryTurf,
//     title: 'Backyard Oasis',
//     category: 'Turf Installation',
//   },
//   {
//     image: galleryLighting,
//     title: 'Evening Elegance',
//     category: 'Landscape Lighting',
//   },
//   {
//     image: galleryPatioCover,
//     title: 'Shade Paradise',
//     category: 'Patio Covers',
//   },
// ];

// const GalleryPreview = () => {
//   return (
//     <section className="section-padding gradient-section">
//       <div className="container-custom">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
//             Our Portfolio
//           </span>
//           <h2 className="heading-section">
//             View Our Latest <span className="heading-accent">Transformations</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
//             From ordinary to unforgettable landscape visions. See how we've elevated outdoor spaces throughout Henderson & Las Vegas.
//           </p>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {projects.map((project, index) => (
//             <Link
//               to="/gallery"
//               key={project.title}
//               className="card-gallery group relative h-[350px]"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 <span className="inline-block bg-accent/90 text-accent-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
//                   {project.category}
//                 </span>
//                 <h3 className="font-display text-2xl font-semibold text-primary-foreground">
//                   {project.title}
//                 </h3>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-12">
//           <Link to="/gallery" className="btn-hero inline-flex items-center gap-2">
//             View Full Gallery
//             <ArrowRight size={20} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GalleryPreview;

// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import galleryPavers from '@/assets/gallery-pavers.jpg';
// import galleryTurf from '@/assets/gallery-turf.jpg';
// import galleryLighting from '@/assets/gallery-lighting.jpg';
// import galleryPatioCover from '@/assets/gallery-patio-cover.jpg';


// const dummyBefore1 = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=400&fit=crop&crop=center';
// const dummyBefore2 = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop&crop=center';
// const dummyBefore3 = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop&crop=center';
// const dummyBefore4 = 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=400&fit=crop&crop=center';

// const projects = [
//   {
//     before: dummyBefore1,
//     after: galleryPavers,
//     title: 'Desert Retreat Patio',
//     category: 'Pavers & Hardscape',
//   },
//   {
//     before: dummyBefore2,
//     after: galleryTurf,
//     title: 'Backyard Oasis',
//     category: 'Turf Installation',
//   },
//   {
//     before: dummyBefore3,
//     after: galleryLighting,
//     title: 'Evening Elegance',
//     category: 'Landscape Lighting',
//   },
//   {
//     before: dummyBefore4,
//     after: galleryPatioCover,
//     title: 'Shade Paradise',
//     category: 'Patio Covers',
//   },
// ];

// const GalleryPreview = () => {
//   return (
//     <section className="section-padding gradient-section">
//       <div className="container-custom">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
//             Our Portfolio
//           </span>
//           <h2 className="heading-section">
//             View Our Latest <span className="heading-accent">Transformations</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
//             From ordinary to unforgettable landscape visions. See how we've elevated outdoor spaces throughout Henderson & Las Vegas.
//           </p>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {projects.map((project, index) => (
//             <Link
//               to="/gallery"
//               key={project.title}
//               className="card-gallery group relative h-[400px] overflow-hidden rounded-2xl border border-white/10 bg-[#020617] shadow-2xl shadow-black/40 hover:shadow-emerald-500/20 hover:border-accent/50 transition-all duration-500"
//             >
//               {/* Before/After Split Container */}
//               <div className="absolute inset-0 flex">
//                 {/* BEFORE Image */}
//                 <div className="relative w-1/2 h-full overflow-hidden">
//                   <img
//                     src={project.before}
//                     alt={`${project.title} - Before`}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/50 to-foreground/20" />
//                   <div className="absolute top-6 left-6 z-10">
//                     <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/90 text-accent-foreground text-xs font-semibold uppercase tracking-wider backdrop-blur-sm shadow-lg">
//                       Before
//                     </span>
//                   </div>
//                 </div>

//                 {/* AFTER Image */}
//                 <div className="relative w-1/2 h-full overflow-hidden">
//                   <img
//                     src={project.after}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />
//                   <div className="absolute top-6 right-6 z-10">
//                     <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-accent to-accent/80 text-accent-foreground text-xs font-semibold uppercase tracking-wider shadow-lg">
//                       After ✨
//                     </span>
//                   </div>
//                 </div>

//                 {/* Hover Reveal Overlay */}
//                 <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />

//                 {/* Vertical Divider */}
//                 <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-white/30 to-accent/50 shadow-lg z-30" />
//               </div>

//               {/* Content Overlay */}
//               <div className="absolute bottom-0 left-0 right-0 p-6 z-40">
//                 <div className="flex items-end justify-between gap-4 h-full">
//                   <div className="flex-1 min-w-0">
//                     <span className="inline-block bg-accent/90 text-accent-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
//                       {project.category}
//                     </span>
//                     <h3 className="font-display text-2xl font-semibold text-primary-foreground leading-tight drop-shadow-lg group-hover:text-accent transition-colors mb-2">
//                       {project.title}
//                     </h3>
//                     <p className="text-muted-foreground text-sm leading-relaxed max-w-sm opacity-90">
//                       See the complete transformation journey
//                     </p>
//                   </div>

//                   <div className="flex-shrink-0">
//                     <div className="w-12 h-12 rounded-xl bg-accent/90 backdrop-blur-sm border border-accent/50 group-hover:bg-accent hover:border-accent transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-accent/25 hover:scale-110">
//                       <ArrowRight className="w-5 h-5 text-accent-foreground group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-12">
//           <Link to="/gallery" className="btn-hero inline-flex items-center gap-2 group">
//             View Full Gallery
//             <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GalleryPreview;


import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import galleryPavers from '@/assets/gallery-pavers.jpg';
import galleryTurf from '@/assets/gallery-turf.jpg';
import galleryLighting from '@/assets/gallery-lighting.jpg';
import galleryPatioCover from '@/assets/gallery-patio-cover.jpg';
import BeforeAfterSlider from './BeforeAfterSlider';

// Dummy before images
const dummyBefore1 = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=400&fit=crop&crop=center';
const dummyBefore2 = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop&crop=center';
const dummyBefore3 = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop&crop=center';
const dummyBefore4 = 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=400&fit=crop&crop=center';

const projects = [
  { before: dummyBefore1, after: galleryPavers, title: 'Desert Retreat Patio', category: 'Pavers & Hardscape' },
  { before: dummyBefore2, after: galleryTurf, title: 'Backyard Oasis', category: 'Turf Installation' },
  { before: dummyBefore3, after: galleryLighting, title: 'Evening Elegance', category: 'Landscape Lighting' },
  { before: dummyBefore4, after: galleryPatioCover, title: 'Shade Paradise', category: 'Patio Covers' },
];

const GalleryPreview = () => {
  return (
    <section className="section-padding gradient-section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
            Our Portfolio
          </span>
          <h2 className="heading-section">
            View Our Latest <span className="heading-accent">Transformations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From ordinary to unforgettable landscape visions. See how we've elevated outdoor spaces throughout Henderson &amp; Las Vegas.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              to="/gallery"
              key={project.title}
              className="card-gallery group relative h-[400px] overflow-hidden rounded-2xl border border-white/10 bg-[#020617] shadow-2xl shadow-black/40 hover:shadow-emerald-500/20 hover:border-accent/50 transition-all duration-500"
            >
              {/* Before/After slider inside card */}
              <BeforeAfterSlider
                before={project.before}
                after={project.after}
                altBefore={`${project.title} - Before`}
                altAfter={`${project.title} - After`}
              />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-40">
                <div className="flex items-end justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <span className="inline-block bg-accent/90 text-accent-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-primary-foreground leading-tight drop-shadow-lg group-hover:text-accent transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm opacity-90">
                      Drag the handle to compare before and after.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-accent/90 backdrop-blur-sm border border-accent/50 group-hover:bg-accent hover:border-accent transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-accent/25 hover:scale-110">
                      <ArrowRight className="w-5 h-5 text-accent-foreground group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/gallery" className="btn-hero inline-flex items-center gap-2 group">
            View Full Gallery
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;

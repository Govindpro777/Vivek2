import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import galleryPavers from '@/assets/gallery-pavers.jpg';
import galleryTurf from '@/assets/gallery-turf.jpg';
import galleryLighting from '@/assets/gallery-lighting.jpg';
import galleryPatioCover from '@/assets/gallery-patio-cover.jpg';

const projects = [
  {
    image: galleryPavers,
    title: 'Desert Retreat Patio',
    category: 'Pavers & Hardscape',
  },
  {
    image: galleryTurf,
    title: 'Backyard Oasis',
    category: 'Turf Installation',
  },
  {
    image: galleryLighting,
    title: 'Evening Elegance',
    category: 'Landscape Lighting',
  },
  {
    image: galleryPatioCover,
    title: 'Shade Paradise',
    category: 'Patio Covers',
  },
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
            From ordinary to unforgettable landscape visions. See how we've elevated outdoor spaces throughout Henderson & Las Vegas.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link
              to="/gallery"
              key={project.title}
              className="card-gallery group relative h-[350px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-accent/90 text-accent-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl font-semibold text-primary-foreground">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/gallery" className="btn-hero inline-flex items-center gap-2">
            View Full Gallery
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;

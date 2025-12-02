import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import heroImage from '@/assets/hero-landscape.jpg';
import galleryPavers from '@/assets/gallery-pavers.jpg';
import galleryTurf from '@/assets/gallery-turf.jpg';
import galleryLighting from '@/assets/gallery-lighting.jpg';
import galleryPatioCover from '@/assets/gallery-patio-cover.jpg';
import galleryOutdoorKitchen from '@/assets/gallery-outdoor-kitchen.jpg';

const categories = [
  'All',
  'Pavers & Hardscape',
  'Turf',
  'Lighting',
  'Patio Covers',
  'Outdoor Features',
];

const projects = [
  { image: galleryPavers, title: 'Desert Stone Retreat', category: 'Pavers & Hardscape', description: 'Premium paver patio with multi-level seating areas' },
  { image: galleryTurf, title: 'Green Oasis', category: 'Turf', description: 'Pet-friendly backyard with lush artificial turf' },
  { image: galleryLighting, title: 'Twilight Elegance', category: 'Lighting', description: 'Dramatic pathway and accent lighting design' },
  { image: galleryPatioCover, title: 'Shade Paradise', category: 'Patio Covers', description: 'Custom wooden pergola with string lights' },
  { image: galleryOutdoorKitchen, title: 'Chef\'s Dream', category: 'Outdoor Features', description: 'Full outdoor kitchen with fire pit lounge' },
  { image: heroImage, title: 'Complete Transformation', category: 'Pavers & Hardscape', description: 'Full backyard renovation with fire feature' },
  { image: galleryPavers, title: 'Tiered Terrace', category: 'Pavers & Hardscape', description: 'Multi-level patio with retaining walls' },
  { image: galleryTurf, title: 'Family Play Area', category: 'Turf', description: 'Safe and soft turf for children and pets' },
  { image: galleryLighting, title: 'Palm Row', category: 'Lighting', description: 'Dramatic palm tree uplighting' },
  { image: galleryPatioCover, title: 'Entertainment Hub', category: 'Patio Covers', description: 'Covered outdoor dining space' },
  { image: galleryOutdoorKitchen, title: 'Fire & Dine', category: 'Outdoor Features', description: 'BBQ station with fire pit seating' },
  { image: heroImage, title: 'Sunset Lounge', category: 'Outdoor Features', description: 'Evening entertainment paradise' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 container-custom px-4 text-center">
          <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
            Our Work
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Projects Gallery
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            From ordinary to unforgettable landscape visions.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-card border-b border-border sticky top-[72px] md:top-[112px] z-30">
        <div className="container-custom px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                onClick={() => setSelectedImage(project)}
                className="card-gallery group relative h-[300px]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block bg-accent/90 text-accent-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          >
            <X size={24} />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="font-display text-2xl font-semibold text-primary-foreground">
                {selectedImage.title}
              </h3>
              <p className="text-primary-foreground/70">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Create Your Own{' '}
            <span className="text-accent">Transformation?</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Let's bring your outdoor vision to life. Get started with a free consultation today.
          </p>
          <Link to="/contact" className="btn-hero inline-flex items-center gap-2">
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Gallery;

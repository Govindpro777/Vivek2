import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import heroImage from '@/assets/hero-landscape.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container-custom px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-accent fill-accent" />
              ))}
            </div>
            <span className="text-primary-foreground text-sm font-medium">5-Star Rated in Henderson & Las Vegas</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Taking Your Outdoor Space to the{' '}
            <span className="text-accent">NX Level</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.3s' }}>
            For over twenty five years, NX Level Landscaping has specialized in personal service while creating their customers dreams. As a native of the Las Vegas valley, owners Craig & Braxton take pride and ownership in every job their company per-forms. In fact, they are personally involved with each and every job to guarantee customers are 100% satisfied.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact" className="btn-hero inline-flex items-center justify-center gap-2">
              Get a Free Quote
              <ArrowRight size={20} />
            </Link>
            <Link to="/projects" className="btn-outline-hero inline-flex items-center justify-center">
              View Our Work
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">500+</p>
              <p className="text-primary-foreground/70 text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">15+</p>
              <p className="text-primary-foreground/70 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">100%</p>
              <p className="text-primary-foreground/70 text-sm">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

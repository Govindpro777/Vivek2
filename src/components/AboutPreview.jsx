import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  'Expert landscape design & planning',
  'High-end paver and hardscape work',
  'Premium turf installation',
  'Modern outdoor lighting',
  'Custom patio covers & trellises',
  'Complete backyard transformations',
];

const AboutPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src= "/assets/gallery-pavers.jpg"
                alt="NX Level Landscaping premium hardscape work"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-8 py-6 rounded-xl shadow-xl">
              <p className="font-display text-4xl font-bold">15+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
              About Us
            </span>
            <h2 className="heading-section">
              Elevating Outdoor Living<br />
              <span className="heading-accent">One Project at a Time</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              NX Level Landscaping takes every project to the next level with expert landscape design, 
              high-end paver and hardscape work, turf installation, outdoor lighting, patio covers, 
              trellises, steps, walkways, outdoor kitchens, fireplaces, and complete backyard transformations.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-hero inline-flex items-center gap-2">
              Learn More About Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

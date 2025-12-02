import { Link } from 'react-router-dom';
import { Compass, Hammer, Trees, Lightbulb, Umbrella, Flame, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Landscape Design',
    description: 'Creative, functional, and modern outdoor design tailored to your space.',
    slug: '/services/landscape-design',
  },
  {
    icon: Hammer,
    title: 'Hardscape & Pavers',
    description: 'Premium paver driveways, patios, seating walls, and custom stonework.',
    slug: '/services/hardscape-pavers',
  },
  {
    icon: Trees,
    title: 'Turf Installation',
    description: 'High-quality artificial turf for low-maintenance, next-level curb appeal.',
    slug: '/services/turf-installation',
  },
  {
    icon: Lightbulb,
    title: 'Landscape Lighting',
    description: 'Modern outdoor lighting to highlight and elevate your entire property.',
    slug: '/services/landscape-lighting',
  },
  {
    icon: Umbrella,
    title: 'Patio Covers & Shade',
    description: 'Custom-built covers, pergolas, and shade solutions for year-round comfort.',
    slug: '/services/patio-covers',
  },
  {
    icon: Flame,
    title: 'Outdoor Kitchens & Fire',
    description: 'Luxury outdoor cooking spaces, fireplaces, fire pits, and entertainment areas.',
    slug: '/services/outdoor-kitchens',
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
            What We Do
          </span>
          <h2 className="heading-section">
            Premium <span className="heading-accent">Landscaping Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From design to completion, we deliver exceptional outdoor transformations that elevate your property.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <Link
                to={service.slug}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/services" className="btn-hero inline-flex items-center gap-2">
            View All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

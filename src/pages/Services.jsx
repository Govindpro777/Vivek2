import { Link } from 'react-router-dom';
import { Compass, Hammer, Trees, Lightbulb, Umbrella, Flame, Footprints, ArrowRight, Grid3X3 } from 'lucide-react';
import heroImage from '@/assets/hero-landscape.jpg';

const services = [
  {
    id: 'landscape-design',
    slug: '/services/landscape-design',
    icon: Compass,
    title: 'Landscape Design',
    description: 'Creative, functional, and modern outdoor design tailored to your space. Our expert designers work with you to create a vision that transforms your property into a stunning outdoor retreat.',
    features: ['3D Design Visualization', 'Custom Layout Planning', 'Plant Selection', 'Drainage Solutions'],
  },
  {
    id: 'hardscape-pavers',
    slug: '/services/hardscape-pavers',
    icon: Hammer,
    title: 'Hardscape & Pavers',
    description: 'Premium paver driveways, patios, seating walls, and custom stonework. We use only the highest quality materials for lasting beauty and durability.',
    features: ['Paver Driveways', 'Stone Patios', 'Retaining Walls', 'Seating Areas'],
  },
  {
    id: 'turf-installation',
    slug: '/services/turf-installation',
    icon: Trees,
    title: 'Turf Installation',
    description: 'High-quality artificial turf for low-maintenance, next-level curb appeal. Perfect for the Las Vegas climate with year-round green without the water bill.',
    features: ['Pet-Friendly Options', 'Putting Greens', 'Front Yard Lawns', 'Play Areas'],
  },
  {
    id: 'landscape-lighting',
    slug: '/services/landscape-lighting',
    icon: Lightbulb,
    title: 'Landscape Lighting',
    description: 'Modern outdoor lighting to highlight and elevate your entire property. Create ambiance, improve security, and showcase your landscape 24/7.',
    features: ['Path Lighting', 'Accent Uplights', 'Security Lighting', 'Smart Controls'],
  },
  {
    id: 'patio-covers',
    slug: '/services/patio-covers',
    icon: Umbrella,
    title: 'Patio Covers & Shade Structures',
    description: 'Custom-built covers, pergolas, and shade solutions for year-round comfort. Extend your living space outdoors with protection from the desert sun.',
    features: ['Aluminum Covers', 'Wood Pergolas', 'Lattice Structures', 'Motorized Shades'],
  },
  {
    id: 'trellises-arbors',
    slug: '/services/trellises-arbors',
    icon: Grid3X3,
    title: 'Trellises & Arbors',
    description: 'Beautiful decorative structures that add vertical interest and support climbing plants. Perfect for creating intimate garden spaces.',
    features: ['Garden Arbors', 'Privacy Screens', 'Vine Supports', 'Custom Designs'],
  },
  {
    id: 'steps-walkways',
    slug: '/services/steps-walkways',
    icon: Footprints,
    title: 'Steps, Walkways & Pathways',
    description: 'Elegant pathways and step designs that enhance accessibility while adding visual appeal to your landscape.',
    features: ['Stone Walkways', 'Paver Steps', 'Flagstone Paths', 'Lit Pathways'],
  },
  {
    id: 'outdoor-kitchens',
    slug: '/services/outdoor-kitchens',
    icon: Flame,
    title: 'Outdoor Kitchens & Fire Features',
    description: 'Luxury outdoor cooking spaces, fireplaces, fire pits, and entertainment areas. Create the ultimate backyard destination for gatherings.',
    features: ['BBQ Islands', 'Pizza Ovens', 'Fire Pits', 'Fireplaces'],
  },
];

const Services = () => {
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
            Our Services
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Premium Landscaping Solutions
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            Complete outdoor transformation services to elevate your property in Henderson & Las Vegas.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="card-service scroll-mt-32"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-semibold mb-3 text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link
                      to={service.slug}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Transform Your Backyard Into Something{' '}
            <span className="text-accent">Next Level</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Ready to get started? Contact us today for a free consultation and estimate.
          </p>
          <Link to="/contact" className="btn-hero inline-flex items-center gap-2">
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;

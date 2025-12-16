import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Target, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-landscape.jpg';
import galleryPavers from '@/assets/gallery-pavers.jpg';

const values = [
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We use only premium materials and employ skilled craftsmen to ensure every project exceeds expectations.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Your vision is our priority. We work closely with you from concept to completion to bring your dream outdoor space to life.',
  },
  {
    icon: Target,
    title: 'Attention to Detail',
    description: 'From precise measurements to finishing touches, we obsess over every detail to deliver perfection.',
  },
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '15+', label: 'Years Experience' },
  { number: '100%', label: 'Satisfaction Rate' },
  { number: '50+', label: '5-Star Reviews' },
];

const About = () => {
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
            About Us
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Meet NX Level Landscaping
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            Elevating outdoor living—one project at a time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={galleryPavers}
                  alt="NX Level Landscaping team at work"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
                Our Story
              </span>
              <h2 className="heading-section">
                Taking Landscapes to the{' '}
                <span className="heading-accent">NX Level</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  NX Level Landscaping takes every project to the next level with expert landscape design,
                  high-end paver and hardscape work, turf installation, outdoor lighting, patio covers,
                  trellises, steps, walkways, outdoor kitchens, fireplaces, and complete backyard transformations.
                </p>
                <p>
                  Based in Henderson, Nevada, we've been serving the Las Vegas Valley for over 15 years,
                  building a reputation for quality craftsmanship, innovative design, and exceptional customer service.
                </p>
                <p>
                  Our team of skilled professionals is passionate about creating outdoor spaces that not only
                  look stunning but function perfectly for your lifestyle. From intimate patios to expansive
                  entertainment areas, we bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
              Our Values
            </span>
            <h2 className="heading-section">
              What Sets Us <span className="heading-accent">Apart</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card-service text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
                Why Choose Us
              </span>
              <h2 className="heading-section">
                The NX Level <span className="heading-accent">Difference</span>
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  'Licensed, bonded, and insured for your protection',
                  'Free detailed consultations and 3D design previews',
                  'Premium materials from trusted suppliers',
                  'Experienced crews with specialized training',
                  'Clear communication throughout every project',
                  'Comprehensive warranties on all work',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-hero inline-flex items-center gap-2">
                Get Started Today
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Beautiful backyard transformation"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-8 py-6 rounded-xl shadow-xl">
                <p className="font-display text-4xl font-bold">100%</p>
                <p className="text-sm font-medium">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Let's Elevate Your <span className="text-accent">Outdoor Living Space</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Ready to transform your backyard into something extraordinary? Contact us for a free consultation.
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

export default About;

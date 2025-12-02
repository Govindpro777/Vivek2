import { Link } from 'react-router-dom';
import { ArrowLeft, Hammer, CheckCircle, ArrowRight } from 'lucide-react';

const HardscapePavers = () => {
  const features = [
    'Premium paver driveways',
    'Custom patio designs',
    'Retaining walls',
    'Seating walls and fire pits',
    'Pool decks and coping',
    'Natural stone installations',
  ];

  return (
    <main className="pt-32 pb-20">
      <section className="bg-primary/5 py-16">
        <div className="container-custom">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-6">
            <ArrowLeft size={20} />
            Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Hammer size={32} className="text-primary" />
              </div>
              <h1 className="heading-section mb-6">
                Hardscape & <span className="heading-accent">Pavers</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Elevate your outdoor living with premium paver installations and custom hardscape solutions. 
                From elegant driveways to stunning patios, we use only the highest quality materials and 
                craftsmanship to create lasting beauty.
              </p>
              <Link to="/contact" className="btn-hero inline-flex items-center gap-2">
                Get a Free Consultation
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800" 
                alt="Hardscape and Pavers" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let us create stunning hardscape features that will last for decades.
          </p>
          <Link to="/contact" className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors inline-flex items-center gap-2">
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HardscapePavers;

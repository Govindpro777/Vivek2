import { Link } from 'react-router-dom';
import { ArrowLeft, Umbrella, CheckCircle, ArrowRight } from 'lucide-react';

const PatioCovers = () => {
  const features = [
    'Custom aluminum patio covers',
    'Wood pergola construction',
    'Lattice shade structures',
    'Motorized louvered roofs',
    'Attached and freestanding options',
    'Weather-resistant materials',
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
                <Umbrella size={32} className="text-primary" />
              </div>
              <h1 className="heading-section mb-6">
                Patio Covers & <span className="heading-accent">Shade Structures</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Beat the Nevada heat with custom-built patio covers and shade structures. Our solutions 
                provide year-round comfort while adding architectural interest and value to your 
                outdoor living space.
              </p>
              <Link to="/contact" className="btn-hero inline-flex items-center gap-2">
                Get a Free Consultation
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" 
                alt="Patio Covers" 
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
          <h2 className="text-3xl font-display font-bold mb-4">Ready for Year-Round Outdoor Comfort?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Enjoy your backyard in any weather with a custom shade solution.
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

export default PatioCovers;

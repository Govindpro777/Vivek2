import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, CheckCircle, ArrowRight } from 'lucide-react';

const LandscapeDesign = () => {
  const features = [
    'Custom 3D design renderings',
    'Site analysis and planning',
    'Plant selection and placement',
    'Irrigation system design',
    'Hardscape integration',
    'Sustainable landscape solutions',
  ];

  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container-custom">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-6">
            <ArrowLeft size={20} />
            Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Compass size={32} className="text-primary" />
              </div>
              <h1 className="heading-section mb-6">
                Landscape <span className="heading-accent">Design</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Transform your outdoor space with our creative, functional, and modern landscape designs. 
                We work closely with you to understand your vision and create a customized plan that 
                maximizes your property's potential while reflecting your personal style.
              </p>
              <Link to="/contact" className="btn-hero inline-flex items-center gap-2">
                Get a Free Consultation
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800" 
                alt="Landscape Design" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Design Your Dream Landscape?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let our expert designers create a custom plan that brings your vision to life.
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

export default LandscapeDesign;

// import { Link } from 'react-router-dom';
// import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  IdCard,
  ShieldCheck,
  FileBadge2,
} from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">NX</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight">NX Level</span>
                <span className="text-xs text-primary-foreground/70 uppercase tracking-widest">Landscaping</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Taking your outdoor space to the next level with premium landscape design, hardscape, and outdoor living solutions in Henderson & Las Vegas.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61585199820177" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>


          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services#landscape-design" className="text-primary-foreground/80 hover:text-accent transition-colors">Landscape Design</Link></li>
              <li><Link to="/services#hardscape" className="text-primary-foreground/80 hover:text-accent transition-colors">Hardscape & Pavers</Link></li>
              <li><Link to="/services#turf" className="text-primary-foreground/80 hover:text-accent transition-colors">Turf Installation</Link></li>
              <li><Link to="/services#lighting" className="text-primary-foreground/80 hover:text-accent transition-colors">Landscape Lighting</Link></li>
              <li><Link to="/services#patio-covers" className="text-primary-foreground/80 hover:text-accent transition-colors">Patio Covers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  916 Santa Helena<br />
                  Henderson, NV 89002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <a href="tel:+7023486380" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  (702)-348-6380
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <a href="mailto:quotes@nxlevellandscaping.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  quotes@nxlevellandscaping.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">Mon-Fri: 8AM - 5PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-6">NX Level License</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IdCard size={20} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  License 0077586<br />
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FileBadge2 size={20} className="text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Issued By NVSCB
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Type C10 – Landscape Contractor
                </span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Verified by Yelp on 2025-10-08
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6 px-4">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} NX Level Landscaping. All rights reserved.</p>
          <p>Service Area: Henderson + Las Vegas Valley</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

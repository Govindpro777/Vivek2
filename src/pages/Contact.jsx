


// import { useState, useEffect, useRef } from 'react';
// import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import heroImage from '@/assets/hero-landscape.jpg';

// const projectTypes = [
//   'Landscape Design',
//   'Hardscape & Pavers',
//   'Turf Installation',
//   'Landscape Lighting',
//   'Patio Covers',
//   'Outdoor Kitchen',
//   'Fire Features',
//   'Complete Backyard Renovation',
//   'Other',
// ];

// const TYPEFORM_ID = '01KCSFN1S4BKG84BF68ZA3Q0E8';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     projectType: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [typeformScriptLoaded, setTypeformScriptLoaded] = useState(false);
//   const navigate = useNavigate();
//   const typeformRef = useRef(null);

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     await new Promise(r => setTimeout(r, 2000));
//     localStorage.setItem('submittedFormData', JSON.stringify(formData));
//     navigate('/thank-you');
//     setIsSubmitting(false);
//   };

//   // Load Typeform embed script once
//   useEffect(() => {
//     // Check if script already exists
//     if (document.querySelector('script[src*="embed.typeform.com"]')) {
//       setTypeformScriptLoaded(true);
//       return;
//     }

//     const script = document.createElement('script');
//     script.src = '//embed.typeform.com/next/embed.js';
//     script.async = true;
//     script.onload = () => setTypeformScriptLoaded(true);

//     document.body.appendChild(script);

//     return () => {
//       if (script.parentNode) {
//         script.parentNode.removeChild(script);
//       }
//     };
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${heroImage})` }}
//         />
//         <div className="absolute inset-0 gradient-hero" />
//         <div className="relative z-10 container-custom px-4 text-center">
//           <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
//             Get In Touch
//           </span>
//           <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
//             Contact Us
//           </h1>
//           <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
//             Ready to take your yard to the next level? Let's talk about your project.
//           </p>
//         </div>
//       </section>

//       <section className="section-padding">
//         <div className="container-custom">
//           <div className="max-h-[1000px] ">
//             {/* Contact Form + Typeform */}
//             <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
//               <h2 className="font-display text-2xl font-bold mb-2 text-foreground">
//                 Request a Free Estimate
//               </h2>
//               <p className="text-muted-foreground mb-8">
//                 Fill out the form below and we'll get back to you within 24 hours.
//               </p>

//               {/* Typeform Widget - Primary */}
//               <div className="mb-8">
//                 <div
//                   ref={typeformRef}
//                   data-tf-live={TYPEFORM_ID}
//                   className="w-full rounded-lg overflow-hidden shadow-lg"
//                   style={{
//                     width: '100%',
//                     height: '700px',
//                     borderRadius: '12px'
//                   }}
//                 />
//                 {typeformScriptLoaded && (
//                   <p className="text-muted-foreground text-sm mt-4 text-center">
//                     Powered by Typeform
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className="space-y-8 mt-12">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="bg-card rounded-xl p-6 border border-border">
//                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                   <Phone size={24} className="text-primary" />
//                 </div>
//                 <h3 className="font-semibold text-foreground mb-1">Phone</h3>
//                 <a
//                   href="tel:+17023486380"
//                   className="text-muted-foreground text-sm hover:text-primary transition-colors"
//                 >
//                   (702)-348-6380
//                 </a>
//               </div>

//               <div className="bg-card rounded-xl p-6 border border-border">
//                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                   <Mail size={24} className="text-primary" />
//                 </div>
//                 <h3 className="font-semibold text-foreground mb-1">Email</h3>
//                 <a
//                   href="mailto:quotes@nxlevellandscaping.com"
//                   className="text-muted-foreground text-sm hover:text-primary transition-colors"
//                 >
//                   quotes@nxlevellandscaping.com
//                 </a>
//               </div>

//               <div className="bg-card rounded-xl p-6 border border-border">
//                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                   <Clock size={24} className="text-primary" />
//                 </div>
//                 <h3 className="font-semibold text-foreground mb-1">Hours</h3>
//                 <p className="text-muted-foreground text-sm">
//                   Mon-Fri: 8AM - 5PM
//                 </p>
//               </div>
//             </div>

//             <div className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border h-[400px]">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.9076644614607!2d-114.9719843!3d36.0397222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8cf8e3a3c5b8d%3A0x8e5e5f8e5e5e5e5e!2sHenderson%2C%20NV%2089002!5e0!3m2!1sen!2sus!4v1234567890"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="NX Level Landscaping Location"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;


import { useEffect, useRef, useState } from "react";
import { Phone, Mail, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-landscape.jpg";

const TYPEFORM_ID = "01KCSFN1S4BKG84BF68ZA3Q0E8";

const Contact = () => {
  const [typeformScriptLoaded, setTypeformScriptLoaded] = useState(false);
  const navigate = useNavigate();
  const typeformRef = useRef(null);

  // Load Typeform embed script once
  useEffect(() => {
    const existing = document.querySelector('script[src*="embed.typeform.com"]');
    if (existing) {
      setTypeformScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    script.onload = () => setTypeformScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

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
            Get In Touch
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            Ready to take your yard to the next level? Let's talk about your
            project.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-h-[1200px]">
            {/* Contact Form + Typeform */}
            <div className="bg-card rounded-2xl py-6 px-8 shadow-xl border border-border">
              <h2 className="font-display text-2xl font-bold mb-2 text-foreground">
                Request a Free Estimate
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {/* Typeform Widget - Primary */}
              <div className="mb-8">
                <div
                  ref={typeformRef}
                  data-tf-live={TYPEFORM_ID}
                  className="w-full rounded-lg overflow-hidden shadow-lg"
                  style={{
                    width: "100%",
                    height: "100%",

                    borderRadius: "12px",
                  }}
                />
                {typeformScriptLoaded && (
                  <p className="text-muted-foreground text-sm mt-6 text-center">
                    Powered by Typeform
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-8 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Phone size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a
                  href="tel:+17023486380"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  (702)-348-6380
                </a>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:quotes@nxlevellandscaping.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors break-all"
                >
                  quotes@nxlevellandscaping.com
                </a>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Clock size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon-Fri: 8AM - 5PM
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.9076644614607!2d-114.9719843!3d36.0397222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8cf8e3a3c5b8d%3A0x8e5e5f8e5e5e5e5e!2sHenderson%2C%20NV%2089002!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NX Level Landscaping Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

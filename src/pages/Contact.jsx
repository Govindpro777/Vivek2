// import { useState } from 'react';
// import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
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

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     projectType: '',
//     message: '',
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate form submission
//     setIsSubmitted(true);
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({ name: '', phone: '', email: '', projectType: '', message: '' });
//     }, 3000);
//   };

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

//       {/* Contact Section */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
//               <h2 className="font-display text-2xl font-bold mb-2 text-foreground">
//                 Request a Free Estimate
//               </h2>
//               <p className="text-muted-foreground mb-8">
//                 Fill out the form below and we'll get back to you within 24 hours.
//               </p>

//               {isSubmitted ? (
//                 <div className="text-center py-12">
//                   <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
//                     <CheckCircle size={32} className="text-primary" />
//                   </div>
//                   <h3 className="font-display text-xl font-semibold mb-2">Thank You!</h3>
//                   <p className="text-muted-foreground">
//                     We've received your message and will contact you soon.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-2">
//                       Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
//                       placeholder="Your full name"
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-foreground mb-2">
//                         Phone *
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
//                         placeholder="(702) 555-1234"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-foreground mb-2">
//                         Email *
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
//                         placeholder="you@example.com"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-2">
//                       Project Type *
//                     </label>
//                     <select
//                       name="projectType"
//                       value={formData.projectType}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
//                     >
//                       <option value="">Select a project type</option>
//                       {projectTypes.map((type) => (
//                         <option key={type} value={type}>
//                           {type}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-2">
//                       Message *
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
//                       placeholder="Tell us about your project..."
//                     />
//                   </div>

//                   <button type="submit" className="btn-hero w-full flex items-center justify-center gap-2">
//                     <Send size={20} />
//                     Send Message
//                   </button>
//                 </form>
//               )}
//             </div>

//             {/* Contact Info & Map */}
//             <div className="space-y-8">
//               {/* Contact Cards */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="bg-card rounded-xl p-6 border border-border">
//                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                     <MapPin size={24} className="text-primary" />
//                   </div>
//                   <h3 className="font-semibold text-foreground mb-1">Address</h3>
//                   <p className="text-muted-foreground text-sm">
//                     916 Santa Helena<br />
//                     Henderson, NV 89002
//                   </p>
//                 </div>

//                 <div className="bg-card rounded-xl p-6 border border-border">
//                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                     <Phone size={24} className="text-primary" />
//                   </div>
//                   <h3 className="font-semibold text-foreground mb-1">Phone</h3>
//                   <a href="tel:+17025551234" className="text-muted-foreground text-sm hover:text-primary transition-colors">
//                     (702) 555-1234
//                   </a>
//                 </div>

//                 <div className="bg-card rounded-xl p-6 border border-border">
//                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                     <Mail size={24} className="text-primary" />
//                   </div>
//                   <h3 className="font-semibold text-foreground mb-1">Email</h3>
//                   <a href="mailto:info@nxlevellandscaping.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
//                     info@nxlevellandscaping.com
//                   </a>
//                 </div>

//                 <div className="bg-card rounded-xl p-6 border border-border">
//                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                     <Clock size={24} className="text-primary" />
//                   </div>
//                   <h3 className="font-semibold text-foreground mb-1">Hours</h3>
//                   <p className="text-muted-foreground text-sm">
//                     Mon-Fri: 8AM - 5PM
//                   </p>
//                 </div>
//               </div>

//               {/* Map */}
//               <div className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border h-[400px]">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.9076644614607!2d-114.9719843!3d36.0397222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8cf8e3a3c5b8d%3A0x8e5e5f8e5e5e5e5e!2sHenderson%2C%20NV%2089002!5e0!3m2!1sen!2sus!4v1234567890"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="NX Level Landscaping Location"
//                 />
//               </div>

//               {/* Service Area */}
//               <div className="bg-primary/10 rounded-xl p-6">
//                 <h3 className="font-display text-lg font-semibold text-foreground mb-2">
//                   Service Area
//                 </h3>
//                 <p className="text-muted-foreground">
//                   We proudly serve Henderson, Las Vegas, and the entire Las Vegas Valley. 
//                   Contact us to confirm service availability in your area.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;


// import { useState } from 'react';
// import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Star, Leaf, Users } from 'lucide-react';
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

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     projectType: '',
//     message: '',
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate form submission
//     setIsSubmitted(true);
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({ name: '', phone: '', email: '', projectType: '', message: '' });
//     }, 5000); // Increased timeout for better UX
//   };

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

//       {/* Contact Section */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
//               <h2 className="font-display text-2xl font-bold mb-2 text-foreground">
//                 Request a Free Estimate
//               </h2>
//               <p className="text-muted-foreground mb-8">
//                 Fill out the form below and we'll get back to you within 24 hours.
//               </p>

//               {isSubmitted ? (
//                 <div className="text-center py-16 animate-in fade-in duration-1000">
//                   {/* Success Icon */}
//                   <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-primary/30">
//                     <CheckCircle size={48} className="text-primary drop-shadow-lg" />
//                   </div>

//                   {/* Main Thank You Message */}
//                   <h3 className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
//                     Thank You, {formData.name || 'There'}!
//                   </h3>

//                   {/* Personalized Message */}
//                   <p className="text-xl font-semibold text-foreground mb-2 max-w-md mx-auto leading-relaxed">
//                     We've received your request for a{' '}
//                     <span className="font-bold text-primary">{formData.projectType || 'landscape project'}</span>
//                   </p>

//                   <div className="bg-primary/10 rounded-xl p-6 mb-8 border border-primary/20">
//                     <p className="text-lg text-foreground/90 mb-4">
//                       A landscaping expert will review your project details and contact you within{' '}
//                       <span className="font-bold text-primary">24 hours</span> to schedule your{' '}
//                       <span className="font-bold text-accent">FREE estimate</span>.
//                     </p>

//                     {/* Next Steps */}
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//                       <div className="text-center p-4">
//                         <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-3">
//                           <Star size={20} className="text-accent" />
//                         </div>
//                         <p className="text-sm font-medium text-foreground/90">Personalized Design</p>
//                       </div>
//                       <div className="text-center p-4">
//                         <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-3">
//                           <Leaf size={20} className="text-green-500" />
//                         </div>
//                         <p className="text-sm font-medium text-foreground/90">Expert Consultation</p>
//                       </div>
//                       <div className="text-center p-4">
//                         <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-3">
//                           <Users size={20} className="text-primary" />
//                         </div>
//                         <p className="text-sm font-medium text-foreground/90">5-Star Service</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* CTA Button */}
//                   <button
//                     onClick={() => setIsSubmitted(false)}
//                     className="btn-hero w-full max-w-md mx-auto flex items-center justify-center gap-3 group"
//                   >
//                     <Send size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
//                     Start Another Project
//                   </button>

//                   {/* Contact Reminder */}
//                   <p className="text-muted-foreground mt-8 text-sm">
//                     Need immediate help? Call us at{' '}
//                     <a href="tel:+17025551234" className="font-semibold text-primary hover:underline">
//                       (702) 555-1234
//                     </a>
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-2">
//                       Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
//                       placeholder="Your full name"
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-foreground mb-2">
//                         Phone *
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
//                         placeholder="(702) 555-1234"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-foreground mb-2">
//                         Email *
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
//                         placeholder="you@example.com"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-2">
//                       Project Type *
//                     </label>
//                     <select
//                       name="projectType"
//                       value={formData.projectType}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
//                     >
//                       <option value="">Select a project type</option>
//                       {projectTypes.map((type) => (
//                         <option key={type} value={type}>
//                           {type}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-2">
//                       Message *
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
//                       placeholder="Tell us about your project..."
//                     />
//                   </div>

//                   <button type="submit" className="btn-hero w-full flex items-center justify-center gap-2">
//                     <Send size={20} />
//                     Send Message
//                   </button>
//                 </form>
//               )}
//             </div>

//             {/* Contact Info & Map - Unchanged */}
//             <div className="space-y-8">
//               {/* Contact Cards */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="bg-card rounded-xl p-6 border border-border">
//                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                     <MapPin size={24} className="text-primary" />
//                   </div>
//                   <h3 className="font-semibold text-foreground mb-1">Address</h3>
//                   <p className="text-muted-foreground text-sm">
//                     916 Santa Helena<br />
//                     Henderson, NV 89002
//                   </p>
//                 </div>

//                 <div className="bg-card rounded-xl p-6 border border-border">
//                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                     <Phone size={24} className="text-primary" />
//                   </div>
//                   <h3 className="font-semibold text-foreground mb-1">Phone</h3>
//                   <a href="tel:+17025551234" className="text-muted-foreground text-sm hover:text-primary transition-colors">
//                     (702) 555-1234
//                   </a>
//                 </div>

//                 <div className="bg-card rounded-xl p-6 border border-border">
//                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                     <Mail size={24} className="text-primary" />
//                   </div>
//                   <h3 className="font-semibold text-foreground mb-1">Email</h3>
//                   <a href="mailto:info@nxlevellandscaping.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
//                     info@nxlevellandscaping.com
//                   </a>
//                 </div>

//                 <div className="bg-card rounded-xl p-6 border border-border">
//                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                     <Clock size={24} className="text-primary" />
//                   </div>
//                   <h3 className="font-semibold text-foreground mb-1">Hours</h3>
//                   <p className="text-muted-foreground text-sm">
//                     Mon-Fri: 8AM - 5PM
//                   </p>
//                 </div>
//               </div>

//               {/* Map */}
//               <div className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border h-[400px]">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.9076644614607!2d-114.9719843!3d36.0397222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8cf8e3a3c5b8d%3A0x8e5e5f8e5e5e5e5e!2sHenderson%2C%20NV%2089002!5e0!3m2!1sen!2sus!4v1234567890"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="NX Level Landscaping Location"
//                 />
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;


import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-landscape.jpg';

const projectTypes = [
  'Landscape Design',
  'Hardscape & Pavers',
  'Turf Installation',
  'Landscape Lighting',
  'Patio Covers',
  'Outdoor Kitchen',
  'Fire Features',
  'Complete Backyard Renovation',
  'Other',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Store form data for ThankYou page
    localStorage.setItem('submittedFormData', JSON.stringify(formData));

    // Navigate to thank-you page
    navigate('/thank-you');
  };

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
            Ready to take your yard to the next level? Let's talk about your project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <h2 className="font-display text-2xl font-bold mb-2 text-foreground">
                Request a Free Estimate
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50"
                      placeholder="(702) 555-1234"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none disabled:opacity-50"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    916 Santa Helena<br />
                    Henderson, NV 89002
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+17025551234" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    (702) 555-1234
                  </a>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:info@nxlevellandscaping.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    info@nxlevellandscaping.com
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
        </div>
      </section>
    </>
  );
};

export default Contact;

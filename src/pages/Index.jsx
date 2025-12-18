import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import AboutPreview from '@/components/AboutPreview';
import GalleryPreview from '@/components/GalleryPreview';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      {/* <GalleryPreview /> */}
      <CTASection />
    </>
  );
};

export default Index;

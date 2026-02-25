import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import AboutPreview from '@/components/AboutPreview';
import GalleryPreview from '@/components/GalleryPreview';
import CTASection from '@/components/CTASection';
import VideoComponent from '@/components/VideoComponent'

const Index = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <VideoComponent/>
      {/* <GalleryPreview /> */}
      <CTASection />
    </>
  );
};

export default Index;

import LinksBar from '@/components/layout/linksbar';
import { ThreeItemGrid } from 'components/grid/three-items';
import CategoryCarousel from 'components/categories';
import FeaturesSection from 'components/features';
import { FourItemGrid } from 'components/grid/four-items';
import AboutUsCTA from '@/components/layout/aboutus-cta';
import FindUs from '@/components/home/findus';
import { EightItemGrid } from 'components/grid/eight-items';
import LocationOrdering from '@/components/home/how-to-order';
import { Carousel } from 'components/carousel';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <div className="relative z-10">
        <LinksBar />
      </div>
      <div className="relative w-full pt-12 dark:bg-neutral-800/40">
        <div
          className="pattern-bg default-fade z-0"
          style={{
            opacity: 0.15,
            transition: 'opacity 0.5s ease-in-out'
          }}
        ></div>
        <div
          className="pattern-bg z-0"
          style={{
            WebkitMask: `radial-gradient(circle at 50% 50%,  rgb(15 23 42) 0%, transparent 35%)`,
            mask: `radial-gradient(circle at 50% 50%,  rgb(15 23 42) 0%, transparent 35%)`,
            opacity: 0
          }}
        ></div>
        <ThreeItemGrid />
        <FeaturesSection />
      </div>
      <CategoryCarousel />
      <FourItemGrid />
      <AboutUsCTA />
      <EightItemGrid />
      <FindUs />
      <EightItemGrid />
      <LocationOrdering />
      <Carousel />
      <Footer />
    </>
  );
}

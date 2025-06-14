import AboutUsCTA from '@/components/layout/aboutus-cta';
import LinksBar from '@/components/layout/linksbar';
import { Carousel } from 'components/carousel';
import CategoryCarousel from 'components/categories';
import FeaturesSection from 'components/features';
import { FourItemGrid } from 'components/grid/four-items';
import { ThreeItemGrid } from 'components/grid/three-items';
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
      <LinksBar />
      <div className="relative w-full pt-12 dark:bg-neutral-800/40">
        <div
          className="pattern-bg default-fade"
          style={{
            opacity: 0.15,
            transition: 'opacity 0.5s ease-in-out'
          }}
        ></div>
        <div
          className="pattern-bg"
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
      <Carousel />
      {/* <Categories /> */}

      <Footer />
    </>
  );
}

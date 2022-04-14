import Features from '../components/landing/Features';
import Hero from '../components/landing/Hero';
import LandingLayout from '../components/layouts/LandingLayout';

function HomePage() {
  return (
    <LandingLayout>
      <Hero />
      <Features />
    </LandingLayout>
  );
}

export default HomePage;

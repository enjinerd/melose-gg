import LandingLayout from './components/layouts/LandingLayout';
import Hero from './components/landing/Hero';
import Features from './components/landing/Features';

function App() {
  return (
    <LandingLayout>
      <Hero />
      <Features />
    </LandingLayout>
  );
}

export default App;

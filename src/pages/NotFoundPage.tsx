import LandingLayout from '../components/layouts/LandingLayout';
import NotFoundMsg from '../components/not-found/NotFoundMsg';

function HomePage() {
  return (
    <LandingLayout>
      <NotFoundMsg />
    </LandingLayout>
  );
}

export default HomePage;

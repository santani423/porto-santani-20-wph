import Hero from './home/partials/hero';
import ImpactStatistics from './home/partials/impact-statistics';
import Navbar from './home/partials/navbar';
import ServicessProcess from './home/partials/services-process';
import TrustedBy from './home/partials/trusted-by';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <ImpactStatistics />
      <ServicessProcess />
    </div>
  );
};

export default Home;

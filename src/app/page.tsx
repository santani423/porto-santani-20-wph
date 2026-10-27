import Contact from './home/partials/contact';
import Faq from './home/partials/faq';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Industries from './home/partials/industries';
import ImpactStatistics from './home/partials/impact-statistics';
import Navbar from './home/partials/navbar';
import Projects from './home/partials/projects';
import Services from './home/partials/services';
import ServicessProcess from './home/partials/services-process';
import Testimonials from './home/partials/testimonials';
import TrustedBy from './home/partials/trusted-by';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <ImpactStatistics />
      <ServicessProcess />
      <Services />
      <Industries />
      <Projects />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

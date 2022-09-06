import BigTextBlock from '../components/BigTextBlock';
import CaseStudies from '../components/CaseStudies';
import Hero from '../components/Hero';
import Team from '../components/Team';
import TeamQuote from '../components/TeamQuote';
import CTA from '../components/CTA';
import Services from '../components/Services';
import Spacer from '../components/Spacer';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Hero />
      <Team />
      <BigTextBlock
        content="We found the biggest problem with our clients is that they want the most amount of awareness and leads for the lowest possible price in the shortest possible time frame."
        subtitle="Luckily, we provide the berry best in all aspects of digital marketing."
      />
      <CTA content="Do you want to be your best competitor?" button="check yourself" />
      <BigTextBlock
        content="Digital marketing is a bit like making a smoothie, you can’t make it tasty without adding in a little of everything."
        subtitle="Web design, social media, paid ads, reporting, copywriting, branding, and more, we cover it all. (We’ll even attend your padel tennis games.)"
      />
      <TeamQuote />
      <CaseStudies />
      <CTA
        content="From raw fruit to the tasty juice - learn how we make businesses thrive."
        button="our process"
      />
      <Services />
      <Spacer />
    </>
  );
};

export default Home;

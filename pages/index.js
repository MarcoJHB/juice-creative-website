import BigTextBlock from '../components/BigTextBlock';
import CaseStudies from '../components/CaseStudies';
import Hero from '../components/Hero';
import Team from '../components/Team';
import TeamQuote from '../components/TeamQuote';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Hero />
      <Team />
      <BigTextBlock />
      <TeamQuote />
      <CaseStudies />
    </>
  );
};

export default Home;

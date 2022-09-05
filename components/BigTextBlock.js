import Image from 'next/image';
import Link from 'next/link';
import fruit from '../public/images/pawpaw.svg';
import { motion } from 'framer-motion';

const BigTextBlock = () => {
  return (
    <section className={'big-text-container'}>
      <motion.div initial="hidden" whileInView={{ opacity: 1 }}>
        <h2 className={'primary-heading'}>
          We found the biggest problem with our clients is that they want the most amount of
          awareness and leads for the lowest possible price in the shortest possible timeframe.
        </h2>
      </motion.div>
      <div className={'bottom-text'}>
        <Image src={fruit} alt="fruit" width={60} height={84} />
        <p>
          Web design, social media, paid ads, reporting, copywriting, branding, and more, we cover
          it all. (We’ll even attend your padel tennis games.)
        </p>
      </div>
    </section>
  );
};

export default BigTextBlock;

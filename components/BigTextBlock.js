import Image from 'next/image';
import Link from 'next/link';
import fruit from '../public/images/pawpaw.svg';
import { motion } from 'framer-motion';

const BigTextBlock = (props) => {
  return (
    <section className={'big-text-container'}>
      <motion.div initial="hidden" whileInView={{ opacity: 1 }}>
        <h2 className={'primary-heading'}>
          {props.content}
        </h2>
      </motion.div>
      <div className={'bottom-text'}>
        <Image src={fruit} alt="fruit" width={60} height={84} />
        <p>
          {props.subtitle}
        </p>
      </div>
    </section>
  );
};

export default BigTextBlock;

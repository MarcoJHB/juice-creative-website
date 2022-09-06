import Image from 'next/image';
import Link from 'next/link';
import fruit from '../public/images/pawpaw.svg';
import { motion } from 'framer-motion';

const CTA = (props) => {
  return (
    <section className={'cta-container'}>
      <motion.div initial="hidden" whileInView={{ opacity: 1 }}>
        <h2 className={'primary-heading'}>{props.content}</h2>
      </motion.div>
      <button className={'large-btn'}>{props.button}</button>
    </section>
  );
};

export default CTA;

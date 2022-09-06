import Image from 'next/image';
import Link from 'next/link';
import fruit from '../public/images/sliced-orange.jpg';
import { motion } from 'framer-motion';

const Spacer = () => {
  return (
    <section className={'spacer'}>
      <Image src={fruit} />
    </section>
  );
};

export default Spacer;

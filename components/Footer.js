import Image from 'next/image';
import Link from 'next/link';
import fruit from '../public/images/pawpaw.svg';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className={'footer-container'}>
      <div className={'footer-top'}>
        <motion.div className={'footer-left'} initial="hidden" whileInView={{ opacity: 1 }}>
          <Link href={'tel:+27731806374'}>
            <a className={'primary-heading'}>+27731806374</a>
          </Link>
          <Link href={'mailto:hello@thejc.co.za'}>
            <a className={'primary-heading'}>hello@thejc.co.za</a>
          </Link>
          <p className={'primary-heading'}>or</p>
          <button className={'primary-heading'}>fill in a short brief</button>
        </motion.div>
        <div className={'footer-right'}>
          <p>Johannesburg, South Africa</p>
          <p>Lyon, France</p>
          <p>Follow us</p>
          <div className={'social-container'}>
            <Image />
            <Image />
            <Image />
            <Image />
          </div>
        </div>
      </div>
      <div className={'footer-bottom'}>
        <p>All rights reserved 2022© The Juice Creative</p>
      </div>
    </footer>
  );
};

export default Footer;

import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/jc-logo.svg';

const Hero = () => {
  return (
    <div className={'hero-container'}>
      <h1 className={'hero-title'}>We are the juice creative, we build websites</h1>
      <p>
        By combining strategy, design and technology, we design experiences that bridge the gap
        between you and your users.
      </p>
      <a className={'contact-btn'}>Contact us</a>
    </div>
  );
};

export default Hero;

import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/jc-logo.svg';

const NavBar = () => {
  return (
    <nav className={'nav-container'}>
      <div className={'nav-item-container'}>
        <Link href="/">
          <Image src={logo} alt="The Juice Creative" width={140} height={140} />
        </Link>
      </div>
      <div className={'nav-item-container'}>
        <Link href="/">
          <a className={'nav-cta'}>SAY HELLO</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

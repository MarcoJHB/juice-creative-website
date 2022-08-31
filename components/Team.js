import Image from 'next/image';
import Link from 'next/link';
import chantal from '../public/images/chantal-team.jpg';
import kimeke from '../public/images/kimeke-team.jpg';
import marco from '../public/images/marco-team.jpg';

const Team = () => {
  return (
    <section className={'team-container'}>
      <h2 className={'team-title'}>Our team is one in a melon.</h2>
      <div className={'team-images'}>
        <div className={'team-left'}>
          <figure className={'team-picture'}>
            <Image src={chantal} alt="Chantal" width={400} height={520} />
            <figcaption className={'team-text'}>
              <p className={'body-text'}>Chantal</p>
              <p className={'body-text'}>Co-Founder</p>
            </figcaption>
          </figure>
          <figure className={'team-picture'}>
            <Image src={kimeke} alt="Kimeke" width={400} height={520} />
            <figcaption className={'team-text'}>
              <p className={'body-text'}>Kimeke</p>
              <p className={'body-text'}>Marketing Manager</p>
            </figcaption>
          </figure>
        </div>
        <div className={'team-right'}>
          <figure className={'team-picture'}>
            <Image src={marco} alt="Marco" width={427} height={461} />
            <figcaption className={'team-text'}>
              <p className={'body-text'}>Marco</p>
              <p className={'body-text'}>Co-Founder</p>
            </figcaption>
          </figure>
          <div className={'team-cta'}></div>
          <p className={'secondary-heading'}>Want to be on our team? Drop us a lime!</p>
          <a className={'contact-btn'}>Contact us</a>
        </div>
      </div>
    </section>
  );
};

export default Team;

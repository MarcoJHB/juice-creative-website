import Image from 'next/image';
import Link from 'next/link';
import chantal from '../public/images/chantal-quote.jpg';

const TeamQuote = () => {
  return (
    <section className={'team-quote-container'}>
      <figure className={'team-picture'}>
        <Image src={chantal} alt="Chantal" width={400} height={520} />
        <figcaption className={'team-text'}>
          <p className={'body-text'}>Chantal</p>
          <p className={'body-text'}>Co-Founder</p>
        </figcaption>
      </figure>
      <p className={'body-text'}>
        We found many agencies handle too many clients, so their clients might start feeling left
        out. At the Juice Creative, we strive to put our clients while providing them
        out-of-the-juice-box ideas.
      </p>
    </section>
  );
};

export default TeamQuote;

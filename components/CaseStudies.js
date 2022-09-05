import Image from 'next/image';
import Link from 'next/link';
import Accordion from './Accordian';

const CaseStudies = () => {
  return (
    <section className={'case-study-container'}>
      <h2 data-aos="fade-up" className={'primary-heading'}>
        Successful Case Studies
      </h2>
      <Accordion
        title="Padel Lab"
        content="Padel tennis in South Africa is rapidly growing by the day, so Padel Lab decided to come to us when they required a complete digital marketing solution to help drive new players to their courts."
        overview="web dev, seo, social media"
        category="sports"
        video="/images/clients/padellab.mp4"
      />
      <Accordion
        title="WEC Projects"
        content="this is content 2"
        overview="web dev, seo, social media"
        category="sports"
        video="/images/clients/padellab.mp4"
      />
      <Accordion
        title="Rugby Bricks"
        content="this is content 2"
        overview="web dev, seo, social media"
        category="sports"
        video="/images/clients/padellab.mp4"
      />
      <Accordion
        title="Adcock"
        content="this is content 2"
        overview="web dev, seo, social media"
        category="sports"
        video="/images/clients/padellab.mp4"
      />
      <Accordion
        title="Design Muse"
        content="this is content 2"
        overview="web dev, seo, social media"
        category="sports"
        video="/images/clients/padellab.mp4"
      />
    </section>
  );
};

export default CaseStudies;

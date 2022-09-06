import Image from 'next/image';
import Link from 'next/link';
import fruit from '../public/images/pawpaw.svg';
import { motion } from 'framer-motion';

const Services = (props) => {
  return (
    <section className={'services-container'}>
      <motion.div initial="hidden" whileInView={{ opacity: 1 }}>
        <h2 className={'primary-heading'}>Our services</h2>
      </motion.div>
      <div className={'grid-container'}>
        <div className={'services-grid'}>
          <div className={'service-card'}>
            <Image src={fruit} alt="fruit" width={60} height={84} />
            <h3>Website Design</h3>
            <ul className={'service-list'}>
              <li className={'service-item'}>Website Mockups</li>
              <li className={'service-item'}>Website Development</li>
              <li className={'service-item'}>SEO</li>
              <li className={'service-item'}>Ecommerce</li>
              <li className={'service-item'}>Monthly Maintenance</li>
              <li className={'service-item'}>WordPress / Shopify</li>
            </ul>
          </div>
          <div className={'service-card'}>
            <Image src={fruit} alt="fruit" width={60} height={84} />
            <h3>Paid Ads (PPC)</h3>
            <ul className={'service-list'}>
              <li className={'service-item'}>Google Ads</li>
              <li className={'service-item'}>Facebook Ads</li>
              <li className={'service-item'}>Instagram Ads</li>
              <li className={'service-item'}>LinkedIn Ads</li>
              <li className={'service-item'}>Google Shopping Ads</li>
              <li className={'service-item'}>Monthly Reporting</li>
            </ul>
          </div>
          <div className={'service-card'}>
            <Image src={fruit} alt="fruit" width={60} height={84} />
            <h3>Social Media</h3>
            <ul className={'service-list'}>
              <li className={'service-item'}>Social Media Management</li>
              <li className={'service-item'}>Social Media Strategies</li>
              <li className={'service-item'}>Post Content / Design</li>
              <li className={'service-item'}>Community Management</li>
              <li className={'service-item'}>Content Management</li>
              <li className={'service-item'}>Monthly Reporting</li>
            </ul>
          </div>
          <div className={'service-card'}>
            <Image src={fruit} alt="fruit" width={60} height={84} />
            <h3>Copywriting</h3>
            <ul className={'service-list'}>
              <li className={'service-item'}>Blog posts</li>
              <li className={'service-item'}>Social Media copy</li>
              <li className={'service-item'}>Presentations</li>
              <li className={'service-item'}>Pitch Decks</li>
              <li className={'service-item'}>Website copy</li>
              <li className={'service-item'}>SEO Optimisation</li>
            </ul>
          </div>
          <div className={'service-card'}>
            <Image src={fruit} alt="fruit" width={60} height={84} />
            <h3>Branding</h3>
            <ul className={'service-list'}>
              <li className={'service-item'}>Brand Identity</li>
              <li className={'service-item'}>Logo Design</li>
              <li className={'service-item'}>Document Templates</li>
              <li className={'service-item'}>Physical Branding</li>
              <li className={'service-item'}>Event Management</li>
              <li className={'service-item'}>Social Media Templates</li>
            </ul>
          </div>
          <div className={'service-card'}>
            <Image src={fruit} alt="fruit" width={60} height={84} />
            <h3>Reporting</h3>
            <ul className={'service-list'}>
              <li className={'service-item'}>Google Analytics</li>
              <li className={'service-item'}>Google Data Studio</li>
              <li className={'service-item'}>Google Tag Manager</li>
              <li className={'service-item'}>Monthly Reporting</li>
              <li className={'service-item'}>Google Ads Reporting</li>
              <li className={'service-item'}>Insights / Recommendations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

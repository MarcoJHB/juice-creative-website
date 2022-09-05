import { useState } from 'react';
import Image from 'next/image';

const Accordion = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className={'accordion-block'}>
      <button className="accordion-button" onClick={toggle} type="button">
        <p>{props.title}</p>
        <div>
          <p>What we did/doing</p>
          <p>{props.overview}</p>
        </div>
        <div>
          <p>Category</p>
          <p>{props.category}</p>
        </div>
      </button>
      <div
        style={{ display: isShowing ? 'flex' : 'none', padding: '5px' }}
        className={'inner-accordion'}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        ></p>
        <div>
          <video autoPlay loop muted className={'client-video'}>
            <source src={props.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

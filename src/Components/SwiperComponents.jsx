import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import apple1 from '../../src/images/apple1.jpg';
import apple2 from '../../src/images/apple2.png';
import apple3 from '../../src/images/apple3.jpg';
import './SwiperComponets.css';

const SwiperComponent = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    });

    swiperRef.current = swiper;

    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextButtonHandler = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const prevButtonHandler = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img className='apple1' src={apple1} alt="Apple 1" />
        </div>
        <div className="swiper-slide">
          <img className='apple2' src={apple2} alt="Apple 2" />
        </div>
        <div className="swiper-slide">
          <img className='apple3' src={apple3} alt="Apple 3" />
        </div>
      </div>
      {/* <div className="swiper-button-next" onClick={nextButtonHandler}></div>
      <div className="swiper-button-prev" onClick={prevButtonHandler}></div> */}
    </div>
  );
};

export default SwiperComponent;

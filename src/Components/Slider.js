import React, { useEffect, useRef, useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import ButtonSlider from './ButtonSlider'

const Slider = ({ slides, timeToRefresh }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide
  });

  useEffect(() => {
    if (autoPlay) {
      const play = () => {
        autoPlayRef.current()
      }

      const interval = setInterval(play, timeToRefresh * 1000);
      return () => clearInterval(interval);
    }

  }, [autoPlay]);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const firstSlide = () => {
    console.log('111');
    setCurrent(0);
  };

  const lastSlide = () => {
    setCurrent(slides.length - 1);
  };

  const playSlides = () => {
    setAutoPlay(!autoPlay);
  }

  return (
    <div className='container-slider'>
      <FaArrowAltCircleLeft className='arrow left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='arrow right-arrow' onClick={nextSlide} />
      <ButtonSlider name='first' method={firstSlide} />
      <ButtonSlider name='last' method={lastSlide} />
      <ButtonSlider name={autoPlay ? 'play' : 'stop'} method={playSlides} />
      {slides.map((slide, index) => {
        return (
          <div
            key={slide.id}
            className={current === index ? "slide active" : "slide"}
          >
            {index === current && <img src={slide.imageUrl} alt={slide.id} className='image' />}
            {index === current &&
              <p className="description">
                Description: {slide.description}
              </p>
            }
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
import React, { useState, useEffect, useRef } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const AutoSlideCarousel = ({ imageUrls = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const totalSlides = imageUrls.length;
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    if (carouselRef.current && carouselRef.current.carouselStore) {
      carouselRef.current.carouselStore.setStoreState({
        currentSlide: currentSlide,
      });
    }
  }, [currentSlide]);

  const handleImageLoad = (e) => {
    const imgHeight = e.target.naturalHeight;
    setImageHeight(imgHeight); 
  };

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={totalSlides}
      className="h-auto overflow-hidden"
      ref={carouselRef}
      style={{ maxHeight: `${imageHeight}px` }}
    >
      <Slider>
        {imageUrls.map((url, index) => (
          <Slide key={index} index={index}>
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover"
              onLoad={handleImageLoad}
            />
          </Slide>
        ))}
      </Slider>
      <ButtonBack
        onClick={() => setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides)}
      >
        Back
      </ButtonBack>
      <ButtonNext
        onClick={() => setCurrentSlide((currentSlide + 1) % totalSlides)}
      >
        Next
      </ButtonNext>
    </CarouselProvider>
  );
};

export default AutoSlideCarousel;

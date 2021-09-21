import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideShow = ({
  children,
  dots,
  slidesToShow,
  variableWidth,
  adaptiveHeight,
}) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          borderRadius: '50%',
          right: 5,
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          borderRadius: '50%',
          left: 5,
          zIndex: 1,
          opacity: 1,
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    variableWidth,
    adaptiveHeight,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SlideShow;

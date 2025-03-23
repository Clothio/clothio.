import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SlideshowProps {
  slides: {
    id: number;
    image: string;
    title: string;
    description: string;
    buttonText: string;
    link: string;
  }[];
}

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[500px] md:h-[600px]">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:px-10">
                <div className="max-w-lg text-left text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                  <a 
                    href={slide.link} 
                    className="inline-block bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
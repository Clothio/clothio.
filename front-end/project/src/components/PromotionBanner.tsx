import React from 'react';
import { Link } from 'react-router-dom';

interface PromotionBannerProps {
  title: string;
  description: string;
  buttonText: string;
  link: string;
  image: string;
  reverse?: boolean;
}

const PromotionBanner: React.FC<PromotionBannerProps> = ({ 
  title, 
  description, 
  buttonText, 
  link, 
  image,
  reverse = false 
}) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
          <div className="w-full md:w-1/2">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
            <Link 
              to={link}
              className="inline-block bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition duration-300"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
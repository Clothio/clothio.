import React from 'react';
import { Link } from 'react-router-dom';
import { Wand2, Shirt, Scissors } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'AI Design Tool',
    description: 'Create your own custom dress designs with our AI-powered tool',
    icon: <Wand2 size={40} className="text-purple-600" />,
    link: '/ai-design',
    color: 'bg-purple-50',
  },
  {
    id: 2,
    title: 'Rental Service',
    description: 'Rent designer dresses for special occasions at affordable prices',
    icon: <Shirt size={40} className="text-blue-600" />,
    link: '/rental-service',
    color: 'bg-blue-50',
  },
  {
    id: 3,
    title: 'Laundry Service',
    description: 'Professional cleaning and care for your precious garments',
    icon: <Scissors size={40} className="text-green-600" />,
    link: '/laundry-service',
    color: 'bg-green-50',
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={service.link}
              className={`${service.color} rounded-xl p-8 transition-transform hover:scale-105 hover:shadow-lg`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
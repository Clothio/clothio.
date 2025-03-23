import React from 'react';
import Slideshow from '../components/Slideshow';
import CategorySection from '../components/CategorySection';
import ServiceSection from '../components/ServiceSection';
import PromotionBanner from '../components/PromotionBanner';

const HomePage: React.FC = () => {
  // Slideshow data
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Design Your Dream Dress with AI',
      description: 'Our innovative AI tool helps you create the perfect dress that matches your style and preferences.',
      buttonText: 'Try AI Designer',
      link: '/ai-design',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'New Summer Collection',
      description: 'Discover our latest summer dresses designed for comfort and style.',
      buttonText: 'Shop Now',
      link: '/category/western',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
      title: 'Rent Designer Dresses',
      description: 'Look stunning for your special occasion without breaking the bank.',
      buttonText: 'Explore Rentals',
      link: '/rental-service',
    },
  ];

  // Categories data
  const categories = [
    {
      id: 1,
      name: 'Ethnic',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      slug: 'ethnic',
    },
    {
      id: 2,
      name: 'Western',
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      slug: 'western',
    },
    {
      id: 3,
      name: 'Party Wear',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1008&q=80',
      slug: 'party-wear',
    },
    {
      id: 4,
      name: 'Coat Sets',
      image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      slug: 'coat-sets',
    },
    {
      id: 5,
      name: 'Semi-Party',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80',
      slug: 'semi-party',
    },
    {
      id: 6,
      name: 'Casual',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80',
      slug: 'casual',
    },
  ];

  return (
    <div>
      {/* Hero Slideshow */}
      <Slideshow slides={slides} />

      {/* Services Section */}
      <ServiceSection />

      {/* Categories Section */}
      <CategorySection categories={categories} />

      {/* Promotion Banners */}
      <PromotionBanner 
        title="Summer Sale Up To 50% Off"
        description="Limited time offer on our exclusive summer collection. Refresh your wardrobe with the season's hottest styles at unbeatable prices."
        buttonText="Shop the Sale"
        link="/category/western"
        image="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      <PromotionBanner 
        title="New Arrivals: Ethnic Collection"
        description="Discover our latest ethnic wear collection featuring traditional designs with a modern twist. Perfect for festivals and celebrations."
        buttonText="Explore Collection"
        link="/category/ethnic"
        image="https://images.unsplash.com/photo-1610030469668-8e4a7c2f1e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        reverse={true}
      />
    </div>
  );
};

export default HomePage;
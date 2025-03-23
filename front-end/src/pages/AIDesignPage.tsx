import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';

const AIDesignPage: React.FC = () => {
  const [designOptions, setDesignOptions] = useState({
    occasion: '',
    style: '',
    color: '',
    fabric: '',
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesign, setGeneratedDesign] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDesignOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedDesign('https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Dress Designer</h1>
          <p className="text-lg text-gray-600">Create your dream dress with our AI-powered design tool</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Wand2 className="mr-2 text-purple-600" />
              Design Your Dress
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-1">
                  Occasion
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  value={designOptions.occasion}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  required
                >
                  <option value="">Select an occasion</option>
                  <option value="wedding">Wedding</option>
                  <option value="party">Party</option>
                  <option value="casual">Casual</option>
                  <option value="formal">Formal</option>
                  <option value="beach">Beach</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-1">
                  Style
                </label>
                <select
                  id="style"
                  name="style"
                  value={designOptions.style}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  required
                >
                  <option value="">Select a style</option>
                  <option value="modern">Modern</option>
                  <option value="traditional">Traditional</option>
                  <option value="bohemian">Bohemian</option>
                  <option value="minimalist">Minimalist</option>
                  <option value="vintage">Vintage</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">
                  Color Preference
                </label>
                <select
                  id="color"
                  name="color"
                  value={designOptions.color}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  required
                >
                  <option value="">Select a color</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="pastel">Pastel</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="fabric" className="block text-sm font-medium text-gray-700 mb-1">
                  Fabric Type
                </label>
                <select
                  id="fabric"
                  name="fabric"
                  value={designOptions.fabric}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  required
                >
                  <option value="">Select a fabric</option>
                  <option value="cotton">Cotton</option>
                  <option value="silk">Silk</option>
                  <option value="linen">Linen</option>
                  <option value="chiffon">Chiffon</option>
                  <option value="satin">Satin</option>
                  <option value="velvet">Velvet</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                disabled={isGenerating}
              >
                {isGenerating ? 'Generating Design...' : 'Generate Design'}
              </button>
            </form>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Your Design</h2>
            
            {generatedDesign ? (
              <div className="space-y-6">
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img 
                    src={generatedDesign} 
                    alt="Generated dress design" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex space-x-4">
                  <button className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    Save Design
                  </button>
                  <button className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Order Custom
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 space-y-4">
                <Wand2 size={48} className="text-gray-300" />
                <p>Your AI-generated design will appear here</p>
                <p className="text-sm">Select your preferences and click "Generate Design"</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-16 bg-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">1</span>
              </div>
              <h3 className="font-medium mb-2">Select Your Preferences</h3>
              <p className="text-gray-600">Choose the occasion, style, color, and fabric for your dream dress</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <h3 className="font-medium mb-2">AI Creates Your Design</h3>
              <p className="text-gray-600">Our advanced AI generates a unique dress design based on your preferences</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-medium mb-2">Order Your Custom Dress</h3>
              <p className="text-gray-600">Save your design and order a custom-made dress that's uniquely yours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDesignPage;
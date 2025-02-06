import React from 'react';

const SpecialOffers = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black rounded-2xl overflow-hidden">
          <div className="relative aspect-[21/9] sm:aspect-[3/1]">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Special Offer"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                  50% OFF
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  Limited time offer on selected items
                </p>
                <div className="flex justify-center space-x-4 text-white mb-8">
                  {['23', '59', '59'].map((num, i) => (
                    <div key={i} className="text-center">
                      <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                        <span className="text-2xl font-bold">{num}</span>
                      </div>
                      <span className="text-sm mt-1 block">
                        {['Hours', 'Minutes', 'Seconds'][i]}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  Shop Sale
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
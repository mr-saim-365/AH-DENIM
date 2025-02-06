import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Welcome to AH Denim - Your Premium Denim Destination</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Since our establishment, AH Denim has been at the forefront of denim manufacturing, 
                crafting high-quality denim products that combine style, comfort, and durability. 
                Our state-of-the-art manufacturing facility employs cutting-edge technology and 
                sustainable practices to create premium denim wear for all ages.
              </p>
              
              <p>
                At AH Denim, we take pride in our expertise in denim craftsmanship, using only 
                the finest materials and innovative washing techniques to deliver products that 
                exceed customer expectations. Our commitment to quality control and attention to 
                detail ensures that every piece leaving our facility meets the highest standards 
                of excellence.
              </p>
              
              <p>
                We believe in sustainable fashion and implement eco-friendly practices throughout 
                our manufacturing process, from water conservation to using organic materials 
                whenever possible. Our dedicated team of designers and craftsmen work tirelessly 
                to bring you the latest trends while maintaining the timeless appeal of classic 
                denim wear.
              </p>
            </div>
            
            <p className="text-lg font-medium">
              Choose AH Denim for an unparalleled combination of style, quality, and conscious manufacturing.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Denim manufacturing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden mt-8">
              <img 
                src="https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Denim products"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
import React from "react";
import { Link } from "react-router-dom";

const categories = {
  men: {
    title: "Men",
    image:
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    items: ["Jeans", "Denim Jackets", "Denim Shirts", "Cargo Pants", "Shorts"],
  },
  women: {
    title: "Women",
    image:
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    items: ["Jeans", "Denim Dresses", "Skirts", "Jackets", "Jumpsuits"],
  },
  kids: {
    title: "Kids",
    image:
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    items: [
      "Boys Jeans",
      "Girls Jeans",
      "Denim Jackets",
      "Dungarees",
      "Shorts",
    ],
  },
};

const Categories = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.values(categories).map((category) => (
            <div key={category.title} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        <Link to="#" className="text-sm">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

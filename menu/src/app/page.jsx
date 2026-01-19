"use client";

import { useState } from "react";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-200">
      <Food />
    </div>
  );
}

const menu = [
  {
    id: 1,
    category: "Breakfast",
    image: "/item-1.jpeg",
    name: "Buttermilk Pancakes",
    price: "$15.99",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    category: "Dinner",
    image: "/item-2.jpeg",
    name: "Diner Double",
    price: "$13.99",
    desc: "Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 3,
    category: "Shakes",
    image: "/item-3.jpeg",
    name: "Godzilla Milkshake",
    price: "$6.99",
    desc: "Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral",
  },
  {
    id: 4,
    category: "Breakfast",
    image: "/item-4.jpeg",
    name: "Country Delight",
    price: "$20.99",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
  },
  {
    id: 5,
    category: "Dinner",
    image: "/item-5.jpeg",
    name: "Egg Attack",
    price: "$22.99",
    desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 6,
    category: "Shakes",
    image: "/item-6.jpeg",
    name: "Oreo Dream",
    price: "$18.99",
    desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
  },
  {
    id: 7,
    category: "Breakfast",
    image: "/item-7.jpeg",
    name: "Bacon Overflow",
    price: "$8.99",
    desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },
  {
    id: 8,
    category: "Dinner",
    image: "/item-8.jpeg",
    name: "American Classic",
    price: "$12.99",
    desc: "On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    id: 9,
    category: "Shakes",
    image: "/item-9.jpeg",
    name: "Quarantine Buddy",
    price: "$16.99",
    desc: "Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing",
  },
];

const categories = ["All", "Breakfast", "Dinner", "Shakes"];

const Food = () => {
  const [food, setFood] = useState(menu);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const selectedFood = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setFood(menu);
    } else {
      const filteredCategory = menu.filter(
        (item) => item.category === category
      );
      setFood(filteredCategory);
    }
  };

  return (
    <div>
      <div className="mt-20 flex flex-col items-center gap-4">
        <h2 className="text-center text-5xl">Our Menu</h2>
        <p className="w-30 border-3 border-teal-500 rounded-md"></p>
      </div>

      <div className="flex gap-4 justify-center mt-8 mb-16">
        {categories.map((cat) => (
          <button
            className={`px-3 py-1.5 rounded-md text-white hover:bg-teal-500 ${
              selectedCategory === cat ? "bg-teal-500" : "bg-sky-900"
            }
             `}
            onClick={() => selectedFood(cat)}
            key={cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8">
        {food.map(({ image, name, price, desc, id, category }) => (
          <FoodItem
            key={id}
            image={image}
            name={name}
            price={price}
            desc={desc}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

const FoodItem = ({ image, name, price, desc }) => {
  return (
    <div className="w-92 flex flex-col gap-4 bg-white rounded-t-md">
      <img
        src={image}
        alt={name}
        className="w-92 h-60 object-cover rounded-t-md"
      />

      <div className="flex flex-col gap-5 p-6">
        <div className="flex justify-between items-center">
          <h5 className="text-xl font-bold">{name}</h5>
          <p className="bg-sky-900 text-white rounded-md px-3">{price}</p>
        </div>

        <p>{desc}</p>
      </div>
    </div>
  );
};

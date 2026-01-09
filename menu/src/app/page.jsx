"use client";

import { useState } from "react";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Food />
    </div>
  );
}

const menu = [
  {
    id: 1,
    image: "/item-1.jpeg",
    name: "Buttermilk Pancakes",
    price: "$15.99",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    image: "/item-2.jpeg",
    name: "Diner Double",
    price: "$13.99",
    desc: "Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 3,
    image: "/item-3.jpeg",
    name: "Godzilla Milkshake",
    price: "$6.99",
    desc: "Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral",
  },
  {
    id: 4,
    image: "/item-4.jpeg",
    name: "Country Delight",
    price: "$20.99",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
  },
  {
    id: 5,
    image: "/item-5.jpeg",
    name: "Egg Attack",
    price: "$22.99",
    desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 6,
    image: "/item-6.jpeg",
    name: "Oreo Dream",
    price: "$18.99",
    desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
  },
  {
    id: 7,
    image: "/item-7.jpeg",
    name: "Bacon Overflow",
    price: "$8.99",
    desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },
  {
    id: 8,
    image: "/item-8.jpeg",
    name: "American Classic",
    price: "$12.99",
    desc: "On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    id: 9,
    image: "/item-9.jpeg",
    name: "Quarantine Buddy",
    price: "$16.99",
    desc: "Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing",
  },
];

const Food = () => {
  const [food, setFood] = useState(menu);

  const allFood = () => {
    setFood(food);
    console.log(food);
  };

  return (
    <div>
      <h2 className="text-center ">Our Menu</h2>

      <div className="flex gap-4 justify-center mt-8 mb-16">
        <button
          className="py-1.5 px-3 bg-orange-400 rounded-md text-white hover:bg-amber-300"
          onClick={allFood}
        >
          All
        </button>
        <button className="py-1.5 px-3 bg-orange-400 rounded-md text-white hover:bg-amber-300">
          Breakfast
        </button>
        <button className="py-1.5 px-3 bg-orange-400 rounded-md text-white hover:bg-amber-300">
          Lunch
        </button>
        <button className="py-1.5 px-3 bg-orange-400 rounded-md text-white hover:bg-amber-300">
          Shakes
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {food.map(({ image, name, price, desc, id }) => (
          <FoodItem
            key={id}
            image={image}
            name={name}
            price={price}
            desc={desc}
          />
        ))}
      </div>
    </div>
  );
};

const FoodItem = ({ image, name, price, desc }) => {
  return (
    <div className="w-92 flex flex-col gap-4">
      <img
        src={image}
        alt={name}
        className="w-92 h-60 object-cover rounded-t-md"
      />

      <div className="flex flex-col gap-5 p-6">
        <div className="flex justify-between">
          <h5>{name}</h5>
          <p>{price}</p>
        </div>

        <p>{desc}</p>
      </div>
    </div>
  );
};

"use client";

import { useState } from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <CountryTours />
    </div>
  );
}

const places = [
  {
    id: 1,
    image: "/tour-1.jpeg",
    number: "$1,995",
    header: "Best of Paris in 7 Days Tour",
    desc: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 2,
    image: "/tour-2.jpeg",
    number: "$3,895",
    header: "Best of Ireland in 14 Days Tour",
    desc: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
  },
  {
    id: 3,
    image: "/tour-3.jpeg",
    number: "$2,695",
    header: "Best of Salzburg & Vienna in 8 Days Tour",
    desc: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
  },
  {
    id: 4,
    image: "/tour-4.jpeg",
    number: "$2,095",
    header: "Best of Rome in 7 Days Tour",
    desc: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
  },
  {
    id: 5,
    image: "/tour-5.jpeg",
    number: "$2,595",
    header: "Best of Poland in 10 Days Tour",
    desc: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
  },
];

const CountryTours = () => {
  const [place, setPlace] = useState(places);

  const notInterested = (id) => {
    const updatePlace = place.filter((data) => data.id !== id);
    setPlace(updatePlace);
  };

  return (
    <div className="mt-30">
      <h1 className="mb-10 font-bold text-4xl text-center">Our Tours</h1>
      <div className="grid grid-cols-3 gap-5">
        {place.map(({ id, image, number, header, desc }) => (
          <OneCountryTour
            key={id}
            id={id}
            image={image}
            number={number}
            header={header}
            desc={desc}
            onClick={notInterested}
          />
        ))}
      </div>
    </div>
  );
};

const OneCountryTour = ({ image, number, header, desc, onClick, id }) => {
  return (
    <div className="rounded-3xl border">
      <div>
        <img
          className="h-58.5 w-88 rounded-t-3xl relative"
          src={image}
          alt="Place Image"
        />
        <p className="absolute right=0 top=0 bg-green-500 text-white">
          {number}
        </p>
      </div>
      <div className="flex flex-col w-88 p-5 gap-5">
        <h2 className="text-center font-bold">{header}</h2>
        <p>{desc}</p>
        <button
          className="border border-green-400 w-77 rounded-lg text-green-400 text-center"
          onClick={() => onClick(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

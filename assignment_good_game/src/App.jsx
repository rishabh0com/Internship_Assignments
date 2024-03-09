import axios from "axios";
import React, { useEffect, useState } from "react";
import BeerCard from "./components/BeerCard.jsx";

const beersData = [
  /* array of beer data objects */
]; // Fill this array with beer data objects

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [beers, setBeers] = useState([]);
  const getdata = async () => {
    const response = await axios.get("https://api.punkapi.com/v2/beers ");
    const data = await response.data;
    console.log(data);
    setBeers(data);
  };
  useEffect(() => {
    getdata();
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="py-5  bg-gray-500">
      <div className="container mx-auto px-4 text-center  ">
        <input
          type="text"
          placeholder="Search Beers..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full max-w-md h-10 px-3 mb-8 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {filteredBeers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

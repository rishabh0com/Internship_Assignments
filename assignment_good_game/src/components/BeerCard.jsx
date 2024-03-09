// import React from "react";

// const BeerCard = ({ beer }) => {
//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//       <img
//         className="w-full h-64 object-cover object-center"
//         src={beer.image_url}
//         alt={beer.name}
//       />
//       <div className="px-6 py-4">
//         <h4 className="text-xl font-bold text-gray-800 mb-2">{beer.name}</h4>
//         <p className="text-sm text-gray-600 mb-2">{beer.tagline}</p>
//         <p className="text-gray-700 text-sm">{beer.description}</p>
//       </div>
//       <div className="px-6 pt-4 pb-2">
//         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
//           {beer.abv}% ABV
//         </span>
//         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
//           {beer.ibu} IBU
//         </span>
//       </div>
//       <div className="px-6 py-3">
//         <h5 className="font-bold text-gray-800 text-sm mb-2">Food Pairing:</h5>
//         <ul>
//           {beer.food_pairing.map((pairing, index) => (
//             <li key={index} className="text-gray-700 text-sm">
//               {pairing}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="px-6 py-2">
//         <p className="text-xs text-gray-600">{`Brewer's Tips: ${beer.brewers_tips}`}</p>
//       </div>
//     </div>
//   );
// };

// export default BeerCard;

import React from "react";

const BeerCard = ({ beer }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-left">
      <img
        className="w-full h-64 object-cover object-center"
        src={beer.image_url}
        alt={beer.name}
      />
      <div className="px-6 py-4">
        <h4 className="text-xl font-bold text-black-800 mb-2">{beer.name}</h4>
        <p className="text-sm text-black-600 mb-2">{beer.description}</p>

        <hr className="my-4" />

        <div className="text-gray-700">
          <p>
            <span className="font-bold">ABV:</span> {beer.abv}%
          </p>
          <p>
            <span className="font-bold">pH:</span> {beer.ph}
          </p>
        </div>

        <hr className="my-4" />

        <h5 className="font-bold text-black-800 mb-2">Ingredients:</h5>
        <ul>
          {beer.ingredients.malt.map((malt, index) => (
            <li key={index}>
              {malt.name} - {malt.amount.value} {malt.amount.unit}
            </li>
          ))}
          {beer.ingredients.hops.map((hop, index) => (
            <li key={index}>
              {hop.name} - {hop.amount.value} {hop.amount.unit}, {hop.add},{" "}
              {hop.attribute}
            </li>
          ))}
          <li>Yeast: {beer.ingredients.yeast}</li>
        </ul>

        <hr className="my-4" />

        <h5 className="font-bold text-black-800 mb-2">Method:</h5>
        <p>
          Mash Temp: {beer.method.mash_temp[0].temp.value}{" "}
          {beer.method.mash_temp[0].temp.unit} -{" "}
          {beer.method.mash_temp[0].duration} mins
        </p>
        <p>
          Fermentation Temp: {beer.method.fermentation.temp.value}{" "}
          {beer.method.fermentation.temp.unit}
        </p>

        <hr className="my-4" />

        <h5 className="font-bold text-black-800 mb-2">Food Pairing:</h5>
        <ul>
          {beer.food_pairing.map((pairing, index) => (
            <li key={index}>{pairing}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BeerCard;

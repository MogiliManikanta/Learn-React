import ItemList from "./ItemList";
import React, { useState } from "react";
// import RestaurantMenu from "./RestaurantMenu";

let RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // Rename local state
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/** Header */}
      <div className="w-8/12 mx-auto my-6 bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold text-xl text-gray-800">
            {data.title}{" "}
            <span className="text-sm text-gray-500">
              ({data.itemCards.length})
            </span>
          </span>
          <span className="text-gray-600 text-lg transform transition-transform duration-300">
            {"⬇️"}
          </span>
        </div>
        {/** Accordian Body */}
        <div className="mt-4 border-t border-gray-200 pt-4">
          {showItems && <ItemList items={data.itemCards} />}{" "}
          {/* Use local state */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;

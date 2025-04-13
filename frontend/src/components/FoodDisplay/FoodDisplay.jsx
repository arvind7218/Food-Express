import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import { FoodItem } from "../FoodItem/FoodItem";

export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes</h2>
      <div className="food-display-list">
        {food_list
          .filter(item =>
            category === "All" ||
            category.toLowerCase() === item.category?.toLowerCase()
          )
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
};

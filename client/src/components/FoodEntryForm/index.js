import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import "./FoodEntryForm.css";
import { ADD_FOOD_ENTRY } from "../../utils/mutations";

import Auth from "../../utils/auth";

const FoodEntryForm = ({ profileId }) => {
  console.log(1)
  const [foodType, setFoodType] = useState("");
  const [addFoodEntry, { error }] = useMutation(ADD_FOOD_ENTRY);

  const [foodEntry, setFoodEntry] = useState({
    foodType: "",
    calories: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addFoodEntry({
        variables: { foodEntry },
      });

      setFoodEntry("");
      //setFoodType('');
      //setFoodCalories;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="food-entry-container">
      

      {Auth.loggedIn() ? (
        // <div className="food-entry-container">
        <form
          className="flex-row justify-center justify-space-between-md align-center food-entry-form"
          onSubmit={handleFormSubmit}
        >
          
          <div className="food-entry-title">Food Entry</div>
          <div className="food-type">Food Type
            <input
              type="text"
              placeholder="Enter food item"
              value={foodEntry.foodType}
              className="food-type-intake"
              onChange={(event) =>
                setFoodEntry({ ...foodEntry, foodType: event.target.value })
              }
            />
          </div>
          <div className="calorie-count">Calories 
            <input
              type="text"
              placeholder="Enter calorie count"
              value={foodEntry.calories}
              className="calorie-count-intake"
              onChange={(event) =>
                setFoodEntry({ ...foodEntry, calories: parseInt(event.target.value) })
              }
              // onClick={() => setFoodCalories()}
            />
          </div>

          <div className="submit-food-intake">
            <button className="btn-submit-food-intake" type="submit">
              Submit
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
        
      ) : (
        <p>
          You need to be logged in to enter your food intake. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default FoodEntryForm;

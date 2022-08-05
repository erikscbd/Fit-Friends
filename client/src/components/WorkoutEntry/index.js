import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import "./WorkoutEntry.css";
import { ADD_WORKOUT } from "../../utils/mutations";

import Auth from "../../utils/auth";

const WorkoutEntryForm = ({ profileId }) => {
  console.log(1)
//   const [foodType, setFoodType] = useState("");
  const [addWorkout, { error }] = useMutation(ADD_WORKOUT);

  const [workout, setWorkout] = useState({
    workoutText: "",
    workoutTime: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addWorkout({
        variables: { workout },
      });

      setWorkout("");
      //setFoodType('');
      //setFoodCalories;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="food-entry-container">
      <h4>Keep track of your workouts by entering them below</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center food-entry-form"
          onSubmit={handleFormSubmit}
        >
          <div className="food-entry-title">Workout Entry</div>
          <div className="food-type">
            <input
              type="text"
              placeholder="Enter workout type"
              value={workout.workoutText}
              className="food-type-intake"
              onChange={(event) =>
                setWorkout({ ...workout, workoutText: event.target.value })
              }
            />
          </div>
          <div className="calorie-count">
            <input
              type="text"
              placeholder="Enter workout time"
              value={workout.workoutTime}
              className="calorie-count-intake"
              onChange={(event) =>
                setWorkout({ ...workout, workoutTime: parseInt(event.target.value) })
              }
              // onClick={() => setFoodCalories()}
            />
          </div>

          <div className="submit-food-intake">
            <button className="btn submit-food-intake" type="submit">
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

export default WorkoutEntryForm;

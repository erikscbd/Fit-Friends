import React from "react";
import { useMutation } from "@apollo/client";

import { REMOVE_FOOD_ENTRY } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";


const FoodEntryList = ({ foodEntries, isLoggedInUser }) => {
  const [removeFoodEntry, { error }] = useMutation(REMOVE_FOOD_ENTRY, {
    update(cache, { data: { removeFoodEntry } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeFoodEntry },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveFoodEntry = async (foodEntry) => {
    try {
      const { data } = await removeFoodEntry({
        variables: { foodEntry },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!foodEntries.length) {
    return <h3>No Food Entries Yet</h3>;
  }

  return (
    <div>
      <div className="food-entries-container">
        <div className="food-entry-info">
          <div className="food-type">List of foods consumed for the day</div>
          <div className="food-calories">
            List of corresponding calories consumed for the day
          </div>
          <div className="total-calories">
            Total amount of calories consumed so far for the day
          </div>
        </div>

        {foodEntries &&
          foodEntries.map((foodEntry) => (
            <div key={foodEntry} className="col-12 col-xl-6">
              <div className="food-entry">
                <h4 className="food-entry-items">
                  <span>{foodEntry}</span>
                  {isLoggedInUser && (
                        <button
                        className="btn remove-food-entry"
                        onClick={() => handleRemoveFoodEntry(foodEntry)}>
                                            X
                                        </button>
                                    )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {/* {error && (
                <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
            )} */}
    </div>
  );
};

// const CaloriesList = ({ calories, isLoggedInUser = false }) => {
//     const [removeCalories, { error }] = useMutation(REMOVE_CALORIES, {
//         update(cache, { data: { removeCalories } }) {
//             try {
//                 cache.writeQuery({
//                     query: QUERY_ME,
//                     data: { me: removeCalories },
//                 });
//             } catch (e) {
//                 console.error(e);

//             }
//         },
//     });

//     

export default FoodEntryList;

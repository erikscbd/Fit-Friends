import React from "react";
import { Link } from "react-router-dom";
import "./ProfileList.css";

const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>No Fit Friends Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {profiles &&
          profiles.map((profile) => (
            <div key={profile._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {profile.username} <br />
                  <div className="workouts">
                    <h2>Workouts</h2>
                      {profile.workouts.map((workout) => (
                        <div>
                          <div>{workout.workoutText}</div>
                          <div>{workout.workoutTime}</div>
                        </div>
                      ))}
                  </div>
                    <div className="food-entries">
                      <h2>Food Entries</h2>
                      {profile.foodEntries.map((foodEntry) => (
                        <div>
                          <div>{foodEntry.foodType}</div>
                          <div>{foodEntry.calories}</div>
                        </div>
                      ))}
                    </div>
     
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/profiles/${profile._id}`}
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;

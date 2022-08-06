import React from "react";
import { Link } from "react-router-dom";
import "./ProfileList.css";
import avatar from "../../img/avatar.png";
import calories from "../../img/calories.jpg";
import workoutIcon from "../../img/workout-logo.png";

const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <p>No Fit Friends Yet</p>;
  }

  return (
    <div className="profile-feed-homepage-container">
      <p className="text-primary">{title}</p>
      <div className="profile-feed-container">
        {profiles &&
          profiles.map((profile) => (
            <div key={profile._id} className="col-12-col-xl-6">
              <div className="profile-card">
                <h2 className="card-header">
                  {profile.username} </h2><br />
                  <div className="card-info-wrapper">
                  <div className="workouts">
                    <h4>Workouts</h4>
                      {profile.workouts.map((workout) => (
                        <div className='workout-format'>
                          <div>{workout.workoutText}</div>
                          <div>{workout.workoutTime}</div>
                        </div>
                      ))}
                  </div>
                    <div className="food-entries">
                      <h4>Food Entries</h4>
                      {profile.foodEntries.map((foodEntry) => (
                        <div>
                          <div>{foodEntry.foodType}</div>
                          <div>{foodEntry.calories}</div>
                        </div>
                      ))}
                    </div>
                    </div>
     
    

                
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;

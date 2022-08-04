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
                    <span className="text-white" style={{ fontSize: "1rem" }}>
                      currently has {profile.workouts ? profile.workouts.length : 0}{" "}
                      endorsed skill
                      {profile.workouts && profile.workouts.length === 1 ? "" : "s"}
                    </span>
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

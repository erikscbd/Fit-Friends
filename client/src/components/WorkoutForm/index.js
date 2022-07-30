import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { ADD_WORKOUT } from '../../utils/mutations'

import Auth from '../../utils/Auth'

const WorkoutForm = ({ profileId }) => {
    const [workout, setWorkout] = useState('');

    const [addWorkout, { error }] = useMutation(ADD_WORKOUT);
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await addWorkout({
                variable: { profileId, workout },

            });
            setWorkout('');
        } catch (err) {
            console.error(err);
        }
    };
    
    return (

        <div>
        <h4>Add your workouts.</h4>
  
        {Auth.loggedIn() ? (
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <input
                placeholder="Add workouts..."
                value={workout}
                className="form-input w-100"
                onChange={(event) => setWorkout(event.target.value)}
              />
            </div>
  
            <div className="col-12 col-lg-3">
              <button className="btn btn-info btn-block py-3" type="submit">
                Add Workout
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
            You need to be logged in to add a workout. Please{' '}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
      </div>
    );
};

export default WorkoutForm;
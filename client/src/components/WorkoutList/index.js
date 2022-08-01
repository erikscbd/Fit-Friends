import React from 'react';
import { useMutation } from '@apollo/client';

import { REMOVE_WORKOUT } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const WorkoutList = ({ workouts, isLoggedInUser  }) => {
    const [removeWorkout, { error }] = useMutation(REMOVE_WORKOUT, {
        update(cache, { data: {removeWorkout } }) {
          try {
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: removeWorkout },
            });
          }  catch (e) {
            console.error(e);
          }
        },
    });

    const handleRemoveWorkout = async (workout) => {
        try {
            const { data } = await removeWorkout({
                variables: { workout },
            });
         } catch (err) {
            console.error(err);
         }
    };

    if (!workout.length) {
        return <h3>No Workouts Created Yet</h3>
    }

    return (
        <div>
        <div className="flex-row justify-space-between my-4">
          {skills &&
            skills.map((workout) => (
              <div key={workout} className="col-12 col-xl-6">
                <div className="card mb-3">
                  <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                    <span>{workout}</span>
                    {isLoggedInUser && (
                      <button
                        className="btn btn-sm btn-danger ml-auto"
                        onClick={() => handleRemoveWorkout(workout)}
                      >
                        X
                      </button>
                    )}
                  </h4>
                </div>
              </div>
            ))}
        </div>
        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    );
};

export default WorkoutList;
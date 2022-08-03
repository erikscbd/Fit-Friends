import React from 'react';
import logo from "../../img/fitfriends logo.png";
import logo2 from "../../img/logo2.png";
import avatar from "../../img/avatar.png";
import calories from "../../img/calories.jpg";
import workoutIcon from "../../img/workout-logo.png";
import "./Profile.css";
import { QUERY_SINGLE_PROFILE, QUERY_ME, } from '../../utils/queries'

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import FoodEntryList from '../../components/FoodEntryList';
import FoodEntryForm from '../../components/FoodEntryForm';
import WorkoutList from '../../components/WorkoutList';
// import WorkoutForm from '../components/WorkoutsForm';
// import WorkoutSchedule from '../components/WorkoutSchedule';
// import WorkoutScheduleForm from '../components/WorkoutScheduleForm';

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const Profile = () => {
    const { profileId } = useParams();

    // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
    const { loading, data } = useQuery(
        profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
        {
            variables: { profileId: profileId },
        }
    );

    // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
    const profile = data?.me || data?.profile || {};

    // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
        return <Navigate to="/me" />;
    }

    if (loading) {
        return <div>Loading Your Profile...</div>;
    }

    if (!profile?.name) {
        return <Navigate to="/signIn" />;

        // (
        //     <h4>
        //         You need to be logged in to see your profile page. Use the navigation
        //         links above to sign up or log in!
        //     </h4>
        // )

    }

    return (
        <div>
            <div className='logo-top-container'>
                <div className='logo-image'>
                    <img src={logo} alt="fit friends logo" className='ff-logo' />
                </div>
            </div>
            <div className='selection-container'>
                <div className='selection-buttons'>
                    <button className='home-buttons'>
                        Update Status
                    </button>
                    <button className='home-buttons'>
                        Schedule Workout
                    </button>

                    <button className="home-buttons">
                        Find Friends
                    </button>
                    <button className="home-buttons">
                        Edit Profile
                    </button>
                    <button className="home-buttons">
                        Home
                    </button>
                    <button className="home-buttons">
                        Logout
                    </button>
                </div>
            </div>


            <div className='profile-container'>
                <div className='profile-left'>
                    <div className='profile-main'>
                        <div className='profile-main-wrapper'>

                            <div className='profile-title-background'>


                                <h2 className="username"> ashbash777's
                                    {profileId ? `${profile.name}'s` : 'Your'}
                                </h2>


                                <h3>Fitness Tracker Status</h3>
                            </div>

                            <img src={avatar} alt="avatar" className="avatar" />
                        </div>
                    </div>
                </div>




                <div className='profile-right'>
                    <div className='profile-details'>
                        <div className='profile-details-wrapper'>

                            <div className='calories-container'>
                                <div className='calories-container-contents'>
                                    <div className='calories-title'>
                                        Calories Consumed
                                    </div>
                                    <img src={calories} alt="calories-icon" className="calories" />

                                    <div className='calories-amount'> `${profile.caloriesTotal}`
                                        {/* {profile.calories?.length > 0 && (
                                            <CaloriesList
                                                calories={profile.calories}
                                                isLoggedInUser={!profileId && true}
                                            />
                                        )}
                                        <CaloriesForm profileId={profile._id} /> */}
                                    </div>
                                </div>
                                <div className="calories-form" >
                                    // Calories Form
                                </div>

                            </div>



                            <div className='workouts-container'>
                                <div className='workout-container-contents'>
                                    <div className='workouts-title'>
                                        Workouts Completed
                                    </div>
                                    <img src={workoutIcon} alt="workout-icon" className="workout" />
                                    <div className='workout-description-list'>
                                        <div class='workout-list-items'> `${}`
                                            {/* {profile.workouts?.length > 0 && (
                                                <WorkoutsList
                                                    workouts={profile.workouts}
                                                    isLoggedInUser={!profileId && true}
                                                />
                                            )}
                                            <WorkoutsForm profileId={profile._id} /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='workouts-form'>
                                    WorkoutsForm
                                </div>
                            </div>



                            <div className='workout-schedule-container'>
                                <div className='workout-schedule-title'>
                                    Workout Schedule:
                                </div>
                                <div className='workout-schedule-details'>
                                    <div className='schedule-view-options'>
                                        view by: day, week, month

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
            <footer>
                <div className='logo-image'>
                    <img src={logo2} alt="fit friends logo" className='footer-logo' />
                </div>
            </footer>
        </div>
    );
};

export default Profile;
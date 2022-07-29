import React from 'react';
import logo from "../../img/fitfriends logo.png";
import logo2 from "../../img/logo2.png";
import avatar from "../../img/avatar.png";
import calories from "../../img/calories.jpg";
import workoutIcon from "../../img/workout-logo.png";
import "./Profile.css";

// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import CalorieList from '../components/CalorieList';
// import CalorieForm from '../components/CalorieForm';
// import WorkoutList from '../components/WorkoutList';
// import WorkoutForm from '../components/WorkoutForm';
// import WorkoutSchedule from '../components/WorkoutSchedule';
// import WorkoutScheduleForm from '../components/WorkoutScheduleForm';

// import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

// import Auth from '../utils/auth';

const Profile = () => {
    // const { profileId } = useParams();

    // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
    // const { loading, data } = useQuery(
    //     profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    //     {
    //         variables: { profileId: profileId },
    //     }
    // );

    // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
    // const profile = data?.me || data?.profile || {};

    // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
    // if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    //     return <Navigate to="/me" />;
    // }

    // if (loading) {
    //     return <div>Loading Profile...</div>;
    // }

    // if (!profile?.name) {
    //     return (
    //         <h4>
    //             You need to be logged in to see your profile page. Use the navigation
    //             links above to sign up or log in!
    //         </h4>
    //     );
    // }

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


                                <h2 className="username"> ashbash777's </h2>


                                <h3>Fitness Tracker Status</h3>
                            </div>
                            {/* {profileId ? `${profile.name}'s` : 'Your'} fitness tracker status... */}
                            <img src={avatar} alt="avatar" className="avatar" />
                        </div>
                    </div>
                </div>




                {/* {profile.calories?.length > 0 && (
                    <CalorieList
                        calories={profile.calories}
                        isLoggedInUser={!profileId && true}
                    />
                )} */}

                <div className='profile-right'>
                    <div className='profile-details'>
                        <div className='profile-details-wrapper'>

                            <div className='calories-container'>
                                <div className='calories-container-contents'>
                                    <div className='calories-title'>
                                        Calories Consumed
                                    </div>
                                    <img src={calories} alt="calories-icon" className="calories" />

                                    <div className='calories-amount'>
                                        1200
                                    </div>
                                </div>

                            </div>

                            {/* {profile.workouts?.length > 0 && (
                    <WorkoutList
                        workouts={profile.workouts}
                        isLoggedInUser={!profileId && true}
                    />
                )} */}

                            <div className='workouts-container'>
                                <div className='workout-container-contents'>
                                    <div className='workouts-title'>
                                        Workouts Completed
                                    </div>
                                    <img src={workoutIcon} alt="workout-icon" className="workout" />
                                    <div className='workout-description-list'>
                                        <div class='workout-list-items'>
                                            <ul>
                                                <li>Walked 4 miles</li>
                                                <li>Yoga for 1 hour</li>
                                                <li>20 minutes of legs</li>
                                                <li>10 minutes of arms</li>
                                                <li>strength and conditioning</li>

                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* {profile.workoutSchedule?.length > 0 && (
                    <WorkoutSchedule
                        workoutSchedule={profile.workoutSchedule}
                        isLoggedInUser={!profileId && true}
                    />
                )} */}

                            <div className='workout-schedule-container'>
                                <div className='workout-schedule-title'>
                                    Workout Schedule:
                                </div>
                                <div className='workout-schedule-details'>
                                    <div className='day-of-week-container'>
                                        <div className='monday'>Monday: cardio
                                        </div>
                                        <div className='tuesday'>Tuesday: strength training
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
                    <SkillForm profileId={profile._id} />
                </div> */}

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
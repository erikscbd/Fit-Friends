import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../img/fitfriends logo.png";
import Auth from '../../utils/auth';
import './Header.css';
import Home from '../../pages/home/Home'
import Profile from '../../pages/profile/Profile'
import WorkoutEntryForm from '../WorkoutEntry';
import FoodEntryForm from '../FoodEntryForm';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
        window.location.href = '/'
    };
    return (
        <header>
            <div className="header-container">
                <div className='logo-top-container'>
                    <div className='logo-image'>
                        <img src={logo} alt="fit friends logo" className='ff-logo' />
                    </div>
                </div>
                <div className='selection-container'>
                    {Auth.loggedIn() ? (
                        <>
                            <div className='selection-buttons'>
                                <Link to='/food-entry-form'><button className='enter-food-button' onClick={FoodEntryForm}>
                                    Enter Food Intake
                                </button>
                                </Link>

                                <Link to='/workout-entry-form'><button className='enter-workout-button' onClick={WorkoutEntryForm}>
                                    Enter Workout
                                </button>
                                </Link>

                                <Link to="/me"><button className="view-profile-button" onClick={Profile}>
                                    View My Profile
                                </button>
                                </Link>

                                <Link to="/homepage"><button className="view-profile-button" onClick={Home}>
                                    Home
                                </button>
                                </Link>

                                <button className="logout-button" onClick={logout}>
                                    Logout
                                </button>
                            </div>

                        </>
                    ) : (
                        <>
                            <div className='welcome-page-buttons'>
                                <Link to="/login"><button className="login-button">
                                    Login
                                </button>
                                </Link>
                                <Link to="/signup"><button className="signup-button">
                                    Sign Up
                                </button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div >
        </header >
    );
};

export default Header;
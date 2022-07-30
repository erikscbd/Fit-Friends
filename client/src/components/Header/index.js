import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../img/fitfriends logo.png";
import Auth from '../../utils/auth';
import './Header.css';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
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
                                <button className='update-status-button'>
                                    Update Status
                                </button>
                                <button className='scheule-workout-button'>
                                    Schedule Workout
                                </button>

                                <button className="find-friends-button">
                                    Find Friends
                                </button>

                                <Link to="/me"><button className="view-profile-button">
                                    View My Profile
                                </button>
                                </Link>

                                <button className="edit-profile-button">
                                    Edit Profile
                                </button>

                                <button className="logout-button" onClick={logout}>
                                    Logout
                                </button>
                            </div>

                        </>
                    ) : (
                        <>
                            <Link to="/login"><button className="login-button">
                                Login
                            </button>
                            </Link>
                            <Link to="/signup"><button className="signup-button">
                                Sign Up
                            </button>
                            </Link>
                        </>
                    )}
                </div>
            </div >
        </header >
    );
};

export default Header;
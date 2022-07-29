import React, { useState } from 'react';
import logo from "../../img/fitfriends logo.png";
import logo2 from "../../img/logo2.png";
import "./SignUp.css";
// import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { ADD_PROFILE } from '../utils/mutations';

// import Auth from '../utils/auth';

const Signup = () => {
    // const [formState, setFormState] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    // });
    // const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

    // // update state based on form input changes
    // const handleChange = (event) => {
    //     const { name, value } = event.target;

    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    // // submit form
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(formState);

    //     try {
    //         const { data } = await addProfile({
    //             variables: { ...formState },
    //         });

    //         Auth.login(data.addProfile.token);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };

    return (

        <main>
            <div className='logo-top-container'>
                <div className='logo-image'>
                    <img src={logo} alt="fit friends logo" className='ff-logo' />
                </div>
            </div>

            <div className='sign-up-container'>

                <form className='sign-up-form'>

                    <div className='sign-up-title'>Sign Up!
                    </div>


                    <div className='sign-up-form-content'>

                        <div className='enter-info'>Username
                            <input
                                className="form-input"
                                placeholder="username"
                                name="username"
                                type="username"
                            // value={formState.username}
                            // onChange={handleChange}
                            />
                        </div>
                        <div className='enter-info'>Email
                            <input
                                className="form-input"
                                placeholder="Your email"
                                name="email"
                                type="email"
                            // value={formState.email}
                            // onChange={handleChange}
                            />
                        </div>
                        <div className='enter-info'>Password
                            <input
                                className="form-input"
                                placeholder="******"
                                name="password"
                                type="password"
                            // value={formState.password}
                            // onChange={handleChange}
                            />
                        </div>
                        <button
                            className="sign-up-btn"
                            // style={{ cursor: 'pointer' }}
                            type="submit"
                        >
                            Create Account
                        </button>
                        <div className='tagline'>
                            <p>
                                It's more fun getting fit <span>with friends!</span>
                            </p>
                        </div>

                    </div>
                </form>

            </div>
            <footer>
                <div className='logo-image'>
                    <img src={logo2} alt="fit friends logo" className='footer-logo' />
                </div>
            </footer>



        </main >
        // <main className="flex-row justify-center mb-4">
        //     <div className="col-12 col-lg-10">
        //         <div className="card">
        //             <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
        //             <div className="card-body">
        //                 {data ? (
        //                     <p>
        //                         Success! You may now head{' '}
        //                         <Link to="/">back to the homepage.</Link>
        //                     </p>
        //                 ) : (
        //                     <form onSubmit={handleFormSubmit}>
        //                         <input
        //                             className="form-input"
        //                             placeholder="Your username"
        //                             name="name"
        //                             type="text"
        //                             value={formState.name}
        //                             onChange={handleChange}
        //                         />
        //                         <input
        //                             className="form-input"
        //                             placeholder="Your email"
        //                             name="email"
        //                             type="email"
        //                             value={formState.email}
        //                             onChange={handleChange}
        //                         />
        //                         <input
        //                             className="form-input"
        //                             placeholder="******"
        //                             name="password"
        //                             type="password"
        //                             value={formState.password}
        //                             onChange={handleChange}
        //                         />
        //                         <button
        //                             className="btn btn-block btn-info"
        //                             style={{ cursor: 'pointer' }}
        //                             type="submit"
        //                         >
        //                             Submit
        //                         </button>
        //                     </form>
        //                 )}

        //                 {error && (
        //                     <div className="my-3 p-3 bg-danger text-white">
        //                         {error.message}
        //                     </div>
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        // </main>
    );
};

export default Signup;
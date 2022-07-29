import React, { useState } from 'react';
import logo from "../../img/fitfriends logo.png";
import logo2 from "../../img/logo2.png";
import "./Login.css";
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

// const Login = (props) => {

const Login = () => {
    // const [formState, setFormState] = useState({ username: '', password: '' });
    // const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    // const handleChange = (event) => {
    //     const { name, value } = event.target;

    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    // submit form
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(formState);
    //     try {
    //         const { data } = await login({
    //             variables: { ...formState },
    //         });

    //         Auth.login(data.login.token);
    //     } catch (e) {
    //         console.error(e);
    //     }

    //     // clear form values
    //     setFormState({
    //         email: '',
    //         password: '',
    //     });
    // };

    return (

        <main>
            <div className='logo-top-container'>
                <div className='logo-image'>
                    <img src={logo} alt="fit friends logo" className='ff-logo' />
                </div>
            </div>

            <div className='login-container'>

                <form className='login-form'>

                    <div className='sign-in-title'>Sign In
                    </div>


                    <div className='login-form-content'>

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
                            className="login-btn"
                            // style={{ cursor: 'pointer' }}
                            type="submit"
                        >
                            Login
                        </button>
                        <div className='sign-up-prompt'>
                            Not a member?&nbsp;&nbsp; <span>Sign Up!</span>
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
        // <main className="login-page-container">
        //     <div className="col-12 col-lg-10">
        //         <div className="card">
        //             <h4 className="card-header bg-dark text-light p-2">Login</h4>
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

export default Login;
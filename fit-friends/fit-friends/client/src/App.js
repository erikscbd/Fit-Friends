// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/SignUp';
import Profile from './pages/profile/Profile';



function App() {
  return (
    <div>
      <div className='homepage'>
        <Home />
      </div>
      <div className='login-page'>
        {/* <Login /> */}
      </div>
      <div className='sign-up-page'>
        {/* <Signup /> */}
      </div>
      <div className='profile-page'>
        {/* <Profile /> */}
      </div>
    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

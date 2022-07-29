import React from 'react';
import "./Home.css";
import logo from "../../img/fitfriends logo.png";
import logo2 from "../../img/logo2.png";
// import { useQuery } from '@apollo/client';

// import ProfileList from '../components/ProfileList';

// import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
    // const { loading, data } = useQuery(QUERY_PROFILES);
    // const profiles = data?.profiles || [];
    return (
        <main>
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
                        View Profile
                    </button>
                    <button className="home-buttons">
                        Edit Profile
                    </button>
                    <button className="home-buttons">
                        Logout
                    </button>
                </div>
            </div>

            <div className='status-feed-container'>
                <div className='status-feed'>
                    This is where the friend statuses will be displayed
                </div>


            </div>

            <footer>
                <div className='logo-image'>
                    <img src={logo2} alt="fit friends logo" className='footer-logo' />
                </div>
            </footer>

            


        </main>
    )
}

//     return (
//         <main>
//             <div className="flex-row justify-center">
//                 <div className="col-12 col-md-10 my-3">
//                     {loading ? (
//                         <div>Loading...</div>
//                     ) : (
//                         <ProfileList
//                             profiles={profiles}
//                             title="Here's the current roster of friends..."
//                         />
//                     )}
//                 </div>
//             </div>
//         </main>
//     );
// };

export default Home;

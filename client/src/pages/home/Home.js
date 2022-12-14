import React from 'react';
import "./Home.css";
// import logo from "../../img/fitfriends logo.png";
// import logo2 from "../../img/logo2.png";
import { useQuery } from '@apollo/client';

import ProfileList from '../../components/ProfileList';

import { QUERY_PROFILES } from '../../utils/queries'

const Home = () => {
    const { loading, data } = useQuery(QUERY_PROFILES);
    const profiles = data?.profiles || [];
    return (
        <main>
            <div className="homepage-container">
                <div className="homepage-content">
                    {loading ? (
                        <div>Loading Your Friends...</div>
                    ) : (
                        <ProfileList
                            profiles={profiles}
                            title="Here's how your friends are getting fit..."
                        />
                    )}
                </div> 
            </div>
        </main>
    );
};

export default Home;
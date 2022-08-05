
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/SignUp';
import Profile from './pages/profile/Profile';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import FoodEntryForm from './components/FoodEntryForm'
import WorkoutEntryForm from './components/WorkoutEntry'
import WelcomePage from './pages/welcome/Welcome';


const httpLink = createHttpLink ({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (

    // allows us to call us query and use mutation hooks
    <ApolloProvider client={client}>
      <Router>
        <div className="header">
          <Header />
          <div className="header-container">
            <Routes>
            <Route
                path="/"
                element={<WelcomePage />}
              />
              <Route
                path="/homepage"
                element={<Home />}
              />
              <Route
                path="/food-entry-form"
                element={<FoodEntryForm />}
              />
                <Route
                path="/workout-entry-form"
                element={<WorkoutEntryForm />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/me"
                element={<Profile />}
              />
              <Route
                path="/profiles/:profileId"
                element={<Profile />}
              />

            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
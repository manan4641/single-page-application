import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // here we rename BrowseRouter with Router or we can use any name.
import Users from './user/pages/Users.js';
import UserPlaces from './places/pages/UserPlaces.js';
import './App.css';
import Newplace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  /*
    In version 6 of React Router, we use the 'Routes' component instead of 'Switch (old)', and Route components use the 'element' prop instead of the 'component' prop,
    The 'Redirect' component is replaced with the 'Navigate' component. In this below code, the Navigate component is used to redirect any unknown routes to the home page. and in this case our home page is 'Users' component page.
  */
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<Newplace />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>

  );
}

export default App;

import Header from './Header/Header';
import Main from './Main/Main';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import NotFound from './404/404';
import Login from './Login/Login';
import Register from './Register/Register';
import Profile from './Profile/Profile';
import BurgerMenu from './BurgerMenu/BurgerMenu';


import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";


// import arseny_photo from '../images/arseny.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/movies">
          <Movies
          // onSubmit={handleRegister}
          // signInPush={pushToLogin}
          // isOpen={isInfoTooltipOpen.isOpen}
          // status={isInfoTooltipOpen.status}
          // onClose={closeAllPopups}
          />
        </Route>
        <Route path="/burger-menu">
          <BurgerMenu
          // onSubmit={handleRegister}
          // signInPush={pushToLogin}
          // isOpen={isInfoTooltipOpen.isOpen}
          // status={isInfoTooltipOpen.status}
          // onClose={closeAllPopups}
          />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies
          // onSubmit={handleRegister}
          // signInPush={pushToLogin}
          // isOpen={isInfoTooltipOpen.isOpen}
          // status={isInfoTooltipOpen.status}
          // onClose={closeAllPopups}
          />
        </Route>
        <Route path="/signin">
          <Login
          // onSubmit={handleRegister}
          // signInPush={pushToLogin}
          // isOpen={isInfoTooltipOpen.isOpen}
          // status={isInfoTooltipOpen.status}
          // onClose={closeAllPopups}
          />
        </Route>
        <Route path="/signup">
          <Register
          // onSubmit={handleRegister}
          // signInPush={pushToLogin}
          // isOpen={isInfoTooltipOpen.isOpen}
          // status={isInfoTooltipOpen.status}
          // onClose={closeAllPopups}
          />
        </Route>
        <Route path="/profile">
          <Profile
          // onSubmit={handleRegister}
          // signInPush={pushToLogin}
          // isOpen={isInfoTooltipOpen.isOpen}
          // status={isInfoTooltipOpen.status}
          // onClose={closeAllPopups}
          />
        </Route>
        <Route exact path="/">
          <Main
          // onSubmit={handleRegister}
          // signInPush={pushToLogin}
          // isOpen={isInfoTooltipOpen.isOpen}
          // status={isInfoTooltipOpen.status}
          // onClose={closeAllPopups}
          />
        </Route>
        <Route  path="*">
          <NotFound />
        </Route>

        {/* <Route path="/sign-up">
          <Register
            onSubmit={handleRegister}
            signInPush={pushToLogin}
            isOpen={isInfoTooltipOpen.isOpen}
            status={isInfoTooltipOpen.status}
            onClose={closeAllPopups}
          />

        </Route>
        <Route path="/sign-in">
          <Login
            onSubmit={handleLogin}
            signInPush={pushToRegister}
          />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;

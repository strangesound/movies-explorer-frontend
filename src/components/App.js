// import Header from './Header/Header';
import Main from './Main/Main';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import NotFound from './404/404';
import Login from './Login/Login';
import Register from './Register/Register';
import Profile from './Profile/Profile';
import Preloader from './Preloader/Preloader'
import ProtectedRoute from './ProtectedRoute';
import { api } from '../utils/MoviesApi';
import { mainApi } from '../utils/MainApi';
import { register, login, checkToken } from '../utils/auth.js';
import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  useHistory
} from "react-router-dom";
import InfoTooltip from './InfoTooltip';


// import arseny_photo from '../images/arseny.jpg';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [tooltipStatus, setTooltipStatus] = React.useState();

  const [movies, setMovies] = useState([])
  const [userMovies, setUserMovies] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [korotkometr, setKorotkometr] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [showPreloader, setShowPreloader] = useState(false)

  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      (mainApi.getUserInfo()
        .then((response) => {
          // console.log('response в get user info', response)
          setCurrentUser(response);
          // console.log('useeffect', currentUser)

        })
        .catch((err) => {
          console.log('setCurrentUser', err)
        }))
    }

  }, [loggedIn])

  useEffect(() => {
    if (loggedIn) {
      (mainApi.getUserMovies()
        .then((response) => {
          // console.log('response в get movies info', response)
          setUserMovies(response);
        })
        .catch((err) => {
          console.log('setCurrentUser', err)
        }))
    }

  }, [loggedIn])

  function handleLogin(password, email) {
    //  - передается в <Login />, 
    // при вызове отправляет запрос авторизации, 
    // в случае успеха сохраняет email в стейте главного компонента, 
    // затем устанавливает в стейте флажок который говорит о том что пользователь залогинился, сохраняет в localStorage jwt токен который прилетает с сервера и отправляет пользователя на корневую страницу сайта (раз он залогинился, может спокойно путешествовать по самому сервису). Выполняется это с помощью history.push
    setShowPreloader(true);
    return login(password, email)
      .then((response) => {
        if (response.token) {
          localStorage.setItem('token', response.token)
          setLoggedIn(true);
          setCurrentUser(response.name, response.email);
          setTooltipStatus({
            text: 'Вы успешно зарегистрировались',
            iconType: 'success'
          });
          setTimeout(() => history.push('/movies'), 1000);
        }
        else {
          setTooltipStatus({
            text: response.message,
            iconType: 'error'
          });

        }
      })
      .catch((err) => {
        console.log('login', err)
        setTooltipStatus({
          text: err,
          iconType: 'error'
        });

      })
      .finally(() => setShowPreloader(false)
      )

  }
  function handleChangeUserValues(name, email) {
    //  - передается в <Login />, 
    // при вызове отправляет запрос авторизации, 
    // в случае успеха сохраняет email в стейте главного компонента, 
    // затем устанавливает в стейте флажок который говорит о том что пользователь залогинился, сохраняет в localStorage jwt токен который прилетает с сервера и отправляет пользователя на корневую страницу сайта (раз он залогинился, может спокойно путешествовать по самому сервису). Выполняется это с помощью history.push
    setShowPreloader(true);

    return mainApi.patchUserInfo(name, email)
      .then((response) => {
        if (response.token) {
          setCurrentUser(response);

        }
      })
      .catch((err) => {
        console.log('login', err)
      })
      .finally(() => setShowPreloader(false)
      )

  }





  function handleAddMovieToLiked(movieId) {
    //  - передается в <Login />, 
    // при вызове отправляет запрос авторизации, 
    // в случае успеха сохраняет email в стейте главного компонента, 
    // затем устанавливает в стейте флажок который говорит о том что пользователь залогинился, сохраняет в localStorage jwt токен который прилетает с сервера и отправляет пользователя на корневую страницу сайта (раз он залогинился, может спокойно путешествовать по самому сервису). Выполняется это с помощью history.push
    setShowPreloader(true);
    // console.log('handleAddMovieToLiked', movieId, movies[movieId - 1].nameRU, movies[movieId - 1].id)
    return mainApi.addMovieToLiked(movies[movieId - 1])
      .then((response) => {
        if (response) {
          // const newUserMovies = userMovies.map((c) => c._id === response._id ? response : c);
          // const newUserMovies = userMovies.push(response);
          const newUserMovies = [...userMovies, response]
          setUserMovies(newUserMovies);

          console.log('handleAddMovieToLikedSuccses', response)
          console.log('newUserMovies', newUserMovies)
        }
      })
      .catch((err) => {
        console.log('handleAddMovieToLiked', err)
      })
      .finally(() => setShowPreloader(false)
      )
  }

  function handleDeleteMovie(nameEN) {
    // console.log('handleDeleteMovie movie id', nameEN)
    setShowPreloader(true);
    const result = userMovies.find(obj => {
      return obj.nameEN === (nameEN)
    })

    // console.log('handleDeleteMovie result', result)
    if (result) {
      return mainApi.deleteMovie(result._id)
        .then((response) => {
          if (response) {
            console.log('delete movie', response)
          }
        })
        .catch((err) => {
          console.log('delete movie', err)
        })
        .finally(() => setShowPreloader(false)
        )
    }
  }
  function handleDeleteUserMovie(_id) {
    // console.log('handleDeleteMovie id', _id)
    setShowPreloader(true);
    return mainApi.deleteMovie(_id)
      .then((response) => {
        if (response) {
          console.log('delete movie', response)          
          const newList = userMovies.filter((item) => item._id !== _id);
          setUserMovies(newList);

        }
      })
      .catch((err) => {
        console.log('delete movie', err)
        setTooltipStatus({
          text: err,
          iconType: 'error'
        });

      })
      .finally(() => setShowPreloader(false)
      )
  }


  function handleSignout() {
    // handleSignout - передается в компонент Header, в котором будет кнопка выхода, при нажатии на кнопку выхода происходит очистка хранилища, перенаправление на страницу входа и очистка стейта, отвечающего за состояние авторизации
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/signin')

  }

  function handleRegister(name, password, email) {
    // handleRegister - передается в <Register />, при вызове отправляет запрос регистрации, в зависимости от результата задается стейт для <InfoTooltip /> и при успешном выполнении запроса перенаправление на страницу /sing-in
    setShowPreloader(true);

    return register(name, password, email)
      .then((response) => {
        if (response.error || response.status > 300) {
          setTooltipStatus({
            text: response.message,
            iconType: 'error'
          });

          console.log('register error', response.error)// setIsInfoTooltipOpen({ isOpen: true, status: 'deny' })
        }
        else {
          // console.log('ответ в блоке успеха', response)
          try {
            setCurrentUser(response.data.name, response.data.email);
            setTooltipStatus({
              text: 'Вы успешно зарегистрировались',
              iconType: 'success'
            });
            setTimeout(() => history.push('/signin'), 1000);

          }
          catch {
            setTooltipStatus({
              text: 'Что-то пошло не так',
              iconType: 'error'
            });

          }

        }
      })
      .catch((err) => {
        console.log('register', err)
        setTooltipStatus({
          text: err,
          iconType: 'error'
        });

      })
      .finally(() => setShowPreloader(false)
      )
  }

  const tokenCheck = React.useCallback(() => {
    //   checkToken - вызывается при монтировании App, и отправляет запрос checkToken если jwt есть в хранилище
    const token = localStorage.getItem('token');
    if (token) {
      checkToken(token)
        .then((result) => {
          if (result) {
            setLoggedIn(true);
            setCurrentUser(result.email);
            history.push('/movies');
          }
        })
        .catch(() => history.push('/'));
    }
  }, [history])
  useEffect(() => {
    tokenCheck();
  }, [tokenCheck])


  function pushToLogin() {
    history.push('/signin')

  }

  useEffect(() => {
    if (loggedIn && movies.length < 1) {
      (api.getInitialMovies()
        .then((response) => {
          // console.log(response)
          setMovies(response);
        })
        .catch((err) => {
          console.log('getInitialMovies', err)
        })
      )
    }
  }, [loggedIn, movies.length])

  function closeAllPopups() {
    //не делайте так! не изменяйте DOM напрямую
    //document.querySelector('.popup_is-opened').classList.remove('popup_is-opened');

    setTooltipStatus();
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Preloader
        showPreloader={showPreloader}
      />
      {/* <div className="App"> */}
      <Switch>

        < ProtectedRoute exact path="/movies"
          component={Movies}
          loggedIn={loggedIn}
          onLike={handleAddMovieToLiked}
          onDisLike={handleDeleteMovie}
          movies={movies}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          korotkometr={korotkometr}
          setKorotkometr={setKorotkometr}
          userMovies={userMovies}
        />
        < ProtectedRoute exact path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}
          movies={userMovies}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          korotkometr={korotkometr}
          setKorotkometr={setKorotkometr}
          onDisLike={handleDeleteUserMovie}

        />
        < ProtectedRoute exact path="/profile"
          component={Profile}
          handleSignout={handleSignout}
          loggedIn={loggedIn}
          currentUser={currentUser}
          onSubmit={handleChangeUserValues}
        />

        <Route path="/signin">
          <Login
            onSubmit={handleLogin}
            signInPush={pushToLogin}
          />
        </Route>

        <Route path="/signup">
          <Register
            onSubmit={handleRegister}
            signInPush={pushToLogin}
          />
        </Route>

        <Route exact path="/">
          <Main
            loggedIn={loggedIn}

          />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>

      </Switch>

      <Route path="/(signup|signin|saved-movies)">
        <InfoTooltip
          isOpen={!!tooltipStatus}
          onClose={closeAllPopups}
          status={tooltipStatus}
        />
      </Route>

    </CurrentUserContext.Provider>

  );
}

export default App;

import Main from './Main.js';
import Footer from './Footer.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup.js';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import { api } from '../utils/api.js';
import { register, login, checkToken } from '../utils/auth.js';
import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Route, Switch, useHistory } from 'react-router-dom';

// данные пользователя и карточки запрашивайте на фронтенде только, если пользователь вошел (useEffect срабатывающий по стейту loggedIn)


function App() {
  const [currentUser, setCurrentUser] = useState({})

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({ isOpen: false, link: '', name: '' })
  const [loggedIn, setLoggedIn] = useState(false)

  // хранение email авторизированного пользователя
  const [userMail, setUserMail] = useState('')

  // хранение состояния открытия попапа успеха или ошибки регистрации
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState({ isOpen: false, status: '' })

  const history = useHistory();


  function handleLogin(password, email) {
    //  - передается в <Login />, 
    // при вызове отправляет запрос авторизации, 
    // в случае успеха сохраняет email в стейте главного компонента, 
    // затем устанавливает в стейте флажок который говорит о том что пользователь залогинился, сохраняет в localStorage jwt токен который прилетает с сервера и отправляет пользователя на корневую страницу сайта (раз он залогинился, может спокойно путешествовать по самому сервису). Выполняется это с помощью history.push

    return login(password, email)
      .then((response) => {
        if (response.token) {
          localStorage.setItem('token', response.token)
          setLoggedIn(true);
          setUserMail(email);
          history.push('/');
        }
      })
      .catch((err) => {
        console.log('login', err)
      })
  }


  function handleSignout() {
    // handleSignout - передается в компонент Header, в котором будет кнопка выхода, при нажатии на кнопку выхода происходит очистка хранилища, перенаправление на страницу входа и очистка стейта, отвечающего за состояние авторизации
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/signin')

  }

  function handleRegister(password, email) {
    // handleRegister - передается в <Register />, при вызове отправляет запрос регистрации, в зависимости от результата задается стейт для <InfoTooltip /> и при успешном выполнении запроса перенаправление на страницу /sing-in

    return register(password, email)
      .then((response) => {
        if (response.error) {
          setIsInfoTooltipOpen({ isOpen: true, status: 'deny' })
        }
        else {
          setIsInfoTooltipOpen({ isOpen: true, status: 'success' })
          setUserMail(response.data.email);
          setTimeout(() => history.push('/signin'), 1000);
        }
      })
      .catch((err) => {
        console.log('register', err)
      })
  }

  const tokenCheck = React.useCallback(() => {
    //   checkToken - вызывается при монтировании App, и отправляет запрос checkToken если jwt есть в хранилище
    const token = localStorage.getItem('token');
    if (token) {
      checkToken(token)
        .then((result) => {
          if (result) {
            setLoggedIn(true);
            setUserMail(result.email);
            history.push('/');
          }
        })
        .catch(() => history.push('/signin'));
    }
  }, [history])
  useEffect(() => {
    tokenCheck();
  }, [tokenCheck])


  function pushToLogin() {
    history.push('/signin')

  }
  function pushToRegister() {
    history.push('/signup')

  }





  useEffect(() => {
    if (loggedIn) {
      (api.getUserInfo()
        .then((response) => {
          // console.log('response в get user info', response)
          setCurrentUser(response);
        })
        .catch((err) => {
          console.log('setCurrentUser', err)
        }))
    }

  }, [loggedIn])


  function handleCardClick(status, link, name) {
    setSelectedCard({ status, link, name });

  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
    setIsInfoTooltipOpen({ isOpen: false })
  }

  function handleUpdateUser(name, job) {
    api.patchUserInfo(name, job)
      .then((response) => {
        setCurrentUser(response);
        closeAllPopups();
      })
      .catch((err) => {
        console.log('handleUpdateUser', err)
      })
  }
  function handleUpdateAvatar({ avatar }) {
    api.patchAvatarImage(avatar)
      .then((response) => {
        setCurrentUser(response);
        closeAllPopups();
      })
      .catch((err) => {
        console.log('handleUpdateAvatar', err)
      })
  }


  const [cards, setCards] = useState([])

  useEffect(() => {
    if (loggedIn) {
      (api.getInitialCards()
        .then((response) => {
          setCards(response);
        })
        .catch((err) => {
          console.log('getInitialCards', err)
        })
      )
    }
  }, [loggedIn])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i === currentUser._id);
    console.log('handleCardLike(card)', isLiked)
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      console.log('function handleCardLike newCard', newCard)
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
      closeAllPopups();

    })
      .catch((err) => {
        console.log('changeLikeCardStatus', err)
      });
  }

  function handleCardDelete(card) {
    api.removeCard(card._id).then((newCard) => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    }).catch((err) => {
      console.log('setCards', err)
    });
  }

  function handleAddPlaceSubmit(objectNameLink) {
    api.addNewCard(objectNameLink)
      .then((response) => {
        setCards([response, ...cards]);
        closeAllPopups();

      })
      .catch((err) => {
        console.log('handleUpdateAvatar', err)
      })
  }


  return (


    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route path="/signup">
          <Register
            onSubmit={handleRegister}
            signInPush={pushToLogin}
            isOpen={isInfoTooltipOpen.isOpen}
            status={isInfoTooltipOpen.status}
            onClose={closeAllPopups}
          />

        </Route>
        <Route path="/signin">
          <Login
            onSubmit={handleLogin}
            signInPush={pushToRegister}
          />
        </Route>

        < ProtectedRoute exact path="/"
          component={Main}

          toDo={handleSignout}
          buttonName={'Выйти'}
          email={userMail}


          loggedIn={loggedIn}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
      </Switch>

      <Footer />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        handleSubmit={handleAddPlaceSubmit}
        onClose={closeAllPopups}
      />

      <EditProfilePopup
        userUpdate={handleUpdateUser}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups} />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups} />

      <EditAvatarPopup
        onUpdateAvatar={handleUpdateAvatar}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups} />

    </CurrentUserContext.Provider>
  );
}

export default App;

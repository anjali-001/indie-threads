import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import fire from '../../fire';
import Login from '../../components/Login';
import { AuthContext } from '../../auth';
import makeUser from '../../constants/fire-functions/makeUser';
import axios from 'axios'

import './Style.css';

const App = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [user, setUser] = useState("")
  const [account, setAccount] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [redirect, setRedirect] = useState(false);
  const [bio, setBio] = useState("")
  const [link, setLink] = useState("")
  const [interests, setInterests] = useState("")

  const currentUser = useContext(AuthContext);

  const loggedIn = sessionStorage.getItem("loggedIn");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setUsername("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
    setUsername("");
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        sessionStorage.setItem("loggedIn", email);
        setRedirect(true)
      })
      .catch(err => {
        {
          switch (err.code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message)
              break;
          }
        }
      })
  }
  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        makeUser(username, res.user.email, res.user.uid, interests.split(","), bio, link)
        setRedirect(true)

      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    })
  }

  useEffect(() => {
    authListener();
  }, [])


  const handleLoginWithDeck = async (e) => {
    await axios.get("http://localhost:5000/api/get-access-token")
      .then((res) => {
        if (res.data.accessToken && res.data.user && res.data.user.name) {
          fire
            .auth()
            .signInWithEmailAndPassword(res.data.user.email, "password")
            .then(() => {
              sessionStorage.setItem("loggedIn", email);
              setRedirect(true)
            })
            .catch(err => {
              {
                switch (err.code) {
                  case "auth/invalid-email":
                  case "auth/user-disabled":
                  case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                  case "auth/wrong-password":
                    setPasswordError(err.message)
                    break;
                }
              }
            })
        }
      })
  }

  if (redirect) return <Redirect to='/explore' />
  if (loggedIn !== null) return <Redirect to='/explore' />
  return (
    <div className="login-container">
      <Login handleLoginWithDeck={handleLoginWithDeck} bio={bio} setBio={setBio} link={link} setLink={setLink} interests={interests} setInterests={setInterests} username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignUp={handleSignUp} account={account} setAccount={setAccount} emailError={emailError} passwordError={passwordError}>
      </Login>
    </div>
  );
}

export default App;

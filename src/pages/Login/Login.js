import React, {useState, useEffect, useContext} from 'react';
import { Redirect } from 'react-router-dom';

import fire from '../../fire';
import Login from '../../components/Login';
import { AuthContext } from '../../auth';
import makeUser from '../../constants/fire-functions/makeUser';

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
      .then(() => {setRedirect(true)})
      .catch(err => {{
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message)
            break;
        }
      }})
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
        switch(err.code){
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

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user){
        clearInputs();
        setUser(user);
      } else{
        setUser("");
      }
    })
  }
  
  useEffect(() => {
    authListener();
  }, [])

  if (redirect) return <Redirect to='/explore' />
  return (
    <div className="login-container">
      <Login bio={bio} setBio={setBio} link={link} setLink={setLink} interests={interests} setInterests={setInterests} username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignUp={handleSignUp} account={account} setAccount={setAccount} emailError={emailError} passwordError={passwordError}>
      </Login>
    </div>
  );
}

export default App;

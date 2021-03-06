import fire from '../src/fire'
import React, {useState, useEffect} from 'react'
import Login from './components/login'
import Hero from './components/hero.js'
import './App.css'
//import 'semantic-ui-css/semantic.min.css'
import Menu from './components/Menu'

const App = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [user, setUser] = useState("")
  const [account, setAccount] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
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

  return (
    <div className="App">
      { user ? (
        <>
          <Hero handleLogout={handleLogout}/>
          <Menu />
        </>
      ) : 
      (
        <>
        <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignUp={handleSignUp} account={account} setAccount={setAccount} emailError={emailError} passwordError={passwordError}>
        </Login>
        </>
      )}
      
      
    </div>
  );
}

export default App;

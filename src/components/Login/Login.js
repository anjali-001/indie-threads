
import React from 'react';

const Login = (props) => {

    const { username, setUsername, email, setEmail, password, setPassword, handleLogin, handleSignUp, account, setAccount, emailError, passwordError } = props

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Email</label>
                <input type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                {account ? 
                    null
                    : ( 
                    <div>
                        <label>Username</label>
                    <input type="text"
                        autoFocus
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </div>
                    )
                }
                <p className="errorMsg"></p>
                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {account ? (
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Don't have an account ? <span onClick={() => setAccount(!account)}>Sign up</span></p>
                        </>
                    ) :
                    (
                        <>
                        <button onClick={handleSignUp}>Sign Up</button>
                        <p>Have an account? <span onClick={() => setAccount(!account)}>Sign In</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;
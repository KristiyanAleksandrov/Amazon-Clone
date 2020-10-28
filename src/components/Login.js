import React, { useState } from 'react'
import '../css/Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch(e => alert(e.message));
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch((e) => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
                    alt="" />
            </Link>
            <div className="login__info">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign in</button>
                    <p>
                        By signing-in you agree to Amazon's Conditions of Use & Sale.
                        Please see our Privacy Notice, our Cookies Notice and our
                        Interest-Based Ads Notice.
                    </p>
                </form>
            </div>
            <div className="login__createAccount">
                <h5>New to Amazon?</h5>
                <button onClick={register} className="login__createAccount__utton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login;
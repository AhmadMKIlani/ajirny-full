import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputError, setInputError] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        axios.get('http://localhost/ajirny-full/php/user.php')
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].email === email && res.data[i].password === password) {
                        setCurrentUser(res.data[i].name);
                        localStorage.setItem('current-user', JSON.stringify(res.data[i]));
                        setInputError(false);
                        break;
                    } else {
                        setInputError(true);
                    }
                }
            })
            .catch(error => {
                console.log(error.response)
            });
            navigate('/');

    }
    return (
        <div className='login'>
            <div className="login__container">
                <h1 className='login__title'>Login</h1>
                <form className='login__form' onSubmit={login}>

                    {inputError && <p className='login__form--error'>Email or password does not match!!</p>}
                    <div className="login__form--field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} value={email} /> <br />
                    </div>
                    <div className="login__form--field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} value={password} /> <br />
                    </div>
                    <button type='submit' className='login__formBtn'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
import React, { useState} from 'react'
import './Registration.css';
import axios from 'axios';
function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const regexPassword = /^(?=.*[A-Z])(?=.*[@$!%*#?&])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    const regexEmail = /^[A-ZA-z0-9._-]+@(hotmail|gmail|yahoo|outlook).com$/;
    const register = (e) => {
        e.preventDefault();
        if (!regexEmail.test(email)) {
            setEmailError(() => true);
        }
        if (!regexPassword.test(password)) {
            setPasswordError(() => true);
        }
        if (name !== '' && (emailError || passwordError !== true)) {
            const obj = {
                name: name,
                email: email,
                password:password
            }
            axios.post('http://localhost/php/register.php', obj)
                .then(res => console.log(res.data))
                .catch(error => {
                    console.log(error.response)
                });
            // const formData = new FormData();
            // formData.append("name", name);
            // formData.append("email", email);
            // formData.append("password", password);
            // axios({
            //     method: "post",
            //     url: "http://localhost/ajirny-full/php/sign.php",
            //     data: formData,
            //     config: { headers: { "content-Type": "multipart/form-data" } },
            // })
            //     .then((res) => {
            //         if (res.data !== "The email you entered already exists") {
            //             const obj = {
            //                 id: res.data.id,
            //                 name: res.data.name,
            //                 email: res.data.email,
            //                 password: res.data.password
            //             };
            //             localStorage.setItem("users", JSON.stringify(obj));
            //             if (localStorage.getItem("url")) {
            //                 localStorage.removeItem("url");
            //                 window.location.href = "http://localhost:3000/service";
            //             }
            //             else {
            //                 window.location.assign("/");
            //             }

            //         }
            //     })
            //     .catch((error) => {
            //         console.log(error.response);
            //     });
        }
    }
    return (
        <div className='registration'>
            <div className="registration__container">
                <h1 className='registration__title'>Sign up</h1>
                <form className='registration__form' onSubmit={register}>
                    <div className="registration__form--field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="registration__form--field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} /> <br />
                        {emailError && <p className='registration__form--error'>Wrong Email Format</p>}
                    </div>
                    <div className="registration__form--field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} /> <br />
                        {passwordError && <p className='registration__form--error'>Should be 8 characters(capital, small, numbers and special characters)</p>}
                    </div>
                    <button type='submit' className='registration__formBtn'>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default Registration
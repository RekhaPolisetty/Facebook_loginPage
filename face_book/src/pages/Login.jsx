import React, { useState } from 'react'
import './Login.css'
import SignUpPage from './SignUpPage'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [showSignUpUI, setShowSignUpUI] = useState(false);
    const [loginDetails, setLoginDetails] = useState({
        email_mobile: '',
        password: ''
    })

    const handleOptionsChange = (event) => {
        const { id, value } = event.target;
        console.log('id::',id, '             value::',value);
        setLoginDetails(prev => ({ ...prev, [id]: value }))
    }

    const loginHandler = () => {
        const { email_mobile, password } = loginDetails;
        if (email_mobile.length > 0 && password.length > 0) {
            axios.get('http://localhost:3030/users_list').then((response) => {
                const isValidUser = response.data?.find(obj => obj.email_mobile == email_mobile && obj.password == password);
                if (isValidUser) {
                    navigate(`/dashBoard`,{state:isValidUser})
                } else {
                    alert('Invalid Login Details!!')
                }
            }).catch((err)=>{
                alert('Something went wrong!!')
            })
        } else {
            alert('please enter all mandatory fields!!')
        }

    }
    return (
        <div class="content">
            <div class="flex-div">
                <div class="name-content">
                    <h1 class="logo">Facebook</h1>
                    <p>Connect with friends and the world around you on Facebook.</p>
                </div>

                <div id='form'>
                    <input type="text" placeholder="Email or Phone Number" value={loginDetails.email_mobile} id='email_mobile' onChange={handleOptionsChange} />
                    <input type="password" placeholder="Password" value={loginDetails.password} id='password' onChange={handleOptionsChange} />
                    <button class="login" onClick={loginHandler}>Log In</button>
                    {/* <a href="#">Forgot Password ?</a> */}
                    <hr />
                    <button class="create-account" onClick={() => { setShowSignUpUI(true) }}>Create New Account</button>
                </div>

                {showSignUpUI && <div style={{ position: "absolute", display: 'flex', width: "100vw", height: '100vh', backgroundColor: 'Rgba(174, 174, 181,0.5)' }}><SignUpPage showSignUpUI={() => { setShowSignUpUI(false) }} /></div>}

            </div>
        </div>
    )
}

export default Login
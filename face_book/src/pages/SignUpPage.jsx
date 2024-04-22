import axios from 'axios';
import './SignUpPage.css'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'


const SignUpPage = (props) => {

    const [formData, setFormData] = useState({
        firstName: '',
        surName: '',
        email_mobile: '',
        password: '',
        dateOfBirth: '',
        radio: ''
    });
    const { firstName, surName, email_mobile, password, dateOfBirth, radio } = formData;

    const handleOptionsChange = (event) => {
        const { id, value, className } = event.target;
        if (className == 'radio') {
            setFormData(prev => ({ ...prev, radio: value }))
        } else {
            setFormData(prev => ({ ...prev, [id]: value }))
        }
    }

    const onSignInPress = () => {
        console.log(Object.values(formData));
        const isFormNotValid = Object.values(formData).some((value = '') => value?.length <= 0 || value == undefined);
        if (!isFormNotValid) {
            axios.post('http://localhost:3030/users_list',formData).then(()=>{
                alert('Account created successfully!!')
                props.showSignUpUI()
            })
        }else{
            alert('Please fill all the fields')
        }
    }

    return (
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: 'white', width: '30vw', height: '80vh', padding: '15px' }}>
                <div style={{ display: "flex", justifyContent: 'space-between', alignItems: "center" }}>
                    <h2 id="container">Sign Up</h2>
                    <IoClose size={30} onClick={()=>{props.showSignUpUI()}}/>
                </div>
                <div id="heading">It's quick and easy.</div>
                <hr id="hr" />
                <div id="userDetails">
                    <div>
                        <input placeholder='First name' type="text" id="firstName" name="firstName" value={firstName} onChange={handleOptionsChange} />
                    </div>

                    <div>
                        <input placeholder='Surname' type="text" id="surName" name="surName" value={surName} onChange={handleOptionsChange} />
                    </div>

                    <div>
                        <input placeholder='Mobile number or email address' type="text" id="email_mobile" value={email_mobile} name="email_mobile" onChange={handleOptionsChange} />
                    </div>

                    <div>
                        <input placeholder='New password' type="password" id="password" name="password" value={password} onChange={handleOptionsChange} />
                    </div>

                    <div>
                        <input placeholder='Date of Birth' type="date" id="dateOfBirth" name="dateOfBirth" value={dateOfBirth} onChange={handleOptionsChange} />
                    </div>

                </div>
                <div id ="gender">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", width: '7vw', border: 'solid 1px black', padding: '4px', borderRadius: '5px' }}>
                        Female
                        <input type="radio" value="Female" className='radio' checked={radio === 'Female'} onChange={handleOptionsChange} />
                    </label>
                    <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", width: '7vw', border: 'solid 1px black', padding: '4px', borderRadius: '5px' }}>
                        Male
                        <input type="radio" value="Male" className='radio' checked={radio === 'Male'} onChange={handleOptionsChange} />
                    </label>
                    <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", width: '7vw', border: 'solid 1px black', padding: '4px', borderRadius: '5px' }}>
                        others
                        <input type="radio" value="others" className='radio' checked={radio === 'others'} onChange={handleOptionsChange}/>
                    </label>
                </div>
                </div>
                

                <button style={{ fontSize: '20px', fontWeight: 'bold',margin:'30px 100px',padding: '5px 60px', borderRadius: '5px', border: 'none', backgroundColor: "#1877f2", color: 'white' }} onClick={onSignInPress}>Sign Up</button>

            </div>
        </div>
    )
}

export default SignUpPage
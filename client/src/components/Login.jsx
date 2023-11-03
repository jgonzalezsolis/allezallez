import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })
    const [loginErrors, setLoginErrors] = useState({})

    const onChangeHandler = (e) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/loginUser', userLogin, {withCredentials:true})
            .then((res) => {
                console.log(res.data.firstName);
                navigate('/main')
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data);
                setLoginErrors(err.response.data)
            })
    }
return (
    <div className='col-7 '>
        <form onSubmit={submitHandler} >
            <label className='form-label'>Email:</label>
            <input type="text" name="email" className='form-control' onChange={onChangeHandler} value={userLogin.email} />
            {
                    loginErrors.message ?
                    <p>{loginErrors.message}</p>
                    :
                    null
                }
            <label className='form-label'>Password:</label>
            <input type="password" name="password" className='form-control' onChange={onChangeHandler} value={userLogin.password} />
            {
                    loginErrors.message ?
                    <p>{loginErrors.message}</p>
                    :
                    null
                }
            <button className='btn btn-primary mt-3'>Login</button>
            <br />
            <Link to={'/'}>Register</Link>
            

        </form>
    </div>
)
}

export default Login
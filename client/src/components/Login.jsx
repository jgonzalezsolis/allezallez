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
    <div className='backgroundlogin'>
        <h1 className=' p-3 '> Welcome to Allez Allez</h1>
        <h3 className='p-3 mb-2 '>A place to share routes with other cyclist</h3> 
        <h3 className='p-3 mb-2 '>Please Log In</h3>
        <form className='w-25 mx-auto'  onSubmit={submitHandler} >
            <label className='form-label'>Email:</label>
            <input type="text" name="email" className='form-control' onChange={onChangeHandler} value={userLogin.email} />
            {
                    loginErrors.message ?
                    <p className="alert alert-danger p-1">{loginErrors.message}</p>
                    :
                    null
                }
            <label className='form-label'>Password:</label>
            <input type="password" name="password" className='form-control' onChange={onChangeHandler} value={userLogin.password} />
            {
                    loginErrors.message ?
                    <p className="alert alert-danger p-1">{loginErrors.message}</p>
                    :
                    null
                }
            <button className='btn btn-primary mt-3'>Login</button>
            <br />
            <Link to={'/'} className='btn btn-primary mt-2'>Register</Link>
            

        </form>
    </div>
)
}

export default Login
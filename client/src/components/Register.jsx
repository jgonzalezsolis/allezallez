import React from 'react'

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = (props) => {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const [errors, setErrors] = useState({
    })

    const [regErrors, setRegErrors] = useState('')

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/registerUser', user, {withCredentials:true})
            .then((res) => {
                navigate('/login')
            })
            .catch((err) => {
                if (err.response.data.message === 'This email already exists, please log in'){
                    setRegErrors('This email already exists, please log in')
                }
                else{
                    setErrors(err.response.data.error.errors)
                }
            })
        }
        return (
            <div className='background '>
            <div >
            <h1 className='p-3 mt-5'> Welcome to Allez Allez</h1>
            <h2 className='p-3 mb-2 '>A place to share routes with other cyclist</h2> 
            <h3 className='p-3 mb-2 '>Register Here</h3> 
            </div>
            <form className='w-25 mx-auto' onSubmit={submitHandler}>
            {regErrors && (
                <div className="alert alert-danger p-1">
                        {regErrors}
                    </div>
                )}
            <div>
                <label className="form-label h5 ">First Name:</label>
                <input type="text" className="form-control" value={user.firstName} name='firstName' onChange={changeHandler} />
                {
                    errors.firstName ?
                    <p className="alert alert-danger p-1">{errors.firstName.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label className="form-label mt-2 h5 ">Last Name:</label>
                <input type="text" className="form-control" value={user.lastName} name='lastName' onChange={changeHandler}/>
                {
                    errors.lastName ?
                    <p className="alert alert-danger p-1">{errors.lastName.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label className="form-label mt-2  h5 ">Email:</label>
                <input type="email" className="form-control" value={user.email} name='email' onChange={changeHandler} />
                {
                    errors.email ?
                    <p className="alert alert-danger p-1">{errors.email.message}</p>
                    :
                    null
                }


            </div>
            <div>
                <label className="form-label mt-2  h5 ">Password:</label>
                <input type="password" className="form-control" value={user.password} name='password' onChange={changeHandler}/>
                {
                    errors.password ?
                    <p className="alert alert-danger p-1">{errors.password.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label className="form-label mt-2 h5 ">Confirm Password:</label>
                <input type="password" className="form-control" value={user.confirmPassword} name='confirmPassword' onChange={changeHandler}/>
                {
                    errors.confirmPassword ?
                    <p className="alert alert-danger p-1">{errors.confirmPassword.message}</p>
                    :
                    null
                }
            </div>
            <br />
            <div>
            <button className='btn btn-primary'>Register</button>
            </div>
            <div >
            <Link to={'/login'} className='btn btn-primary mt-2'>Already Have An Account?</Link>
            </div>
        </form>
        </div>
        
    )
}


export default Register


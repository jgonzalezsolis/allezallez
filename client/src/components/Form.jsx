import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';


const Form = () => {
    const [route, setRoute] = useState ({
        state: '',
        city: '',
        start: '',
        end: '',
        rating: '',
        distance: '',
        suggestions: ''
    })
    
    const navigate = useNavigate()
    const handleChange= (e)=>{
        setRoute({...route, [e.target.name]: e.target.value})
    }
    const [error, setError] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/routes', route, {withCredentials:true})
            .then((res)=>{
                navigate("/allRoutes")
        })
        .catch(err=>{
            setError(err.response.data.error.errors)
        })
        
    }
    const logoutUser = () => {
        axios.post('http://localhost:8000/api/logoutUser', {},{withCredentials:true})
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                navigate('/')
            })
    }
    
    
    return (
        <div className='backgroundform width-auto'>
            <Link to={'/allRoutes'} className='btn btn-primary mt-3 me-1'> See Routes </Link>
            <button className="btn btn-danger mt-3 ms-1" onClick={logoutUser}>Logout</button>
        <div >

        <h1 className=' p-3  '>ALLEZ ALLEZ!</h1>
        <h2 className='p-3 mb-2 ' >Share the routes as you share the road!</h2>
        <h3 className='p-3'>You are one ride away from happiness!</h3>
        <form onSubmit={handleSubmit} className='w-25 mx-auto'>
            <div>
                <label className="form-label ">State:</label><br/>
                <input className="form-control" type="text" name='state' value={route.state} onChange={handleChange} />
                {
                    error.state ?
                    <p className="alert alert-danger p-1">{error.state.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label className="form-label ">City:</label><br/>
                <input className="form-control" type="text" name='city' value={route.city} onChange={handleChange} />
                {
                    error.city ?
                    <p className="alert alert-danger p-1">{error.city.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label className="form-label ">Starting line:</label><br/>
                <input className="form-control" type="text" name='start' value={route.start} onChange={handleChange}/>
                {
                    error.start ?
                    <p className="alert alert-danger p-1">{error.start.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label className="form-labe ">Finish line:</label><br/>
                <input className="form-control" type="text" name='end' value={route.end} onChange={handleChange}/>
                {
                    error.end ?
                    <p className="alert alert-danger p-1">{error.end.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label className="form-label ">Route Rating (1-5):</label><br/>
                <input className="form-control" type="number" name='rating' value={route.rating} onChange={handleChange}/>
                {
                    error.rating ?
                    <p className="alert alert-danger p-1">{error.rating.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label className="form-label ">Distance in miles:</label><br/>
                <input className="form-control" type="number" name='distance' value={route.distance} onChange={handleChange}/>
                {
                    error.distance ?
                    <p className="alert alert-danger p-1">{error.distance.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label className="form-label ">Tips and suggestions:</label><br/>
                <input className="form-control" type="text" name='suggestions' value={route.suggestions} onChange={handleChange}/>
                {
                    error.suggestions ?
                    <p className="alert alert-danger p-1">{error.suggestions.message}</p>
                    :
                    null
                }
            </div>
            <input className='btn btn-primary mt-2' type="submit" value="Create"/>
        </form>
        </div>
        </div>
    )
}
export default Form;
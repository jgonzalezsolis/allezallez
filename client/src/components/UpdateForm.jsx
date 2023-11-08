import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
const Update = (props) => {
    const [route, setRoute] = useState ({
        state: '',
        city: '',
        start: '',
        end: '',
        rating: 0,
        distance: 0,
        suggestions: ''
    })
    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState({})
    const handleChange= (e)=>{
        setRoute({...route, [e.target.name]: e.target.value})
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/routes/${id}`, {withCredentials:true})
            .then(res=>{
                setRoute(res.data)
            })
            .catch(err=>{console.log(err)})
    }, [id]);

    const updateRoute = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/routes/${id}`, route,{withCredentials:true})
            .then(res => {
                navigate(`/routes/${id}`) 
            })
            .catch(err => {
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
        <div className='backgroundedit'>
            <Link to={"/main"} className='btn btn-primary mt-3 mb-2 me-1'> Add New Route </Link>
            <Link to={'/allRoutes'} className='btn btn-primary mt-3 mb-2 me-1 ms-1'> Back to Routes </Link>
            <button className="btn btn-danger mt-3 mb-2 ms-1" onClick={logoutUser}>Logout</button>
            <div className="p-3   ">

            <h1 className=''>ALLEZ ALLEZ</h1>
            <h2 className='p-3 mb-2 '>A place to share routes with other cyclist</h2>
            <blockquote className="blockquote mb-1">
                <p>“It never gets easier, you just get faster.”</p>
            </blockquote>
            <figcaption className=" color-white mb-3">
            -Greg LeMond 
            </figcaption>
            <form onSubmit={updateRoute} className='w-25 mx-auto'>
                <div className='form-group'>
                    <label className="form-label mt-3" >State:</label><br/>
                    <input className="form-control" type="text" name='state' value={route.state} onChange={handleChange} />
                    {
                        error.state ?
                        <p>{error.state.message}</p>
                        :
                        null
                    }
                </div>
                <div>
                    <label className="form-label">City:</label><br/>
                    <input className="form-control" type="text" name='city' value={route.city} onChange={handleChange} />
                    {
                        error.city ?
                        <p>{error.city.message}</p>
                        :
                        null
                    }
                </div>
                <div>
                    <label className="form-label">Starting line:</label><br/>
                    <input className="form-control" type="text" name='start' value={route.start} onChange={handleChange}/>
                    {
                        error.start ?
                        <p>{error.start.message}</p>
                        :
                        null
                    }
                </div>
                <div>
                    <label className="form-label">Finish line:</label><br/>
                    <input className="form-control" type="text" name='end' value={route.end} onChange={handleChange}/>
                    {
                        error.end ?
                        <p>{error.end.message}</p>
                        :
                        null
                    }
                </div>
                <div>
                    <label className="form-label">Route Rating (1-5):</label><br/>
                    <input className="form-control" type="number" name='rating' value={route.rating} onChange={handleChange}/>
                    {
                        error.rating ?
                        <p>{error.rating.message}</p>
                        :
                        null
                    }
                </div>
                <div>
                    <label className="form-label">Distance in miles :</label><br/>
                    <input className="form-control" type="number" name='distance' value={route.distance} onChange={handleChange}/>
                    {
                        error.distance ?
                        <p className="alert alert-danger p-1">{error.distance.message}</p>
                        :
                        null
                    }
                </div>
                <div>
                    <label className="form-label">Tips and suggestions:</label><br/>
                    <input className="form-control" type="text" name='suggestions' value={route.suggestions} onChange={handleChange}/>
                    {
                        error.suggestions ?
                        <p>{error.suggestions.message}</p>
                        :
                        null
                    }
                </div>
                <input className='btn btn-primary mt-2' type="submit" value="Update"/>
        </form>
        </div>
        </div>
    )
}
export default Update;
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
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
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    const navigate = useNavigate();
    const [error, setError] = useState({})
    const handleChange= (e)=>{
        setRoute({...route, [e.target.name]: e.target.value})
    }
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/routes/${id}`, {withCredentials:true})
            .then(res=>{
                console.log(res)
                console.log(res.data)
                setRoute(res.data)
            })
            .catch(err=>{console.log(err)})
    }, [id]);

    const updateRoute = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/routes/${id}`, route,{withCredentials:true})
            .then(res => {
                console.log(res);
                navigate(`/routes/${id}`)  //this will take us to the details page for this product
                //navigate('/product/' + id)  //and this is a way of using id without `` and no javascript {}, will take us to the details page for this product
                // navigate("/"); // this will take us back to the Main.js
            })
            .catch(err => {
            console.log(err.response.data.error.errors)
            setError(err.response.data.error.errors)
            // navigate("/")
        })
    }
    const logoutUser = () => {
        axios.post('http://localhost:8000/api/logoutUser', {},{withCredentials:true})
            .then((res) => {
                console.log(err);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                navigate('/')
            })
    }
    return (
        <div className=' mx-auto'>
            <button className="btn btn-danger mt-2 mb-2" onClick={logoutUser}>Logout</button>
            <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary rounded-4 ">

            <h1 className='text-bg-info p-3 rounded-4'>ALLEZ ALLEZ</h1>
            <h2 className='p-3 mb-2 bg-warning-subtle text-emphasis-warning rounded-4'>A place to share routes with other cyclist</h2>
            <blockquote className="blockquote">
                <p>“It never gets easier, you just get faster.”</p>
            </blockquote>
            <figcaption className="blockquote-footer">
            Greg LeMond 
            </figcaption>
            <form onSubmit={updateRoute} className='w-50 mx-auto'>
                <div className='form-group'>
                    <label className="form-label" >State:</label><br/>
                    {/* When the user types in this input, our onChange synthetic event 
                        runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
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
                    <label className="form-label">Route Rating:</label><br/>
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
                        <p>{error.distance.message}</p>
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
                <input className='btn btn-primary mt-2' type="submit" value="Create"/>
        </form>
        </div>
        </div>
    )
}
export default Update;
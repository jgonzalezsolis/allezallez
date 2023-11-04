import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const [route, setRoute] = useState ({
        state: '',
        city: '',
        start: '',
        end: '',
        rating: 0,
        distance: 0,
        suggestions: ''
    })
    const navigate = useNavigate()
    const handleChange= (e)=>{
        setRoute({...route, [e.target.name]: e.target.value})
    }
    const [error, setError] = useState({})

    const handleSubmit = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/routes', route, {withCredentials:true})
            .then((res)=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                navigate("/allRoutes")
                // setProduct([...product, res.data]);
                // setTitle("");
                // setPrice("");
                // setDescription("")
        })
        .catch(err=>{
            console.log(err.response.data.error.errors)
            console.log(err)
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
        <div >
            <button className="btn btn-danger mb-2" onClick={logoutUser}>Logout</button>
        <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary rounded-4 ">

        <h1 className='text-bg-info p-3 rounded-4'>ALLEZ ALLEZ!</h1>
        <h2 className='p-3 mb-2 bg-warning-subtle text-emphasis-warning rounded-4' >Share the routes as you share the road!</h2>
        <h3 className='text-bg-info p-3 rounded-4'>You are one ride away from happiness!</h3>
        <form onSubmit={handleSubmit} className='w-50 mx-auto'>
            <div>
                <label className="form-label">State:</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                value (what's typed into the input) to our updated state   */}
                <input className="form-control" type="text" name='state'  onChange={handleChange} />
                {
                    error.state ?
                    <p>{error.state.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label className="form-label">City:</label><br/>
                <input className="form-control" type="text" name='city' onChange={handleChange} />
                {
                    error.city ?
                    <p>{error.city.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label className="form-label">Starting line:</label><br/>
                <input className="form-control" type="text" name='start'  onChange={handleChange}/>
                {
                    error.start ?
                    <p>{error.start.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label className="form-label">Finish line:</label><br/>
                <input className="form-control" type="text" name='end'  onChange={handleChange}/>
                {
                    error.end ?
                    <p>{error.end.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label className="form-label">Route Rating:</label><br/>
                <input className="form-control" type="number" name='rating'  onChange={handleChange}/>
                {
                    error.rating ?
                    <p>{error.rating.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label className="form-label">Distance in miles:</label><br/>
                <input className="form-control" type="number" name='distance'  onChange={handleChange}/>
                {
                    error.distance ?
                    <p>{error.distance.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label className="form-label">Tips and suggestions:</label><br/>
                <input className="form-control" type="text" name='suggestions'  onChange={handleChange}/>
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
export default Form;
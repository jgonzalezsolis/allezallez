import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"
import axios from 'axios';
import {Link} from "react-router-dom"
//essentials
//lifting state, 
//forms, 
//needs state, 
//useEffect, 
//axios, 

const OneRoute = (props) => {
    const {id} =useParams();
    // console.log(id)
    const [route, setRoute] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/routes/${id}`,{withCredentials:true})
            .then(res=>{
                console.log(res)
                console.log(res.data)
                setRoute(res.data)
            })
            .catch(err=>{console.log(err)})
    }, [id]);

    const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/routes/${id}`,{withCredentials:true})
        .then(res =>{
            console.log(res)
            navigate("/allRoutes")
        })
        .catch(err => { console.log(err)
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
    <div>
        <div>
        <div className="backgrounddisplayone">
        <Link to={"/main"} className='btn btn-primary mt-2 me-1 mb-2'> Home </Link>
        <button className="btn btn-danger mt-2 ms-1 mb-2"  onClick={logoutUser}>Logout</button>
            <h1 className='text-white'>ALLEZ ALLEZ</h1>
            <h2 className='p-2 mb-1 text-white'>A place to share routes with other cyclist</h2>
            <h3 className='p-2 mb-1 text-white'>Don't run away from your problems cycling is much faster!</h3>
            <p>State: {route.state}</p>
            <p>City: {route.city}</p>
            <p>Starting Line: {route.start}</p>
            <p>Finish Line: {route.end}</p>
            <p>Route Rating: {route.rating}</p>
            <p>Distance: {route.distance}</p>
            <p>Tips/Suggestions: {route.suggestions}</p>
            <button onClick={handleDelete} className="btn btn-danger mt-2">Delete</button>
        </div>
        </div>
    </div>
    )
}

export default OneRoute
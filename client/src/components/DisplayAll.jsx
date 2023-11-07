import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom"
import styles from '../components/css/mainstyle.module.css'
//rafce to create a new blank component
//essentials
//lifting state, 
//forms, 
//needs state, 
//useEffect, 
//axios, 
const DisplayAll = () => {
    // const {removeFromDom, allProducts, setAllProducts} = props;

    const [allRoutes, setAllRoutes] = useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/routes", {withCredentials:true})
        .then((res)=>{
            console.log(res)
            setAllRoutes(res.data)
        })
        .catch((err)=>{console.log(err)});
        setAllRoutes([])
        // navigate('/')
    }, []);
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
    // const deleteProduct = (id) => {
    //     axios.delete(`http://localhost:8000/api/products/${id}`)
    //         .then(res => {
    //             removeFromDom(id)
    //         })
    //         .catch(err => console.log(err))
    // }
    
    return (
        <div className='backgrounddisplay'>
            <Link to={"/main"} className='btn btn-primary mt-2 me-1'> Home </Link>
            <button className="btn btn-danger mt-2 ms-1" onClick={logoutUser}>Logout</button>
            <div>
            <h1 className='text-white p-3 '>ALLEZ ALLEZ</h1>
            <h2 className=' text-white p-3 '>A place to share routes with other cyclist</h2>
            <blockquote className="blockquote text-white">
                <p >“The best rides are the ones where you bite off much more than you can chew, and live through it.”</p>
            </blockquote>
            <figcaption className="blockquote-footer text-white">
            Doug Bradbury 
            </figcaption>
                {
                    allRoutes.map((route)=>(
                        <div  className="backgroundcard  p-4 mb-3 w-50 mx-auto border border-primary  text-emphasis-info rounded-4 " key={route._id}>
                            <div  className='transbox'>
                                <h3 >{route.state}, {route.city}</h3>
                                <h3 >Starting at {route.start}</h3>
                            </div>
                            <div >
                            <Link to={`/routes/${route._id}`} className='displaylink'>See Details</Link>
                            {/* <button onClick={(e)=>{deleteProduct(product._id)}} className="delete-button">Delete</button> */}
                            </div>
                            <div >
                            <Link to={`/routes/edit/${route._id}`} className='displaylink'>Edit</Link>
                            </div>
                        </div>
                ))
            }
            </div>
        </div>
    )
    }


export default DisplayAll




import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom"
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
        <div  >
            <button className="btn btn-danger mt-2 mb-2" onClick={logoutUser}>Logout</button>
            <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary rounded-4 ">
            <h1 className='text-bg-info p-3 rounded-4'>ALLEZ ALLEZ</h1>
            <h2 className='p-3 mb-2 bg-warning-subtle text-emphasis-warning rounded-4'>A place to share routes with other cyclist</h2>
            <blockquote className="blockquote">
                <p>“The best rides are the ones where you bite off much more than you can chew, and live through it.”</p>
            </blockquote>
            <figcaption className="blockquote-footer">
            Doug Bradbury 
            </figcaption>
                {
                    allRoutes.map((route)=>(
                        <div  class="p-4 mb-3 border border-primary bg-info-subtle text-emphasis-info rounded-4" key={route._id}>
                            <div  >
                                <h3>{route.state}, {route.city}</h3>
                                <h3>Starting at {route.start}</h3>
                            </div>
                            <div>
                            <Link to={`/routes/${route._id}`} >See Details</Link>
                            {/* <button onClick={(e)=>{deleteProduct(product._id)}} className="delete-button">Delete</button> */}
                            </div>
                            <Link to={`/routes/edit/${route._id}`} >Edit</Link>
                            <div>

                            </div>
                        </div>
                ))
            }
            </div>
        </div>
    )
    }


export default DisplayAll




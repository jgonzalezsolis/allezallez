import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"
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
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/routes")
        .then((res)=>{
            console.log(res.data)
            setAllRoutes(res.data)
        })
        .catch((err)=>{console.log(err)})
    }, []);
    
    // const deleteProduct = (id) => {
    //     axios.delete(`http://localhost:8000/api/products/${id}`)
    //         .then(res => {
    //             removeFromDom(id)
    //         })
    //         .catch(err => console.log(err))
    // }
    
    return (
        <div>
            <h1>ALLEZ ALLEZ</h1>
            <h2>A place to share routes with other cyclist</h2>
            <h3>“The best rides are the ones where you bite off much more than you can chew, and live through it.” — Doug Bradbury</h3>
                {
                    allRoutes.map((route)=>(
                        <div key={route._id}>
                            <div>
                                <h3>{route.state}, {route.city}</h3>
                                <h3>{route.start}</h3>
                            </div>
                            <div>
                            <Link to={`/routes/${route._id}`}> Details</Link>
                            {/* <button onClick={(e)=>{deleteProduct(product._id)}} className="delete-button">Delete</button> */}
                            </div>
                            <Link to={`/routes/edit/${route._id}`} className="edit-link">Edit</Link>
                            <div>

                            </div>
                        </div>
                ))
                }
        </div>
    )
    }


export default DisplayAll




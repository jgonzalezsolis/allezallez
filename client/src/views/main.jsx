import React, { useEffect, useState } from 'react'
import Form from '../components/form'
import DisplayAll from '../components/DisplayAll'
import HomeNav from '../components/HomeNav';



const Main = (props) => {

    const [allRoutes, setAllRoutes] = useState([]);

    // const removeFromDom = productId => {
    //     setAllProducts(allProducts.filter(product => product._id != productId)); //We could also write this in our PersonList component
    // }

    return (
    <div>
        {/* <HomeNav /> */}
        {/* <Form allRoutes={allRoutes} setAllRoutes={setAllRoutes}/> */}
        <Form />
        {/* <DisplayAll allProducts={allProducts} setAllProducts={setAllProducts} /> */}
    </div>
    )
}

export default Main
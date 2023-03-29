import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../eachCarts/Cart';
import SideCart from '../sideCart/SideCart';
import './Merkat.css'


const Merkat = () => {

    const [carts, setCarts] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(products => setCarts(products))
    }, [])

    const handleCart = (props) => {
        const newProduct = [...products, props]
        setProducts(newProduct)
        carts.map(cart => addToDb(cart))

    }
    return (
        <div className='shopDesign'>
            <div className='cartDesign'>
                {
                    carts.map((cart) =>
                        <Cart key={cart.id} cart={cart}
                            handleCart={handleCart}
                        ></Cart>
                    )
                }
            </div>
            <div className='shopping'>
                <SideCart products={products}></SideCart>
            </div>

        </div>
    );
};


export default Merkat;
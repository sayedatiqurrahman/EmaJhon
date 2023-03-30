import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../eachCarts/Cart';
import SideCart from '../sideCart/SideCart';
import './Merkat.css';

const Meerkat = () => {

    const [carts, setCarts] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(products => setCarts(products))
    }, [])
    const allstoreCarts = [];
    useEffect(() => {
        const getCartsItem = getShoppingCart()
        console.log(getCartsItem)
        for (const id in getCartsItem) {
            const savedItem = carts.find(cart => cart.id === id)
            if (savedItem) {
                const quantity = getCartsItem[id];
                savedItem['quantity'] = quantity;
                allstoreCarts.push(savedItem)
            }
        }
        setProducts(allstoreCarts)
    }, [carts])
    const handleCart = (props) => {

        let newCart = [];
        const exist = products.find(product => product.id === props.id)
        if (!exist) {
            props.quantity = 1;
            newCart = [...products, props];
        } else {
            exist.quantity = exist.quantity + 1;
            const remaining = products.filter(product => product.id !== props.id)
            newCart = [...remaining, exist]

        }
        setProducts(newCart)
        addToDb(props.id)

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


export default Meerkat;
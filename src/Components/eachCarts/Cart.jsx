import './Cart.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
    const { img, id, name, seller, price, stock, rating } = props.cart;
    const handleCart = props.handleCart;
    return (
        <div className='cart'>
            <img src={img} alt="Image not availble" />
            <div className='cartInfo'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>Menufacturer: {seller}</p>
                <p>Ratings: {rating}</p>

            </div>
            <button onClick={() => handleCart(props.cart)}>
                Add to Cart
                <FontAwesomeIcon style={{ paddingLeft: '10px' }} icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Cart;
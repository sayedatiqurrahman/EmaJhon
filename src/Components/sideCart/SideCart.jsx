import React from 'react';
import './sideCart.css'
const SideCart = ({ products }) => {

    let total = 0;
    let shipping = 0;
    for (const product of products) {
        total += product.price
        shipping += product.shipping;
    }
    let tax = total * 7 / 100;
    let grandTotal = total + shipping + tax;
    return (
        <div className='sideCart'>
            <h2 style={{ textAlign: 'center' }}>Order Summery</h2>


            <p>Selected Items: {products.length} </p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: $ {shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default SideCart;
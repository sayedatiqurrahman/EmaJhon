import React from 'react';
import './sideCart.css'
const SideCart = ({ products }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of products) {
        // product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        shipping += product.shipping;
        quantity += product.quantity;
    }
    let tax = total * 7 / 100;
    let grandTotal = total + shipping + tax;
    return (
        <div className='sideCart'>
            <h2 style={{ textAlign: 'center' }}>Order Summery</h2>

            <p>Selected Items: {quantity} </p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: $ {shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default SideCart;
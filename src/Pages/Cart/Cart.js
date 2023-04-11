import React from 'react';

const Cart = (props) => {
    const cart=props.cart
    console.log(cart);
    return (
        <div>
            <h4>Total Ordered Items {cart.length}  </h4>
            
        </div>
    );
};

export default Cart;
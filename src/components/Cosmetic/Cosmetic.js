import React from 'react';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        console.log(id);
    }

    // const addToCartWithParameter = () => addToCart(id)

    return (
        <div className='product'>
            <h2>Buy This: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>It had id: {id}</small></p>
            {/* <button onClick={addToCartWithParameter}>Add to Cart</button> */}
            <button onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;
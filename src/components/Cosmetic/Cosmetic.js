import React from 'react';

const Cosmetic = (props) => {

    const {name, price, id} = props.cosmetic;

    return (
        <div>
            <h2>Welcome to our cosmetic house</h2>
            <h2>Buy This: {props.Cosmetic.name}</h2>
            <h3>By This: {name}</h3>
            <p>Only for: ${price}</p>
            <p>Result: {result} total: {sum}</p>
            <p>it has id: {id}</p>
            <button onClick={addToCartWithParam}>Add To Cart</button>
            <button onClick={ () => addToCart(id)}>Add To Cart: shortcut</button>
            
        </div>
    );
};

export default Cosmetic;


/* const first = 55;
    const second = 44; 
    const result = multiply(first, second);
    const sum = add(first, second);

    const addToCart = (id) => {
        console.log('item added', id)
    } */
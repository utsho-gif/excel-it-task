import React, { useState } from 'react';
import './Product.css';

const Product = () => {
    const [quantity, setQuantity] = useState(0);
    const handleInc = () => {
      const newQ = quantity + 1;
      localStorage.setItem('quantity', JSON.stringify(newQ))
      setQuantity(newQ);
    } 
    const handleDec = () => {
        const newD = quantity - 1;
        if(newD >= 0){
            localStorage.setItem('quantity', JSON.stringify(newD))
        }
        setQuantity(newD)
        
    }
    //add to local storage

    return (
        <div style={{marginTop:'100px'}}>
            <img className='card' src="https://i.ibb.co/ChYrm3X/dinner2.png" height={200} width={200} alt="" />
            <div>
            {localStorage.getItem('quantity')}
            </div>
            
            <div>
                <button onClick={handleDec}>-</button>
                <button>Quantity</button>
                <button onClick={handleInc}>+</button>
            </div>
        </div>
    );
};

export default Product;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = (props) => {
    const { name, img, seller, price, ratings } = props.pro;
   // const t=()=>props.fn(props.pro);
    return (
        <div className='pd'>
            <img src={img} alt="" />
            <div className='dl'>
                <p className='nm'>{name}</p>
                <p>Price: ${price}</p>

                <p> <small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} Star</small></p>
            </div>
            <button className='btn'>
                <p className='pl' onClick={()=>props.fn(props.pro)}>Add to card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
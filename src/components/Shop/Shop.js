import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,Setpd]=useState([]);
    const [cart,SetCd]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>Setpd(data));
    },[])

    const add=p=>{
        const b=[...cart,p];
        SetCd(b);
    }
    return (
        <div className='shop'>
            <div className='product'>
            {
                products.map(pdct => <Product fn={add} pro={pdct} key={pdct.id}></Product>)
            }
            </div>
            <div className='cart'>
                <p>Select Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;
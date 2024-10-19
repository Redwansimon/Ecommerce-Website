import React from 'react'
import './Bredcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

export const Bredcrum = (props) => {
    const {product}=props;
  return (
    <div className='bredcrum'>
        HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

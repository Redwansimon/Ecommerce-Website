// import React from 'react'
// import './item.css'

// export const Item = (props) => {
//   return (
//     <div className='item'>
//         <img src={props.image} alt="" />
//         <p>{props.name}</p>
//         <div className="item-prices">
//             <div className="item-price-new">
//                 {props.new_price}
//             </div>
//             <div className="item-price-old">
//                 {props.old_price}
//             </div>
//         </div>

//     </div>
//   )
// }
import React from 'react';
import './item.css'
export const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item" id={id}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>New Price: ${new_price}</p>
      <p>Old Price: ${old_price}</p>
    </div>
  );
};






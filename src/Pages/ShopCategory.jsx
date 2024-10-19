import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'

import { Item } from '../Components/Items/Item'; 



  const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category === item.category){
            return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}
export default ShopCategory;

// import React, { useContext } from 'react';
// import './css/ShopCategory.css';
// import { ShopContext } from '../Context/ShopContext';
// import dropdown_icon from '../Components/Assets/dropdown_icon.png';
// import { Item } from '../Components/Items/Item'; // Correctly importing the named export

// const ShopCategory = (props) => {
//   const { all_product } = useContext(ShopContext);

//   return (
//     <div className='shop-category'>
//       <img src={props.banner} alt="Shop Category Banner" />
//       <div className="shopcategory-indexsort">
//         <p>
//           <span>Showing 1-12</span> out of 36 products
//         </p>
//         <div className="shopcategory-sort">
//           Sort by <img src={dropdown_icon} alt="Dropdown Icon" />
//         </div>
//       </div>
//       <div className="shopcategory-products">
//         {all_product
//           .filter(item => props.category === item.category)
//           .map(item => (
//             <Item 
//               key={item.id} 
//               id={item.id} 
//               name={item.name} 
//               image={item.image} 
//               new_price={item.new_price} 
//               old_price={item.old_price} 
//             />
//           ))
//         }
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;

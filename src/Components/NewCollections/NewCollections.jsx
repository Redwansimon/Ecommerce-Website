import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'


import { Item } from '../Items/Item'
export const NewCollections = () => {
  return (
    <div className='newcollections'>
        <h1>NEW CIKKECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

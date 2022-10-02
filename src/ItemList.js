import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const ItemList = ({items,SetItems,handlecheck,handledelete}) => {
  return (
        <ul>
                {items.map((item)=>(
                    <li className='item' key = {item.id}>
                        <input type ="checkbox"
                        onChange={()=>handlecheck(item.id)}
                        checked={item.checked}/>

                        <label onDoubleClick={()=>handlecheck(item.id)} 
                        style={(item.checked)?{textDecoration:"line-through"}:null}> {item.item}</label>

                        <FaTrashAlt onClick={()=>handledelete(item.id)}
                        role="button" tabIndex="0"></FaTrashAlt>
                    </li>
                ))}
        </ul>
  )
}

export default ItemList
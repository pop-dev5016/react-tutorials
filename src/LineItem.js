import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const LineItem = ({item,handlecheck,handledelete}) => {
  return (
            <li className='item'>
            <input type ="checkbox"
            onChange={()=>handlecheck(item.id)}
            checked={item.checked}/>

            <label onDoubleClick={()=>handlecheck(item.id)} 
            style={(item.checked)?{textDecoration:"line-through"}:null}> {item.item}</label>

            <FaTrashAlt onClick={()=>handledelete(item.id)}
            role="button" tabIndex="0" aria-label={`Delete ${item.item}`}></FaTrashAlt>
        </li>
  )
}

export default LineItem

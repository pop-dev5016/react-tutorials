import React from 'react'
import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa";

const content = () => {
     const [items,setItems] = useState([
        {
            id:1,
            checked:false,
            item:"one half founf of bag of coco for with almound unsalted"
        },
        {
            id:2,
            checked:true,
            item:"item 2"
        },
        {
            id:3,
            checked:false,
            item:"item 3"
        }
     ]);

     const handleCheck = (id) =>{
          const listItems = item.map.item///che
          cons
          
     }
    
        return (
            <main>
                <ul>
                    {items.map((item)=>(
                        <li className='item' key={item.id}>
                           <input type="checkbox" 
                            onChange={()=>handleCheck(item.id)} checked={item.checked}/>
                           <label >{item.item}</label>
                           <FaTrashAlt role="button" tabIndex="0"/>
                          
                        </li>
                    ))}
                </ul>
            
            </main>
        )
  }

export default content
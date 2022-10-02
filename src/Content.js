import React,{ useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'



const Content = ({items,handlecheck,handledelete}) => {

    
     

        return (
            <main>
                {items.length?(
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
                ):(
                    <p style={{marginTop:"2rem"}}>oops...your list is empty</p>
                )
                }
            </main>
        )
  }

export default Content
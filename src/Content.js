import React,{ useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'



const Content = () => {

    const [items,SetItems] = useState([{id:5,checked:true,item:"one half powered coco paste is found man"},
    {id:6,checked:false,item:"Item 2"},
    {id:7,checked:false,item:"Item 3"}])

    const handlecheck = (id)=>{
        const listItems = items.map((item)=>item.id==id?{...item,checked:!item.checked}:item)
        SetItems(listItems);
        localStorage.setItem("shoppinglist",JSON.stringify(listItems));
    }

    const handledelete = (id)=>{
        const listItems= items.filter((item)=>item.id !== id);
        SetItems(listItems);
        localStorage.setItem("shoppinglist",JSON.stringify(listItems));
    }
     

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
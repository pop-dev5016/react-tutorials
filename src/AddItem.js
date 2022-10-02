import React,{ useRef }from 'react'
import { FaPlus } from 'react-icons/fa';

const AddItem = ({newitem,setNewItems,handlesubmit}) => {
  const inputRef = useRef();
  return (
     <form className='addForm' onSubmit={handlesubmit}>
      <label htmlFor='additem'>Add Item</label>
      <input 
        autoFocus
        ref={inputRef}
        id='additem'
        type="text"
        placeholder='Add Item'
        required
        value={newitem}
        onChange={(e)=>setNewItems(e.target.value)}
        />

        <button type='submit' aria-label='Add Item' onClick={()=>inputRef.current.focus()} ><FaPlus/></button>
         


     </form>
  )
}

export default AddItem

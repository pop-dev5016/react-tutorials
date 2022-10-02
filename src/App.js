import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import React,{ useState } from 'react';



function App() {
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
    <div className="App">
     <Header  title={"Grocery List"}/> 
     <Content items={items}  handlecheck={handlecheck} handledelete={handledelete}/>
     <Footer length={items.length}/>   
    </div>
  );
}



export default App

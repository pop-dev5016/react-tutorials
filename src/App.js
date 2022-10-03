import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import React,{ useState, useEffect} from 'react';
import AddItem from './AddItem';
import SearchItems from './SearchItems';



function App() {
  const API_URL = "http://localhost:3500/itemss"
  
  const [items,SetItems] = useState([]);
  const [newitem,setNewItems] = useState('');
  const [search,setSearch] = useState("");
  const [fetcherror,setFetcherror] = useState(null)

   useEffect(()=>{

      const fetchItems = async ()=>{
        try {
          const response = await fetch (API_URL)
          if (!response.ok) throw Error("did not recieve expected output")
          const listItems = await response.json()
          console.log(listItems);///check output it came
          SetItems(listItems)
          setFetcherror(null)
        }catch(err){
          setFetcherror(err.message)

        }
      }
       (async()=>await fetchItems())();
    },[])

  
   const additem =(item)=>{
            const id = items.length ? items[items.length-1].id +1:1;
            const mynewitem = {id,checked:false,item}
            const listItems = [...items,mynewitem];
            SetItems(listItems)       
   }

    const handlecheck = (id)=>{
        const listItems = items.map((item)=>item.id==id?{...item,checked:!item.checked}:item)
        SetItems(listItems)
    }

    const handledelete = (id)=>{
        const listItems= items.filter((item)=>item.id !== id);
        SetItems(listItems)
    }
     
    const handlesubmit = (e)=>{
      e.preventDefault()
      if(!newitem) return;
      //additem
      additem(newitem)
      setNewItems("")
      
    }

  return (
    <div className="App">
     <Header  title={"Grocery List"}/> 
     <AddItem 
     newitem={newitem} setNewItems={setNewItems} handlesubmit={handlesubmit}></AddItem>
     <SearchItems search={search} setSearch={setSearch}></SearchItems>
     <Content items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))} handlecheck={handlecheck} handledelete={handledelete}/>
     <Footer length={items.length}/>   
    
    </div>
  );
}



export default App

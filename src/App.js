import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import React,{ useState, useEffect} from 'react';
import AddItem from './AddItem';
import SearchItems from './SearchItems';
import apiRequest from './apiRequest';



function App() {
  const API_URL = "http://localhost:3500/items"
  
  const [items,SetItems] = useState([]);
  const [newitem,setNewItems] = useState('');
  const [search,setSearch] = useState("");
  const [fetcherror,setFetcherror] = useState(null)
  const [isloading,setIsLoading] = useState(true)

   useEffect(()=>{
      const fetchItems = async ()=>{
        try {
          const response = await fetch (API_URL)
          if (!response.ok) throw Error("did not recieve expected data")
          const listItems = await response.json()
          console.log(listItems);///check output it came
          SetItems(listItems)
          setFetcherror(null)
        }catch(err){
          setFetcherror(err.message)
        }finally{
          setIsLoading(false)
        }
      }
      setTimeout(()=>{
        (async()=>await fetchItems())();
      },2000)
      
    },[])

  
   const additem =async (item)=>{
            const id = items.length ? items[items.length-1].id +1:1;
            const mynewitem = {id,checked:false,item}
            const listItems = [...items,mynewitem];
            SetItems(listItems) 
            
            const postOptions = {
              method: 'POST',
              headers: {
                'Content-type':'application/json'
              },
              body:JSON.stringify(mynewitem)
            }
            const result = await apiRequest(API_URL,postOptions)
            if(result) setFetcherror(result)
   }

    const handlecheck = async (id)=>{
        const listItems = items.map((item)=>item.id==id?{...item,checked:!item.checked}:item)
        SetItems(listItems);

        const myItem = listItems.filter(item =>item.id === id)
        const updateOption ={
          method:'PATCH',
          headers:{
            'content-Type':"application/json"
          },
          body:JSON.stringify({ checked:myItem[0].checked})
        };
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl,updateOption)
        if(result)setFetcherror(result);





    }

    const handledelete = async (id)=>{
        const listItems= items.filter((item)=>item.id !== id);
        SetItems(listItems)

        const deleteOption ={
          method:'DELETE'};
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl,deleteOption)
        if(result)setFetcherror(result);

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


     <main>
      {isloading && <p>loading items...</p>}

      {fetcherror && <p style={{color:"red"}}>{`Error:${fetcherror}`}</p>}

      {!fetcherror && !isloading &&<Content items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))} handlecheck={handlecheck} handledelete={handledelete}/>}
     </main>




     <Footer length={items.length}/>   
    
    </div>
  );
}



export default App

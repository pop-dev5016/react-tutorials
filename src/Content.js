import React from 'react'
import { useState } from "react"

const content = () => {
     const [name,setName] = useState('Pop');
     const [count,setCount]= useState(0);

     let name1 = "pavitharan"
     let name2 = "vigneshwaran"
     let name3 = "navanandhini"
    const altername = function(){
        const names = [name1,name2,name3]
        const int  = Math.floor(Math.random()*3)
        setName(names[int]);
      }

      const handleClicked1 = () => {
          setCount(count + 1)
          setCount(count + 1)
          console.log(count)
      }
      const handleClicked2 = () => {
          console.log(count);
      }

  return (
    <main>
        <p onDoubleClick={handleClicked1}>
            hello {name}!
        </p>
        <button onClick={altername}>change name </button>
        <br />
        <button onClick={handleClicked1}>clicked me </button>
        <br />
        <button onClick={handleClicked2}>clicked me </button>
    </main>
  )
}

export default content
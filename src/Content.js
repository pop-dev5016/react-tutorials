import React from 'react'

const content = () => {
     let name1 = "pavitharan"
     let name2 = "vigneshwaran"
     let name3 = "navanandhini"
    const altername = function(){
        const name = [name1,name2,name3]
        const int  = Math.floor(Math.random()*3)
        return name[int];
      }

      const handleClicked1 = () => {
          alert("you are clicked man");
      }
      const handleClicked2 = (name) => {
          alert(`${name} was clicked passing parameter`);
      }
      const handleClicked3 = (e) => {
          console.log(e.target.innerText);
      }

  return (
    <main>
        <p onDoubleClick={handleClicked1}>
            hello {altername()}!
        </p><br />
        <button onClick={handleClicked1}>clicked me </button>
        <br />
        <button onClick={(name)=>handleClicked2("pavithran")}>clicked me </button>
        <br />
        <button onClick={(e)=>handleClicked3(e)}>clicked me </button>
    </main>
  )
}

export default content
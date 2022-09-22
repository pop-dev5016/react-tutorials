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

  return (
    <main>
        <p>
            hello {altername()}!
        </p>
    </main>
  )
}

export default content
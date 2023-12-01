"use client"

import { useState , useEffect } from "react"
export default function page(){
  const [product , setproduct] = useState([])

  async function fun() {
    let mydata = await fetch("http://localhost:1337/api/woodens")
    mydata= await mydata.json()
    setproduct(mydata.data)
    console.log(mydata)
  }
  useEffect(()=>{
   fun()

  },[])

  return(<div>
    product list 
  {
    <div>
      {product.map((item) => (
        <h3 key={item.id}>{item.attributes.Name}</h3>
      ))}
     </div>
  }
 
  </div>
  )
}
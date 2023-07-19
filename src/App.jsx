import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomButton from './components/CustomButton'

function App() {

const [getImage , setGetImage]= useState(0);
const [fetchData, setFetchData]= useState([])
const [anIndex , setIndex]= useState(0);

 
function upDating(){

  fetch('https://dummyjson.com/products/1')
  .then((response)=>{
  return response.json()
  })
  .then((data)=>{
    setFetchData(data)
    console.log(data)
  })
  
}

useEffect(()=>{
  upDating()
},[])

 

  function nextWord(){
    setIndex((prev)=>prev + 1);
  }
  function prevWord(){
    setIndex(()=> -1);
  }



 
  return (
<>
<button type="button">prev</button>


<div className="firstName">
<h1>{getImage.title}</h1>
{/* <img src={getImage.image[0]} alt="" />
<p> {getImage.price}</p> */}
<p> {getImage.description}</p>
</div>

<button type="button">next</button>
      </>
  )

}

export default App

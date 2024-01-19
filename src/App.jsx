import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import {Your_API,Your_API_URL} from './Components/Key'
import Recipe from './Components/Recipe'
import Details from './Components/Details'

function App() {
  const [count, setCount] = useState('')
  const [selectedValue,setselectedValue]=useState('')
  const [info,setInfo]=useState('vegan')
  const [selectedData,setSelectedData]=useState('')
  const handelselected=(data)=>{
    setSelectedData(data)
    
    
  }

  return (
    <> 
        <div className="icon-img">
        <h1> FOOD RECIPE</h1>
        <div>
        <img src='./public/icon.png' className='icon'/>
        </div>
        </div>
        <Recipe count={count} setCount={setCount}
        selectedValue={selectedValue} setselectedValue={setselectedValue}
        info={info} setInfo={setInfo}
        onselectdata={handelselected}
        
        />
        <Details selectedData={selectedData}/>
    </>
  )
}

export default App


// add dishes type desert in the link  
// css properties
//fetch data 
// alignment 
//images from the url 
// check the url 
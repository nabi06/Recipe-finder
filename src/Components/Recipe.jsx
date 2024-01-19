import React, { useState } from 'react';
import { Your_API,Your_API_URL } from './Key';
import axios from 'axios';
function Recipe({count,setCount,info,setInfo,onselectdata,val,setVal}){
    const handlechange=(event)=>{
        setCount(event.target.value)
        }
    const selectedchange=(event)=>{
            setCount(event.target.value)
            }
    
    const handleSubmit=(event) => {
            setCount('')
            search()
        }
    
    async function search(){
        console.log("cou",count)
        let link=(`https://api.edamam.com/search?q=${count}&app_id=${Your_API}&app_key=${Your_API_URL}&&health=${info}`)
       const response= await axios.get(link)
       console.log("Respone",response)
       onselectdata(response.data.hits)
       console.log(response.data)

    
      
    }
    

    return(
    <>
        <div className="cont">
            <div className="left-cont">
                <input type="text" className="ingredient" placeholder='enter your ingredients' value={count}
                onChange={handlechange}
                />
            </div>
            <div className="center">
            <select name="cars" id="cars"  >
                    <option value="Lunch" onClick={()=>setInfo('vegan')}>Vegan</option>
                    <option value="Dinner" onClick={()=>setInfo('vegetarian')}>vegetarian</option>
                    <option value="low" onClick={()=>setInfo('paleo')}>paleo</option>
                    <option value="Deserts " onClick={()=>setInfo('dairy-free')}>dairy-free</option>
                    <option value="Deserts " onClick={()=>setInfo('glutan-free')}>glutan-free</option>
                    <option value="Deserts " onClick={()=>setInfo('wheat-free')}>wheat-free</option>
                    <option value="Deserts " onClick={()=>setInfo('egg-free')}>egg-free</option>
                    <option value="Deserts " onClick={()=>setInfo('low-sugar')}>low-sugar</option>
                    <option value="Deserts " onClick={()=>setInfo('peanut-free')}>peanut-free</option>
                    <option value="Deserts " onClick={()=>setInfo('tree-nut-free')}>tree-nut-free</option>
                    <option value="Deserts " onClick={()=>setInfo('soy-free')}>soy-free</option>
                    <option value="Deserts " onClick={()=>setInfo('fish-free')}>fish-free</option>
                    <option value="Deserts " onClick={()=>setInfo('shellfish-free')}>shellfish-free</option>
                </select>
            </div>
            <div className="right-cont">
                <button className=" submit" onClick={(event)=>handleSubmit(event)}>GET RECIPE</button>
            </div>
        </div>
    </>
    )
}
export default Recipe


//react memo 
// use call back 
//react state update state study events 
// only 9 item sfor it 
// url change 
// meal type
//select tag update 
import Recipe from "./Recipe"
import { useState } from "react"
import Box from "./Box"

function Details({selectedData}){
    const [modal,setModal]=useState()
    const[itemData,setItemData]=useState(null)
    const handleclick=(item)=>{
        setItemData(item)
        setModal(!modal)
    }
    if (!selectedData){
        return
    }
    const handleclose=()=>{
        setModal(!modal)
    }
    return(
        <>
        <section className={modal ? "card blurred": "card"}>
        <div className="cards">

            {selectedData.map((item)=>(
                <div className="details" onClick={()=>handleclick(item)} key={item.id}>
                    <div className="details-cont">
                        <div className="details-img">
                        <img src={item.recipe.image} className="images"  />
                        </div>
                        <div className="detail-data">
                            <h2>{item.recipe.label}</h2>
                            <p>{item.recipe.cuisineType}</p>
                            <p>{item.recipe.dishType}</p>
                        </div>
                    </div>
                    
                </div>

            
        ))}
        </div>
        </section>
        {modal && <Box
        itemData={itemData}
        onclose={handleclose}
        />}
        </>
    )
}
export default Details

//grid 3 
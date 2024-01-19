function Box ({itemData,onclose}){
    console.log("box",itemData)
    return(
        <>
        <section className="box-cont">
            <div  className="box-data">
                {
                    <div className="box-item">
                        <div className="box-image">
                        <img src={itemData.recipe.image} className="images"  />
                        </div>
                        <div className="box-item-data">
                            <h3>{itemData.recipe.label}</h3>
                            <h4>{itemData.recipe.mealType}</h4>
                            {itemData.recipe.ingredientLines.map((item)=>(
                                <p>{item}</p>
                            ))}
                        </div>
                        <div className="box-process">
                            
                        </div>
                    </div>
                    
                }
                <button type="button"  onClick={onclose}> X </button>
            </div>
        </section>
        </>
    )
}

export default Box

//map data ingredients
// at 45 taking values from select opiton 
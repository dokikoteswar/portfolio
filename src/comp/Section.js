import React from "react";



const Section =({title, description})=>{
    return(
        <div className="section-css">
        <hr/>
        <h3 >{title}</h3>
        <p>{description}</p>

        </div>
    )
}

export default Section;
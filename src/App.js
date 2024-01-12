import React from "react";
import Hedar from "./comp/Hedar";
import About from "./comp/About";
import Section from "./comp/Section"
import data from "./data/sectionData"
import "./style.css"

const App =()=>{
    return(
       <div>
        <Hedar />
       <About />
       {
        data.map((item,i)=>(
            <Section key={i} title={item.title} description={item.description}/>
        ))
       }
       </div>
       
    )
}

export default App;
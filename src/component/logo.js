import React from "react";
import Tilt from 'react-parallax-tilt';
import sun from "./cloudy.png"
const Logo =()=>{
    return(
        
            <Tilt>
<div style={{ height: '150px' , backgroundColor:'white'}}>
  <img src={sun} height={100}  alt="no image"/>
  weather app
</div>
</Tilt>
        
    )
}
export default Logo ;
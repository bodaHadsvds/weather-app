import React  from "react";

const Form =(props)=> {
    
        return(
            <div className="wrapper">
                <div className="form-container">
            <form onSubmit={props.getweather}>
              <input type="text"  name= "City"placeholder="City.."/>
              <input type="text" name="Country" placeholder="Country"/>
              <button> Get Weather</button>
            </form>
            </div>
            </div>
        )
    
}

export default Form ;
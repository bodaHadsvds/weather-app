
import React,{Component} from "react";
import Weather from "./component/weather"
import Form from "./component/Form"
import Logo from "./component/logo"

import { Parallax, Background } from 'react-parallax';


const Api_key = 'e36ed364400282e43250b6c4c0274d44';
// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component {

  
  state ={
      tempreature:"",
      city: "",
      country: "",
      humidity: "",
      descriptions:"",
      error:""
  }



  getweather = async(e)=>{
    e.preventDefault()
    const City = e.target.elements.City.value
    const Country = e.target.elements.Country.value
    const api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City}%2C${Country}&appid=e36ed364400282e43250b6c4c0274d44`)
    const data = await api.json()
if(City&& Country){
 return this.setState({
 
      tempreature: data.main.temp,
      city: data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      descriptions: data.weather[0].description,
      error:""
    
  
}) 
}else{
  this.setState({

  tempreature: '',
  city: '',
  country:'',
  humidity:'',
  descriptions: '',
  error:"please Enter data"


}) 
 
}
   
  
}
  render(){
    return (
      <div className="wrapper">
      <div className="form container">
        
     <Logo/>
    <Form getweather={this.getweather}
/>
    <Weather    
    tempreature={this.state.tempreature}
    city={this.state.city}
    country={this.state.country}
    humidity={this.state.humidity}
    descriptions={this.state.descriptions}
    error={this.state.error}/>
      </div>
      </div>
    );
  }

 
}

export default App;

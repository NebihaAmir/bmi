import React, { Component } from 'react'
import Item from './item'
import './tailwind.css'
class Numbers extends Component {
 
    constructor(props) {
        super(props)    
        this.state = {         
            answer: 0,
            value: "HI",
            message: " "           

        }
    }

  handleChangeone=(event)=>{
        this.setState({
            weight: event.target.value
        })
  }  
  handleChangetwo=(event)=>{
    this.setState({
        height: event.target.value
    })
}


 handeleRange=()=>{
     if(this.state.answer < 18){
         this.setState({
             message: "you are under weight"
         })

     }
    //  if (this.state.answer >= 18 && this.state.answer <= 25) {
    //      this.setState({
    //         message: "you are Normal"
    //      })
    //  }
    //  if (this.state.answer >26 && this.state.answer <=40) {
    //     this.setState({
    //        message: "you are over weight"
    //     })
    // }
    else
    {
        this.setState({
            message: "you are obess"
         })
    }
 }

 calculateBmi=(event)=>{
  
    let height = this.state.height
    let weight = this.state.weight
    let sum =  weight / (height * height)
    event.preventDefault();
    
    this.setState({
        answer: sum
    })
    
  
  
};
    render() {

        return (

            <div className="w-full md:w-1/2  max-w-xs mx-128 ">
                <form className="w-128 bg-purple-600 shadow-md rounded px-4 pt-6 pb-8 mb-4 my-16" >
                <Item header = "Calculate My BMI"/>
                <div className=" mt-8">
                <label className="block text-white text-sm font-bold mb-2" for="username"> weight in KG
                <input className="mt-2 shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text"
                value = {this.state.weight} onChange={this.handleChangeone} />
                </label> <br/>
                <label className="block text-white text-sm font-bold mb-2" for="password">
                 Height
                 <input className = "mt-2 shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text" step="0.01" value = {this.state.height} onChange={this.handleChangetwo} />
                </label>                                           
                <button onClick = {this.calculateBmi}
                  className="bg-black hover:bg-black text-white font-bold py-2 mt-4 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Calculate BMI
                 </button>

               <h4 className = "text-white mt-2">Height {this.state.height}</h4>
               <h4 className = "text-white mt-2">Weight {this.state.weight}</h4>
               <h2 className = "text-white mt-2"> You BMI is :  {this.state.answer}</h2>   
              
                <h3> {this.handeleRange}</h3>
                </div>
                

               
               </form>
              
            </div>
        )
    }
}

export default Numbers

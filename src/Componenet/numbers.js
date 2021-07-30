import React, { Component } from 'react'

class Numbers extends Component {
 
    constructor(props) {
        super(props)    
        this.state = {         
            answer: 0,
            value: "HI"

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
    calculateBmi=(event)=>{
        let height = this.state.height
        let weight = this.state.weight
        let sum =  weight / (height * height)
        event.preventDefault();
        this.setState({
            answer: sum
        })
      
  }  
    render() {
       
        return (

            <div>
                <form onSubmit = {this.calculateBmi}>
                <label > weight in KG
                <input type="number" value = {this.state.weight} onChange={this.handleChangeone} />
                </label> <br/>
                <label> Height
                <input type="number" step="0.01" value = {this.state.height} onChange={this.handleChangetwo} />
                </label>               
               
               <button>OK</button>
               <h4>Height {this.state.height}</h4>
               <h4>Weight {this.state.weight}</h4>
               <h2>{this.state.answer}</h2>
              
               </form>
            </div>
        )
    }
}

export default Numbers

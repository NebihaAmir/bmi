import React, { Component } from 'react'
import Numbers from './Componenet/numbers'
export class Calculator extends Component {
    render() {
        return (
            <div>
                <Numbers title = "Simple BMI Calculator" />
            </div>
        )
    }
}

export default Calculator

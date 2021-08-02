import React, { Component } from 'react'
import './tailwind.css'

class Item extends Component {
    render() {
        return (
            <div>
              <h1 className="text-white"> {this.props.header}</h1>
            </div>
        )
    }
}

export default Item

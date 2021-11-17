import React, { Component } from 'react'


export class Button1 extends Component {
    constructor(){
      super()
      this.clickLogOne = this.clickLogOne.bind(this)
      this.state = {clickCountBtn1: 0}
    }
clickLogOne() {
  this.setState(({clickCountBtn1}) => ({ 
    clickCountBtn1: clickCountBtn1 + 1}), () => {console.log(`Button 1 color: ${this.isEvenChangeColor(this.state.clickCountBtn1)}`);})
}
      isEvenChangeColor(num) {
        if(num === 0) {
          return 'white'
        } return num % 2 === 0 ? 'green' : 'white'
      }
    render() {
        return (
        <button onClick={this.clickLogOne}
        style={{backgroundColor: this.isEvenChangeColor
        (this.state.clickCountBtn1)}}>1 Button | {this.state.clickCountBtn1} clicks</button>
        )
    }
}

export default Button1

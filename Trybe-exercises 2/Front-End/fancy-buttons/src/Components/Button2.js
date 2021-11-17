import React, { Component } from 'react'


export class Button2 extends Component {
    constructor() {
      super()
      this.clickLogTwo = this.clickLogTwo.bind(this)
      this.state ={ clickCountBtn2: 0}
    }

  clickLogTwo(){
    this.setState(({clickCountBtn2}) => ({
      clickCountBtn2: clickCountBtn2 + 1}), () => {console.log(`Button 2 color: ${this.isEvenChangeColor(this.state.clickCountBtn2)}`);
  })}

  isEvenChangeColor(num) {
        if(num === 0) {
          return 'white'
        } return num % 2 === 0 ? 'green' : 'white'
      }
  render() {
    return (
      <button onClick={this.clickLogTwo}
      style={{backgroundColor: this.isEvenChangeColor(this.state.clickCountBtn2)}}>2 Button | {this.state.clickCountBtn2} clicks</button>
    )
    }
}

export default Button2

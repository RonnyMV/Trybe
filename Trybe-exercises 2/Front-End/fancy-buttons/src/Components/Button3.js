import React, { Component } from 'react';

class Button3 extends Component {
  constructor() {
    super()
    this.clickLogOn= this.clickLogOn.bind(this)
    this.state = { clickCountBtn3: 0}
  }

  clickLogOn(){
  this.setState(({clickCountBtn3}) => ({clickCountBtn3: clickCountBtn3 + 1}),
  () => { console.log(`Button 3 color: ${this.isEvenChangeColor(this.state.clickCountBtn3)}`)})
      
  }
  isEvenChangeColor(num) {
    if(num === 0) { 
      return 'white'
    }
    return num % 2 === 0 ? 'green' : 'white'
  }

  render() {
    return (
      <button onClick={this.clickLogOn} 
      style={{backgroundColor: this.isEvenChangeColor(this.state.clickCountBtn3)}}>3 Button | {this.state.clickCountBtn3} clicks</button>
    )
  }
}

export default Button3






















// import React, { Component } from 'react'

// export class Button3 extends Component {
//     constructor() {
//     super()
//     this.clickLogTree = this.clickLogTree(this)
//     }
//   clickLogTree() 
//   {
//     return console.log('Clicou no botão 3')
//   }
//     render() {
//       return (
//         <button onClick={this.clickLogTree}>My BUTTON 3</button>
//         )
//     }
// }

// export default Button3

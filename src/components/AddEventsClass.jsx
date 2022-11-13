import React, { Component } from 'react'

class AddEventsClass extends Component {

    clickHandler(a){
        alert('button clicked')
    }

  render() {
    return (
      <>
        {/* <button onClick={this.clickHandler}> click me </button> */}
        <button onClick={()=> this.clickHandler }>Click me</button>
      </>
    )
  } 
}

export default AddEventsClass
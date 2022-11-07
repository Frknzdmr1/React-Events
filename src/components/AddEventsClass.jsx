import React, { Component } from 'react'

class AddEventsClass extends Component {

    clickHandler(){
        alert('button clicked')
    }

  render() {
    return (
      <>
        <button onClick={this.clickHandler}> click me </button>
      </>
    )
  }
}

export default AddEventsClass
import React, { Component } from 'react'

class EventBinding extends Component {

    state = {message: 'Hello World'}

    clickHandler() {
        this.setState({message: 'Bye World'})
    }

  render() {
    return (
      <>
       <h1> {this.state.message}</h1>
       <button onClick ={this.clickHandler }>Click me</button>
      </>
    )
  }
}

export default EventBinding
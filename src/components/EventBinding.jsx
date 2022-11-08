import React, { Component } from 'react'

class EventBinding extends Component {


  // updating the message with state method

  constructor(props) {
    super(props);
    this.state = {message: "Nasilsin"}
    this.clickHandler = this.clickHandler.bind(this);
  }

    // state = {message: 'Nasilsin ?'}

    clickHandler() {
        this.setState({message: 'Sanane doktormusun aq'})
    }

  render() {
    return (
      <>
       <h1> {this.state.message}</h1>
       {/* <button onClick ={this.clickHandler.bind(this)}> Merakini gider </button> */}
       {/* <button onClick ={() => this.clickHandler('Sanabe doktormusun') }> Merakini gider </button> */}
       <button onClick ={ this.clickHandler }> Merakini gider </button>
      </>
    )
  }
}

export default EventBinding
import React, { useState } from 'react'


const EventFunction = () => {

    const [clickCounter, setClickCounter] = useState(0);
    const [rightClickCounter, setRightclickCounter] = useState(0)
    const [title, setTitle] = useState('Hello World')


    const clickHandler = () => {
        // alert('Clicked')

        setClickCounter(clickCounter+1)
     }
 
    const rightClickHandler = (e, name) =>{
        e.preventDefault();
        // alert('Right Clicked')
        setRightclickCounter(rightClickCounter+1);
    }

    const changeTitleHandler =() => {
        setTitle('New Title')
    } 


  return (
<div>
    <h3> Clicked : {clickCounter} times </h3>
    <h3> Right Clicked : {rightClickCounter} times </h3>
    <button onClick = { clickHandler } onContextMenu={ rightClickHandler }>
        Try Me
    </button>

    <hr />

    <h1> {title } </h1>
    <button onClick={ changeTitleHandler }>Change Title</button>

</div>
    
  )
}

export default EventFunction;
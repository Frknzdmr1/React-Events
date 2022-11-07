const AddEvents = () => {

  function clickHandler() {
    alert('Button Clicked!')
  }

  const submitHandler = (e) => {
    e.preventDefault(e)
    alert('Form submitted')
  }

  return (
    <>
       <h1>AddEvents</h1>

        <form onSubmit= { submitHandler }>
          <input type="text" />
          <button>Submit</button>
        </form>

       <button onClick= { clickHandler}> Click Me</button>
    </>

    )
  }

export default AddEvents;
import React, { useState }  from 'react'

const Forms = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const userNameHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }


    const clearForm =() => {
        setPassword('');
        setUsername('');
    }

    const dropdownHandler = (e) => {
        console.log(e)
        alert('new Selection')
    }

  return (
    <form>
        <h3>Login</h3>
        <input type="text" 
        name='username' 
        className='form-control' 
        placeholder='Username' 
        onChange={userNameHandler}
        value={username}
        />


        <input type="password" 
        name='password'  
        className='form-control' 
        placeholder='Password'
        onChange={passwordHandler}
        value={password}

        />

        <select name="type" onChange={dropdownHandler}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select>

        <button className='btn'> Login</button>
        <button className='btn' onClick={ clearForm } type="button"> Clear</button>
    </form>
  )
}

export default Forms
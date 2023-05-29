import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './redux/reducers/userReducer';

function App() {

  const userInput = useSelector(state => state.userReducer);
  const dispatch = useDispatch()

  console.log("UserInput = ",userInput);

  const handleInput = (e) =>{
    const { name , value } = e.target;
    dispatch(addUser({name , value}))
  }

  return (
    <div className="App">
      <h1>User</h1>
      <input 
        type='text'
        name='name'
        value={userInput.name}
        onChange={handleInput}
      />
      <input         
        type='text'
        name='age'
        value={userInput.age}
        onChange={handleInput}
      />
    </div>
  );
}

export default App;

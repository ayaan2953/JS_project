import { useState } from 'react'
import './App.css'

function App() {
  
  //let counter = 10 ;

  let [counter, setCounter] = useState(0)

  const add = () => {
    counter = counter + 1 ;
    console.log(counter);
    setCounter(counter);
  }

  const remove = () => {
    counter = counter - 1;
    setCounter(counter);
    console.log(counter);
  }

  return (
    <>
      <div>
        <h1>Counter: {counter} </h1>
        <button onClick={add} >Increase Value {counter}</button><br/>
        <button onClick={remove} >Decrease Value {counter}</button>

      </div>
    </>
  )
}

export default App

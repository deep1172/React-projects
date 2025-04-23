import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15;

  const addValue =() =>{
    if (counter >=20) {
      return
    }else{
    counter = counter +1;
    setCounter(counter);
    console.log('clicked', counter)
  }
}
  const removeValue =() =>{
    if (counter<=0) {
      return ;
    }else{
    counter = counter -1;
    setCounter(counter);
    console.log('clicked', counter)
  }
}
  return (
    <>
      <h1>Counter React app</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App

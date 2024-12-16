import { useState } from 'react'  // Hook - UseState : needed for UI updation
import './App.css'
// UI is in controll of React, can't update UI by just updating var value
function App() {
  let [count, setCount] = useState(6) //made a variable count=6 and func setCount which will update value of count by getting new val in it

  //let count = 15
  const AddVal = () => {
  // count = count +1 //will inc the value of variable count but not update Count Val in UI
    setCount(count+1) // used useState Hook : will inc the value of variable count and update Count Val in UI
  }
  const DecVal = () => {
    if(count > 0){
      setCount(count-1)
    }
    
  }
  return (
    <>
     <h1> Ahsan is here </h1>
     <h2>Counter : {count}</h2>

     <button onClick={AddVal}>Inc Val</button>
     <button onClick={DecVal}>Dec Val</button>
    </>
  )
}

export default App

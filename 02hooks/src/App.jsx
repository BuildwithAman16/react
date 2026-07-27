import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

let addvalue=function addvalue()
{
  if (counter<20) {
    setCounter(prevCounter=>prevCounter+1)
     setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
  }

}

let removeValue=function removeValue() {
   if(counter!=0)
   {
      setCounter(prevCounter=>prevCounter-1)
      setCounter(prevCounter=>prevCounter-1)

   }
}


  return (
    <>
     <h1>Chai Aur code  {counter} </h1>
     <button onClick={addvalue}
     >Add Value {counter} </button>
     <button onClick={removeValue}>remove Value {counter} </button>
     <p>Footer:{counter}</p>

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from '/components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-300 text-black text-2xl max-w-2xs rounded-2xl ' > Tailwind test</h1>
     <Card title="Modern Design Problem"/>
     <Card  />
     <Card title="Modern Solulu" />
    </>
  )
}

export default App

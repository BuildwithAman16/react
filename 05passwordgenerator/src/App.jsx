import { useCallback, useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setLength] = useState(2)
  const [numbers,setNumbers]=useState(false)
  const [characters,setcharacters]=useState(false)
  const [Password,setPassword]=useState("")

  const passwordRef = useRef(null)


  const passwordGenerator=useCallback(()=>{
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let pass=""

    if (numbers) str+="1023456789"
    if (characters) str+="!@#$%^&*(_)"
    for (let i = 0; i < length; i++) {
      let passw=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(passw)

    }
    setPassword(pass)
  },[numbers,characters,length])
useEffect(()=>{
  passwordGenerator()

},[numbers,characters,length,passwordGenerator])
 const copyToClipboard=useCallback(()=>{
passwordRef.current?.select();
passwordRef.current?.setSelectionRange(0,50);
    window.navigator.clipboard.writeText(Password)

},[Password])
  return (
    <>
    <div className='w-full h-screen bg-black fixed' >
      <div className='w-100 h-40 mx-auto bg-gray-500 rounded-4xl'>
      <h1 className='text-3xl font-bold text-blue-500 text-center mt-5 rounded-4xl ' >Password generator</h1>
      <div className='flex'>
      <input type="text" value={Password} placeholder='password'ref={passwordRef} readOnly className='bg-white  my-6 rounded-l-full outline-none px-2 py-2 w-80'/>
      <button className='bg-blue-500 h-fit my-6 rounded-r-full  px-2 py-2'onClick={copyToClipboard} >copy</button>
      </div>
      <div className='flex gap-2'>
        <input type="range" max={50} min={2} value={length} onChange={(e)=>setLength(e.target.value)} className='w-15 accent-yellow-500 mx-4 ' />
        <label className=' font-bold'>length:{length}</label>
        <input type="checkbox" value={numbers} onChange={()=>setNumbers((prev)=>!prev)} />
        <label  className=' font-bold' >Numbers</label>
        <input type="checkbox" value={characters} onChange={()=>setcharacters((prev)=>!prev)} />

        <label  className=' font-bold'>characters</label>

      </div>
</div>
     </div>
    </>
  )
}

export default App

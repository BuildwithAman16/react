import { useState } from 'react'


function App() {
  const [color, setColor] = useState()

  return (
    <>
    <div className='w-full h-screen  fixed ' style={{backgroundColor:color}}>
      <div className='bg-gray-600 w-fit h-fit flex flex-wrap gap-6 p-3 mt-80 m-5  rounded-3xl'>
      <button className='bg-red-500 rounded-4xl p-2 '
      onClick={()=>setColor("red")}>
        red
      </button >
       <button className='bg-black rounded-4xl p-2 text-white' onClick={()=>setColor("black")}>
       black
      </button>
       <button className='bg-white rounded-4xl p-2' onClick={()=>setColor("white")}>
        white
      </button>
       <button className='bg-olive-600 rounded-4xl p-2' onClick={()=>setColor("olive")}>
        olive
      </button>
       <button className='bg-green-400 rounded-4xl p-2' onClick={()=>setColor("green")}>
        green
      </button>
       <button className='bg-orange-700 rounded-4xl p-2' onClick={()=>setColor("orange")}>
       orange
      </button>
      </div>

    </div>
    </>
  )
}

export default App

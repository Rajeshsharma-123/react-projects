

import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  // first type 
  useEffect(() => {
    console.log("Not count wala useEffect")
  }, [])

  //second type 
  useEffect(() => {
    console.log("count wala useEffect")
  }, [count])

  return (
    <div>


      <h1 className='number'>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increament</button>
      <button onClick={() => setCount(count - 1)}>decreament</button>

    </div>

  )
}

export default App




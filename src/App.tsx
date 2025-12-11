import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-auto max-w-[1170px] h-svh'>
      <Counter />
    </div >
  )
}

export default App

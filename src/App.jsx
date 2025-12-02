import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './pages/Todos'
import Header from './components/index'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Todos/>
    </>
    
  )
}

export default App

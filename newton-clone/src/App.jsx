import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MiddleSection from './components/MiddleSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Sidebar/>
      <MiddleSection/>
    </>
  )
}

export default App

import { useState } from 'react'
// import './App.css'
import Course from './components/Course'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Course map!!🤯🤯</h1>
      <Course />
    </div>
  )
}

export default App

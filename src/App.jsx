import { useState } from 'react'
import './App.css'
import Course from './components/Course'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Course map!!🤯🤯</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Course />
      </div>
    </div>
  )
}

export default App

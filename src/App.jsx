import { useState } from 'react'
// import './App.css'
import Course from './components/Course'
import CourseGrid from './components/CourseGrid';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Course map!!🤯🤯</h1>
      {/* <Course /> */}
      <CourseGrid gridHeight={3} gridWidth={1} />
    </div>
  )
}

export default App

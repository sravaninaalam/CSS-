import './App.css'
import React from 'react'
import  ReactDOM  from 'react-dom/client'
import Problem from './components/interview-utube/Selectmenus/Problem'
import ProblemList from './components/interview-utube/secondproblem/ProblemList'

const App = () => {
  return (
    <div>
      <Problem/>
    <ProblemList/>
    </div>
  )
}

export default App


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
import { useState } from "react"

const todo=['play music','watch tv','Go shopping']
const ProblemList = () => {
  const [todos,setTodos]=useState(todo)
  const[enable,setEnable]=useState()
  const[clicked,setClicked]=useState('')
  function handleClick(id){

     const d= todos.filter((i,index)=>index!==id)
      setTodos(d)
   
  }
  function handleChange(index){
    setEnable(index)
    setClicked(index)
  }
  if(!todos) return
  return (
    <div className="w-72 h-72 border border-black mx-auto mt-10 ">
      <h3 className='text-center font-semibold'>TODO</h3>

      {todos.map((li,index)=><div key={index} className="flex p-1 m-1">
       <input type="checkBox" onChange={()=>handleChange(index)}/>
        <h3>{li}</h3>
        {(enable && index== clicked)?
        <button className="bg-red-400 px-2 mx-2"
        onClick={()=>handleClick(index)}>X</button>:''}
      </div>)}
    </div>
  )
}

export default ProblemList

import { useState } from "react"
import { steps } from "../utils/constants"


const Nextstep = () => {
  const [currentStep,setCurrentStep]=useState(1)
  const[finish,setFinish]=useState(false)
  const handleNxtStep=()=>{
    setCurrentStep(currentStep+1)
    if(currentStep===steps.length-1){
      setFinish(true)
    }
  }
  return (
   <>
      <div className="w-1/3 bg-orange-300 shadow-md mx-auto my-20 text-center">
        <h1 className="font-bold my-4">Checkout the below steps</h1>
        <div className="flex justify-between">
        {steps.map((s,index)=><div key={index}>
          <h1 className={`bg-gray-300 w-10 rounded-3xl ${currentStep>index+1 || finish ? "bg-green-400":""}
          ${currentStep===index+1 ?"bg-blue-400":""}`}>{index+1}</h1>
          <h1>{s.name}</h1>
        </div>)}
        </div>
        <h3 className="mt-4 font-medium">{steps[currentStep-1].data}</h3>
       {!finish &&
       <button className="p-2 m-1 bg-yellow-300  rounded-md" onClick={handleNxtStep}>{
        currentStep===steps.length-1 ?"Finish":"Next"
       }</button>}
      </div>
   </>
  )
}

export default Nextstep

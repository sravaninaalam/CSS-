import { useState } from "react"
import Checklist from "../Checklist/Checklist"

const countries=[
    {name:'India',val:'IN',city:['Delhi','kerala','kashimr','hyderabad']},{name:'America',val:'US',city:['canada','florida']},
    {name:'London',val:'US',city:['londonbridge','londoneye']}]


function Dropdown(){
  const[cn,setCn]=useState(0)

    return(
        <>
            <h2 className="font-bold text-center">Select country u belong to</h2>
            <div className="w-96 border border-black mx-auto mt-10">
              <select className="bg-gray-300 m-5 p-2 rounded-md"  onChange={(e)=>setCn(e.target.value)}>
                    {countries.map((item,index)=>
                    <option key={index} value={index}>{item.name}</option>
                        )}
             </select>
            <select className="bg-gray-200 m-5 p-2 rounded-md">
                {countries[cn].city.map((c,index)=><option key={index} value={index}>
                    {c}
                </option>)
                 }
                 </select>
            </div>
            <Checklist/>
        </>
    )
}
export default Dropdown
// IF JSON DATA IS NOT ARRAY OF OBJCTS
// import { useState } from 'react'

// function Folder({data}) {
//     const [expand,setExpand]=useState(false)
//   if(data.isFolder){
//   return (
//     <div>
//          <h1 onClick={()=>setExpand(!expand)} className='border border-l-black px-2 m-3'>🔽{data.name}</h1>
//          {expand &&<div className='border border-l-black px-5'>
//           {data.items.map((item,index)=><Folder key={index} data={item}/>)}
//          </div>}
//     </div>
//   )
//     }
//     else{
//         return <h1 className=' px-5'>{data.name}</h1>
//     }
// }

// export default Folder


//IF JSON DATA IS ARRAY OF OBJECTS THEN ===>
import React, { useState } from 'react'

const JsonFolder=({name,files})=>{
  // console.log(name,"name")
  console.log(files,"items")
  const[expand,setExpand]=useState(false)
  return(
    <div className='px-3 m-1'>
      <h1 onClick={()=>setExpand(!expand)}>{name}</h1>
      { expand &&
      files && files.map((item,index)=>
      <div key={index} className='border border-l-black'><JsonFolder  name={item.name} files={item.items}/></div>)}
   
      </div>
  )
}
function Folder({data}) {
  return (
    <div>
      {data.map((item,index)=><JsonFolder key={index} name={item.name} files={item.items}/>)}
    </div>
  )
}

export default Folder

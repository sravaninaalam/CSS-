
import { useState } from 'react'

function Folder({data}) {
    const [expand,setExpand]=useState(false)
  if(data.isFolder){
  return (
    <div>
         <h1 onClick={()=>setExpand(!expand)} className='border border-l-black px-2 m-3'>🔽{data.name}</h1>
         {expand &&<div className='border border-l-black px-5'>
          {data.items.map((item,index)=><Folder key={index} data={item}/>)}
         </div>}
    </div>
  )
    }
    else{
        return <h1 className=' px-5'>{data.name}</h1>
    }
}

export default Folder


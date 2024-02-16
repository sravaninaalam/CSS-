
const DisplayTree=({name,text,replies})=>{
    return(
        <div className='px-2 mx-4'>
            <h1>{name}</h1>
            <h2>{text}</h2>
            {replies && replies.map((data,index)=>
            <div  key={index} className='border border-l-black rounded-lg'>
                <DisplayTree  name={data.name} text={data.text} replies={data.replies}/>
           </div>
            )}
        
        </div>
    )
}
function Comment({data}) {
   
  return (
    <div>
        <DisplayTree name={data.name} text={data.text} replies={data.replies}/>
    </div>
  )
}

export default Comment

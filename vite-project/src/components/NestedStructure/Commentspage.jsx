import React from 'react'
import { comments_data } from '../../utils/constants'
import Comment from './Comment'

const Commentspage = () => {
  return (
    <div className='w-1/2 mx-auto mt-24 bg-gray-400 shadow-lg'>
      <h1 className='text-center font-medium'>This is Nested tree structure</h1>
      {comments_data.map((cmnt,index)=>
     
      <Comment key={index} data={cmnt}/>
      )}
    </div>
  )
}

export default Commentspage

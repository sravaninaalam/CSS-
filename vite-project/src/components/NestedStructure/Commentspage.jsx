
import { comments_data, json_folder } from '../../utils/constants'
import Comment from './Comment'
import Folder from './Folder'

const Commentspage = () => {
  return (
    <>
    <Folder data={json_folder}/>
    <div className='w-1/2 mx-auto mt-24 bg-gray-400 shadow-lg'>
      <h1 className='text-center font-medium'>This is Nested tree structure</h1>
      {comments_data.map((cmnt,index)=>
     
      <Comment key={index} data={cmnt}/>
      )}
    </div>
    </>
  )
}

export default Commentspage

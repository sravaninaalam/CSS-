import  { useState } from 'react'


const IMG_URLS=['https://i.pinimg.com/originals/fe/76/f7/fe76f7f0f59ceaf5d396c814544f9f1f.jpg','https://getwallpapers.com/wallpaper/full/a/5/e/584381.jpg',
'https://c4.wallpaperflare.com/wallpaper/86/419/788/random-green-hd-wallpaper-preview.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK17Bkkdl5tfThqTjMu1EITibM0DCiV1y2cA&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdAHqYOopu_YS0HjJD14KON3MM3LovUaXVw&usqp=CAU']
const imgs=IMG_URLS.length

const Pagination = () => {
  const[imgageIndex,setImageIndex]=useState(0)
  const handleNextImage=()=>{
    setImageIndex(imgageIndex+1)
    console.log(imgageIndex,"in nxt")
  if(imgageIndex==4){
    setImageIndex(imgs-imgageIndex)
  }
  }
  const handlePrevImage=()=>{
    setImageIndex(imgageIndex-1)
   
    if(imgageIndex==0){
      setImageIndex(imgs-1)
    }
  }
  return (
    <div className='mx-auto w-96 flex my-10'>
      <button className='p-2 m-2' onClick={handlePrevImage}>⬅️</button>
      <img src={IMG_URLS[imgageIndex]} className='w-96'/>
      {/* {IMG_URLS.map((imgdata,index)=><div key={index}>
        <img src={imgdata} alt='image' className='w-96 '/>
      </div>)} */}
      <button className='p-2 m-2' onClick={handleNextImage}>➡️</button>
    </div>
  )
}

export default Pagination





// function Imageslider(){

//       const[imgindex,setImgIndex]=useState(0)
//       const NxtHandleslidier=()=>{
//             setImgIndex((imgindex+1)%IMG_URLS.length)   
//       }
//       const PrevHandleslidier=()=>{
//         setImgIndex(!imgindex?IMG_URLS.length-1:imgindex-1)
//         // imgindex===0?setImgIndex(IMG_URLS.length-1):
//         // setImgIndex(imgindex-1)
//      }
//      useEffect(()=>{
//         const timer=  setInterval(()=>{
//             NxtHandleslidier()
//           },5000)
//           return(()=>{clearInterval(timer)})
//      },[imgindex])
//     return(
//         <>
//             <div className="flex justify-center">
//                 {/* {!imgindex ?'': */}
//                 <button className="m-10 p-4 " onClick={()=>PrevHandleslidier()}>⬅️PREV </button>
//                 {/* } */}
//               {IMG_URLS.map((url,i)=><div key={url}>
//                 <img src={url}  alt='bg' className={"w-80 h-60 object-contain "+ (imgindex===i?"block":"hidden")}/>
//               </div>)}
                
                  
//                 {/* {imgindex>=IMG_URLS.length-1 ?'': */}
//                 <button className="p-4 m-10" onClick={()=>NxtHandleslidier()}>NXT➡️</button>
//                  {/* } */}
//             </div>
//         </>
//     )
// }

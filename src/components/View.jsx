import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideoAPI, updateCategoryAPI ,saveVideo} from '../services/allAPI'


const View = ({addresponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {
  const [deleteVideoResponseFromVideoCard,setDeleteVideoResponseFromVideoCard]=useState("")
 const [allVideos,setAllVideos]=useState([])
 useEffect(()=>{
  getAllVideos()
 },[addresponseFromHome,deleteVideoResponseFromVideoCard,deleteResponseFromCategory])
 console.log(allVideos);
 const getAllVideos=async()=>{
  try{
    const result=await getAllVideoAPI()
    // console.log(result);
    if(result.status>=200 && result.status<300){
      setAllVideos(result.data)
    }

    
  }catch(err){
    console.log(err);
    
  }
 }
 const dragOverView=(e)=>{
  e.preventDefault()
 }
 const categoryVideoDropOverView=async(e)=>{
  console.log("inside categoryVideoDropOverView");
  const {video,categoryDetails}=JSON.parse(e.dataTransfer.getData("dragData"))
  console.log(video,categoryDetails);
  const updatedCategoryVideoList= categoryDetails?.allVideos?.filter(item=>item.id!=video?.id)
  const updatedCategory={...categoryDetails,allVideos:updatedCategoryVideoList}
  console.log(updatedCategory);
  // upate the category by delete video
  const result=await updateCategoryAPI(updatedCategory)
  // use statelifting to communicate from view to category
  setDeleteResponseFromView(result)
  
  // use api to upload video
  await saveVideo(video)
  // call getAllvideos function
  getAllVideos()
  
  
  
 }
 
 
  return (
    <>
    <Row draggable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDropOverView(e)}>
     {
      allVideos?.length>0 ?
      allVideos?.map(video=>(
        <Col key={video?.id} className='mb-3' sm={12} md={6} lg={4}>
        <VideoCard setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard} displaydata={video}/>
        </Col>
      ))
      :
      <div className='fw-bolder text-danger fs-5'>No Videos upload</div>
     }
    </Row>
    </>
  ) 
}  
export default View
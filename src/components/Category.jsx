import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import VideoCard from './VideoCard';
import { deleteCategoryAPI, getAllCategoryAPI, removevideoAPI, saveCategoriesAPI, updateCategoryAPI } from '../services/allAPI';

const Category = ({setDeleteResponseFromCategory,deleteResponseFromView}) => {
  const [allCategories, setAllCategories] = useState([])
  const [categoryName, setCategoryName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    getAllCategories()
  },[deleteResponseFromView])
  console.log(categoryName);
  const handleSaveCategory = async () => {
    if (categoryName) {
      const categoryDetails = { categoryName, allVideos: [] }
      try {
        const result = await saveCategoriesAPI(categoryDetails)
        if (result.status >= 200 && result.status < 300) {
          alert("category added successfully!!")
          getAllCategories()
          setCategoryName('')
          handleClose()
        }
      } catch (err) {
        console.log(err);

      }
    } else {
      alert("please provide a name to your category!!")
    }
  }
  const getAllCategories = async () => {
    try {
      const result = await getAllCategoryAPI()
      if (result.status >= 200 && result.status < 300) {
        setAllCategories(result.data)
      }
    } catch (err) {
      console.log(err);

    }
  }
const removeCategory=async(id)=>{
  try{
    await deleteCategoryAPI(id)
    getAllCategories()
  }catch(err){
    console.log(err);
    
  }
}
const dragOverCategory=(e)=>{
  e.preventDefault()
}
const videoCardDropOverCategory=async(e,categoryDetails)=>{
  console.log("inside drop");
  

const videoDetails=JSON.parse(e.dataTransfer.getData("videoDetails"))
console.log(videoDetails);
categoryDetails.allVideos.push(videoDetails)
console.log(categoryDetails);
await updateCategoryAPI(categoryDetails)
getAllCategories()
const result = await removevideoAPI(videoDetails.id)
setDeleteResponseFromCategory(result)
}
const categoryDragStarted=(e,dragVideoDetails,categoryDetails)=>{
  console.log("inside category drag");
  let dragData = {video:dragVideoDetails,categoryDetails}
  e.dataTransfer.setData("dragdata",JSON.stringify(dragData))
  
}

  return (
    <>
    <div className='d-flex align-items-center justify-content-around'>
        <h3>All Categories </h3>

        <button onClick={handleShow} className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>


      </div>
      {/* display all categories */}
      <div className='container-fluid mt-3'>
        {/* single category view */}
        {
          allCategories?.length>0 ?
          allCategories?.map(categoryDetails=>(
            <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>videoCardDropOverCategory(e,categoryDetails)}  key={categoryDetails?.id} className='border rounded p-3 mb-3'>
              <div className='d-flex justify-content-between'>
                <h5>{categoryDetails?.categoryName}</h5>
                <button onClick={()=>removeCategory(categoryDetails?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
              </div>
              {/* display category videos */}
              <div className='row mt-2'>
               {
                categoryDetails?.allVideos?.length>0 &&
                categoryDetails?.allVideos?.map(video=>(
                  <div draggable={true} onDragStart={e=>categoryDragStarted(e,video,categoryDetails)} key={video?.id} className='col-lg-4'>
                  {/* videocard */}
                  <VideoCard insideCategory={true} displaydata={video}/>
                </div>
                ))
               }
              </div>
            </div>
          ))
        :
        <div className='fw-bolder text-danger fs-2'>No Categories are added yet!!!</div>
}
        
      
      </div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new category!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='border  p-5'>
          <FloatingLabel controlId="floatingCategory" label="Category Name">
            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Category" />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} >Close</Button>
          <Button onClick={() => handleSaveCategory(categoryName)}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
      
  )
}

export default Category










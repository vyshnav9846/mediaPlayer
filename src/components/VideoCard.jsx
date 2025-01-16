import React from 'react'
import { useState } from 'react'
import {  Button, Card, Modal } from 'react-bootstrap'
import { removevideoAPI, saveHistoryAPI } from '../services/allAPI'





const VideoCard = ({displaydata,setDeleteVideoResponseFromVideoCard,insideCategory}) => { const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () =>{
    // display modal
    setShow(true)
    // store history in json
    const {caption,ytLink}=displaydata
    const sysDataTime =new Date()
    console.log(sysDataTime.toLocaleString("en-US",{timeZoneName:'short'}));
    const timeStamp =sysDataTime.toLocaleString("en-US",{timeZoneName:'short'})
    const historyDetails={caption,ytLink,timeStamp}
    try{
      await saveHistoryAPI(historyDetails)
    }catch(err){
      console.log(err);
      
    }
    
  
  } 
  const deleteVideo=async(id)=>{
    try{
      const result =await removevideoAPI(id)
      setDeleteVideoResponseFromVideoCard(result)
    }catch(err){
      console.log(err);
      
    }
    }
  const videoCardDragStarted=(e,dragVideoDetails)=>{
    console.log("draggin video started"+dragVideoDetails?.id);
    e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
    
  }
  return (
  <>
   <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displaydata)} style={{ height:'250px' }}>
      <Card.Img onClick={handleShow} variant="top" height={'170px'} width={'100%'} src={displaydata?.imageUrl} />
      <Card.Body>
      <Card.Text className='d-flex justify-content-between'>
        <p>{displaydata?.caption}</p>
       {
        !insideCategory &&
        <button onClick={()=>deleteVideo(displaydata?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
          
       }
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displaydata?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100% " height="515" src={`${displaydata?.ytLink}?autoplay=1`} title="Where is Pushpa? | Pushpa 2 - The Rule 🔥 | Tamil | Allu Arjun | Sukumar | Rashmika | Fahadh Faasil" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>
        
      </Modal>
  </>
  )
}

export default VideoCard
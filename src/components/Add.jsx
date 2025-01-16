import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { saveVideo } from '../services/allAPI'




const Add = ({setAddResponseFromHome}) => {
  const linkConversion = (userInputYoutubeLink) => {
    if (userInputYoutubeLink.includes('https://www.youtube.com/watch?v=')) {
      console.log(userInputYoutubeLink.split("v=")[1].slice(0, 11));
      const videoId = userInputYoutubeLink.split("v=")[1].slice(0, 11)
      setInvalidYoutubeLink(false)
      setVideoDetails({ ...VideoDetails, ytLink: `https://www.youtube.com/embed/${videoId}` })


    } else {
      setInvalidYoutubeLink(true)
      setVideoDetails({ ...VideoDetails, ytLink: "" })
    }
  }
  const [VideoDetails, setVideoDetails] = useState({
    caption: "", imageUrl: "", ytLink: ""
  })
  console.log(VideoDetails);
  const [invalidYtLink, setInvalidYoutubeLink] = useState(false)

  const [show, setShow] = useState(false);
0
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUploadVideo = async () => {
    const { caption, imageUrl, ytLink } = VideoDetails
    if (caption && imageUrl && ytLink) {
      // store it permently
      try {
        const result = await saveVideo(VideoDetails)
        if (result.status >= 200 && result.status < 300) {
          alert("video upload sucessfully!!!")
          handleClose()
          // pass result to view component
          setAddResponseFromHome(result)

        } else {
          console.log(result);

        }
      } catch (err) {
        console.log(err);

      }

    } else {
      alert("please fill the form!!")
    }
  }

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'> +</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload New Video!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded p-3'>
            <FloatingLabel controlId="floatingCaption" label=" VideoCaption">
              <Form.Control onChange={e => setVideoDetails({ ...VideoDetails, caption: e.target.value })} type="text" placeholder="Video caption" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingImageURL" label=" Video Image URL">
              <Form.Control onChange={e => setVideoDetails({ ...VideoDetails, imageUrl: e.target.value })} type="text" placeholder="Video Image URL" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingLink" label=" Video Youtube Link">
              <Form.Control onChange={e => linkConversion(e.target.value)} type="text" placeholder="Video Youtube Link" />
            </FloatingLabel>
            {
              invalidYtLink && <div>invalid youtubelink</div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
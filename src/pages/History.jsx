import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getAllHistoryAPI } from '../services/allAPI'

const History = () => {
  const [allVideoHistory,setAllVideoHistory]=useState([])
  useEffect(()=>{
    getAllhistory()

  },[])
  console.log(allVideoHistory);
  const getAllhistory=async ()=>{
    try{
      const result= await getAllHistoryAPI()
      console.log(result);
      
      if(result.status>=200 && result.status<300){
        setAllVideoHistory(result.data)
      }
    }catch(err){
      console.log(err);
      
    }
  }
  const removeHistory =async(id)=>{
    try{
      await deleteHistoryAPI(id)
      getAllhistory()
    }catch(err){
      console.log(err);
      
    }
  }
  return (
  <div style={{paddingTop:'100px'}}>
      <div className='container d-flex justify-content-between'>
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>

        
      </div>
      <table className='container my-5 table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Timestamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
         {
          allVideoHistory?.length>0?
          allVideoHistory?.map((videoDetails,index)=>(
            <tr key={videoDetails?.id}>
            <td>{index+1}</td>
            <td>{videoDetails?.caption}</td>
            <td><a target='_blank' href={videoDetails?.ytLink}>{videoDetails?.ytLink}</a></td>
            <td>{videoDetails?.timeStamp}</td>
            <td><button onClick={()=>removeHistory(videoDetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
          </tr>

          ))
          :
          <div className='fw-bolder text-danger'>you didn't watch any video!!!</div>
         }
        </tbody>

      </table>
  </div>
  )
}

export default History
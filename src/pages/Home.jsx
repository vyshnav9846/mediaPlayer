import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import View from '../components/View'

const Home = () => {
  const [deleteResponseFromView,setDeleteResponseFromView]=useState("")
  const [deleteResponseFromCategory,setDeleteResponseFromCategory]=useState("")
  const [addresponseFromHome,setAddResponseFromHome]=useState("")
  return (
    <div style={{paddingTop:'100px'}}>
      <div className='container mb-5 d-flex justify-content-between'>
        <Add setAddResponseFromHome={setAddResponseFromHome}/>
        <Link to={'/history'}>Watch History</Link>

      </div>
      <div className='container-fluid row my-5'>
        <div className='col-lg-6'>
<h3>All Videos</h3>
<View setDeleteResponseFromView={setDeleteResponseFromView} deleteResponseFromCategory={deleteResponseFromCategory} addresponseFromHome={addresponseFromHome}/>
        </div>
        <div className='col-lg-6'>
          <Category deleteResponseFromView={deleteResponseFromView} setDeleteResponseFromCategory={setDeleteResponseFromCategory}/>
        </div>
      </div>
    </div>
  )
}

export default Home
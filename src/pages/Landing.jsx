import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/landingmusic.gif'
import { Button, Card } from 'react-bootstrap'
import music1 from '../assets/music1.avif'
import music2 from '../assets/music2.avif'
import music3 from '../assets/music3.jpg'

const Landing = () => {
  return (
    <div style={{ padding: '100px' }} className='container'>
      {/* landing */}
      <div className='row align-items-center'>
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>  Media PlayerLorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus non rerum sapiente ullam sequi deleniti omnis illo sit cupiditate, deserunt fugiat quo placeat ipsum, mollitia possimus ut aperiam dolorum ipsa.</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <img src={landingImg} alt="" className='img-fluid ms-5' />
        </div>

      </div>
      {/* features */}
      <div>
        <h3 className='text-center'>Features</h3>
        <div className='row my-5'>
          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src={music1} />
              <Card.Body>
                <Card.Title>managing music</Card.Title>
                <Card.Text>
                  natus, repellendus sunt voluptates quisquam eaque, doloribus aspernatur nemo ut commodi. Tempore sed et voluptate unde modi.
                </Card.Text>

              </Card.Body>
            </Card>

          </div>
          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src={music2} />
              <Card.Body>
                <Card.Title>categoryes video</Card.Title>
                <Card.Text>
                  natus, repellendus sunt voluptates quisquam eaque, doloribus aspernatur nemo ut commodi. Tempore sed et voluptate unde modi.
                </Card.Text>

              </Card.Body>
            </Card>

          </div>
          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src={music3} />
              <Card.Body>
                <Card.Title>managing History</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consecteatur nemo ut commodi. Tempore sed et voluptate unde modi.
                </Card.Text>

              </Card.Body>
            </Card>

          </div>

        </div>
      </div>
      {/* last */}
      <div className='row align-items-center border rounded p-5 my-5'>
        <div className='col-lg-5'>
          <h3 className='text-warning'>Simple,Fast and Powerful</h3>
          <p style={{ textAlign: 'justify' }}> <span className='fs-5 fw-bolder'>play Everything</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptatem itaque officia dolor! Ducimus asperiores, eveniet iste molestias recusandae sunt ipsa, natus assumenda repellat fuga odit sint aspernatur sed voluptas.</p>
          <p style={{ textAlign: 'justify' }}> <span className='fs-5 fw-bolder'>Managing History</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptatem itaque officia dolor! Ducimus asperiores, eveniet iste molestias recusandae sunt ipsa, natus assumenda repellat fuga odit sint aspernatur sed voluptas.</p>

          <p style={{ textAlign: 'justify' }}> <span className='fs-5 fw-bolder'>Catogeroyes Video</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptatem itaque officia dolor! Ducimus asperiores, eveniet iste molestias recusandae sunt ipsa, natus assumenda repellat fuga odit sint aspernatur sed voluptas.</p>


        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <iframe width="100% " height="515" src="https://www.youtube.com/embed/08cfjZNKZbQ" title="Where is Pushpa? | Pushpa 2 - The Rule 🔥 | Tamil | Allu Arjun | Sukumar | Rashmika | Fahadh Faasil" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>
    </div>
  )
}

export default Landing
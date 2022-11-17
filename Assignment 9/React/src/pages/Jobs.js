import React from 'react'
import Card from '../components/card'
import Navbar from '../components/navbar';

function Jobs() {
  return (
    <div className='App'>
      <Navbar/>
      <Card
      title='Jobs'
      imageUrl='https://s3.amazonaws.com/assets.cce.cornell.edu/slides/9034/image/sized/jobs.jpg?1415124458'
      body="Currently we are not hiring but when we do start we'll inform you"
      />
      </div>
  )
}

export default Jobs;
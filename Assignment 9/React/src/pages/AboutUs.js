import React from 'react'
import Card from '../components/card'
import Navbar from '../components/navbar';

function AboutUs() {
  return (
    <div className='App'>
      <Navbar/>
      <Card
      title='About US'
      imageUrl='https://www.impactbnd.com/hs-fs/hubfs/blog-image-uploads/best-about-us-pages.jpg?length=1200&name=best-about-us-pages.jpg'
      body='Click here to know more about us'
      />
      </div>
  )
}

export default AboutUs;

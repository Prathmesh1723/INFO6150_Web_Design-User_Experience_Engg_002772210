import React from 'react'
import Card from '../components/card'
import Navbar from '../components/navbar';

function Contact() {
  return (
    <div className='App'>
      <Navbar/>
      <Card
      title='Contact'
      imageUrl='https://www.postplanner.com/hs-fs/hubfs/How-to-Contact-Facebook-Support-1.png?noresize&width=980&height=515&name=How-to-Contact-Facebook-Support-1.png'
      body='Our Contact information is available all over the internet!'
      />
      </div>
  )
}

export default Contact;
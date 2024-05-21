import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import ClubCard from '../components/ClubCard'
import Footer from '../components/Footer'
export default function 
() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <h3 className='display-4 font-weight-bold text-muted' style={{"marginBottom":"20px","marginTop":"20px","textAlign":"center"}}>CLUBS</h3>
      <ClubCard/>
      <Footer/>
    </div>
  )
}

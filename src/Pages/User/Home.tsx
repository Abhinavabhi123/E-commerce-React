import React from 'react'
import Navbar  from '../../Component/User/UserNav/NavBar'
import MainSection from '../../Component/User/UserNav/MainSection'
import HomeSlider from '../../Component/User/Slider/HomeSlider'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-transparent container m-0'>
      <Navbar/>
      <MainSection/>
      <HomeSlider/>
    </div>
  )
}

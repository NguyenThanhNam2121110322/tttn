import React from 'react'
import Features from '../../components/Home/Features'
import HomeCategories from '../../components/Home/HomeCategories'
import Offer from '../../components/Home/Offer'
import TrandyProducts from '../../components/Home/TrandyProducts'
import Subcribe from '../../components/Home/Subscribe'
import Vendor from '../../components/Home/Vendor'
import JustArrived from '../../components/Home/JustArrived'
import Slider from '../../components/Home/Slider'


function Home() {
  return (
    <main>
      <div class="container-fluid mb-5">
        <Slider />
      </div>
      <div class="container-fluid pt-5">
        <Features />
      </div>
      <div class="container-fluid pt-5">
        <HomeCategories />

      </div>
      <div class="container-fluid offer pt-5">
        <Offer />
      </div>
      <div class="container-fluid pt-5">
        <TrandyProducts />
      </div>


      <div class="container-fluid bg-secondary my-5">
        <Subcribe />
      </div>

      <div class="container-fluid pt-5">
        <JustArrived />
      </div>
      {/* 
      <div class="container-fluid bg-secondary text-dark mt-5 pt-5">
      <Vendor/>
      </div> */}


    </main>

  )
}

export default Home
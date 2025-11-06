import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Img } from '../../assets/assets'

const Carousel_page = () => {
  
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img src={Img.img1} alt="Slide 1" height={400} className="d-block w-100" />
        <Carousel.Caption className="d-flex flex-column align-items-start justify-content-start h-100 text-start">
          <h5 className='text-dark mt-2'>NEW ARRIVALS</h5>
          <h1 className='mt-2 display-4 text-dark'>Stylish </h1>
          <h1 className='display-4 text-dark'>Compfort For</h1>
          <h1 className='display-4 text-dark'> Fall Nights</h1>         
           <a href="/shop"><button className='btn btn-dark mt-4'>SHOP NOW</button></a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={Img.img2} alt="Slide 2" height={400} className="d-block w-100" />
        <Carousel.Caption className="d-flex flex-column align-items-start justify-content-center h-100 text-start">
    <h5 className='mt-2'>NEW ARRIVALS</h5>
         <h1 className='mt-2 display-4 text-dark'>Stylish </h1>
          <h1 className='display-4 text-dark'>Compfort For</h1>
          <h1 className='display-4 text-dark'> Fall Nights</h1>         
           <button className='btn btn-dark mt-4'>SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={Img.img3} alt="Slide 3" height={400} className="d-block w-100" />
        <Carousel.Caption className="d-flex flex-column align-items-start justify-content-center h-100 text-start">
          <h5 className='mt-2'>NEW ARRIVALS</h5>
           <h1 className='mt-2 display-4 text-dark'>Stylish </h1>
          <h1 className='display-4 text-dark'>Compfort For</h1>
          <h1 className='display-4 text-dark'> Fall Nights</h1>         
           <button className='btn btn-dark mt-4'>SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousel_page

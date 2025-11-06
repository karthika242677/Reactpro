import React from 'react'
import CustomNavbar from '../components/common_components/Navbar'
import Carousel_page from '../components/home_components/Carousel_page'
import Swiper_page from '../components/home_components/Swiper_page'
import Arrivals_page from '../components/home_components/Arrivals_page'
import Product_page from '../components/home_components/Product_page'
import Populars_page from '../components/home_components/Populars_page'
import Blog_page from '../components/home_components/Blog_page'
import Footer from '../components/common_components/Footer'
const Home = () => {
  return (
    <>
    <CustomNavbar/>
    <Carousel_page/>
    <Swiper_page/>
    <Arrivals_page/>
    <Product_page/>
    <Populars_page/>
    <Blog_page/>
    <Footer/>
   
    </>
  )
}

export default Home
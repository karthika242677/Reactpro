import React from 'react'
import CustomNavbar from '../components/common_components/Navbar'
import Back_page from '../components/page_components/Back_page'
import Footer from '../components/common_components/Footer'
import Card_page from '../components/page_components/Card_page'
import Menu_about from '../components/page_components/Menu_about'



const Pages = () => {
  return (
    <>
        <CustomNavbar/>   
        <Back_page/> 
        <Menu_about/>
        <Card_page/>
        <Footer/>
     </>
  )
}

export default Pages
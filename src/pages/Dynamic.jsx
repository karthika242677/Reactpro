import React from 'react'
import CustomNavbar from '../components/common_components/Navbar'
import All_prod_page from '../components/dynamic_components/All_prod_page'
import Footer from '../components/common_components/Footer'
import View_page from '../components/dynamic_components/View_page'

const Dynamic = () => {
  return (
    <>
    <CustomNavbar/>
    <View_page/>
    <All_prod_page/>
    <Footer/>
    </>
  )
}

export default Dynamic
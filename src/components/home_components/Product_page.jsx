import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { all_products } from '../../assets/assets'
import "swiper/css"
import "swiper/css/navigation"

const Product_page = () => {
  const popular_products = all_products.filter(
    (product) => product.category === "popular"
  )

  return (
    <Container className="my-5 p-2">
      {/* Section heading */}
      <p className="text-center text-uppercase fw-semibold">Top Products</p>
      <h1 className="text-center mb-4 fw-bold">Popular Products</h1>    

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },  // Extra small devices
          576: { slidesPerView: 1, spaceBetween: 15 },  // Mobiles
          768: { slidesPerView: 2, spaceBetween: 20 },  // Tablets
          992: { slidesPerView: 3, spaceBetween: 25 },  // Laptops
          1200: { slidesPerView: 3, spaceBetween: 30 }, // Desktops
        }}
      > {popular_products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="card h-100 p-3 border-0 shadow-sm">
              <img src={product.img} alt={product.type} className="card-img-top mb-3"/>
              <p className="mb-1 text-muted">{product.type}</p>
              <p className="mb-1 fw-semibold">{product.desc}</p>
              <p className="mb-0 fw-bold">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center shadow-0 mt-5 mb-5">
              <button className='btn-secondary'>show more Produts</button>
            </div>
    </Container>
  )
}

export default Product_page

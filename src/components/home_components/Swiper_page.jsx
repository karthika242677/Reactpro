import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"
import { Container } from 'react-bootstrap'
import { swiper } from '../../assets/assets'
const Swiper_page = () => {

  return (
    <Container className="my-5">
      <Swiper
  modules={[Navigation, Autoplay]}
  spaceBetween={30}
  slidesPerView={5}
  navigation
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  loop={true}
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 10 }, 
    576: { slidesPerView: 2, spaceBetween: 15 },  
    768: { slidesPerView: 3, spaceBetween: 20 }, 
    992: { slidesPerView: 4, spaceBetween: 20 },  
    1200: { slidesPerView: 5, spaceBetween: 30 },
  }}
>
  {swiper.map((product) => (
    <SwiperSlide key={product.id}>
      <div className="card h-100 p-2 border-0 shadow-none">
        <img 
          src={product.img} 
          alt={product.type} 
          className="card-img-top mb-2"
        />
        <p className="d-flex justify-content-between align-items-center mb-2 fs-5">
          {product.type}
          <i className="bi bi-arrow-up-right"></i>
        </p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </Container>
  )
  
}

export default Swiper_page

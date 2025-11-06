import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"
import { Container } from 'react-bootstrap'
import { all_products } from '../../assets/assets'

const Swiper_page = () => {
  const swiperProducts = all_products.filter(
    (product) => product.category === "swiper"
  )

  return (
    <Container className="my-5">
        <h1 className='text-center mb-4'>Related Products</h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={5} // default (large screens)
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
        {all_products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="card h-100 p-2 border-0 shadow-none">
              <img 
                src={product.img} 
                alt={product.type} 
                className="card-img-top mb-2"
              />
              <p className="mb-2">{product.type}</p>
              <p className="mb-2 text-muted">{product.desc}</p>
              <p className="fw-bold">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Swiper_page

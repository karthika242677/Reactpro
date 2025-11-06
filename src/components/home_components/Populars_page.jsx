import React from 'react'
import { Container } from 'react-bootstrap'
import { popular_products } from '../../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation} from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"

const Populars_page = () => {
  return (
    <>
      <Container className="my-4 p-3">
        <p className="text-center">TOP BRANDS</p>
        <h1 className="text-center mb-4">Popular Brands</h1>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}   // default (large screens)
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },   // mobile
            576: { slidesPerView: 3, spaceBetween: 15 },   // small tablets
            768: { slidesPerView: 4, spaceBetween: 20 },   // tablets
            992: { slidesPerView: 5, spaceBetween: 20 },   // desktops
            1200: { slidesPerView: 6, spaceBetween: 10 },  // large desktops
          }}
        >
          {popular_products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="col-4 h-100 text-center p-2 border-0 shadow-none">
                <img
                  src={product.img}
                  alt={product.type}
                  className="card-img-top mb-2"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  )
}

export default Populars_page

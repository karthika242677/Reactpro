import React from 'react'
import { Container } from 'react-bootstrap'
import { blog_products } from '../../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation} from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"

const Blog_page = () => {
  return (
    <>
      <Container className='my-3 p-2'>
        <p className='text-center text-uppercase fw-semibold'>LATEST POSTS</p>
        <h1 className='text-center mb-4 fw-bold'>Blog & Insights</h1>    

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            576: { slidesPerView: 1 },  // Mobile
            768: { slidesPerView: 2 },  // Tablets
            992: { slidesPerView: 3 },  // Laptops
            1200: { slidesPerView: 3 }, // Desktops
          }}
        >
        {blog_products.map((product) => (
                    <SwiperSlide key={product.id}>
                      <div className="card h-100 p-2 border-0 shadow-none">
                        <img
                          src={product.img}
                          alt={product.type}
                          className="card-img-top mb-2"
                        />
                        <p className="mb-2 text-muted">{product.type}</p>
                      <p className="mb-2 fs-5 fs-bold">{product.desc}</p>
                      </div>
                    </SwiperSlide>
        ))}
        </Swiper>
      </Container>
    </>
  )
}

export default Blog_page

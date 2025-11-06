import React from 'react'
import { Container } from 'react-bootstrap'
import { card_products } from '../../assets/assets'
const Card_page = () => {
  return (
    <>
    <Container>
        <h1 className='text-center fs-bold mt-5 mb-5'>Meet The Our Team</h1>
        <div className="row">
            {card_products.map((product) => (
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="card h-100 p-2 border-0 shadow-none">
                        <img
                          src={product.img}
                          alt={product.type}
                          className="card-img-top mb-2"
                        />
                        <p className="mb-2 fs-4 text-center fs-bold">{product.type}</p>
                      <p className="mb-5 fs-6 text-center text-muted">{product.desc}</p>
                      </div>
                    </div>
        ))}
        </div>
    </Container>
    
    
    </>
  )
}

export default Card_page
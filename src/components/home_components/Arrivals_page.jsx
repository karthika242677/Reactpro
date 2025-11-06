import React from 'react'
import { Container } from 'react-bootstrap'
import { all_products } from '../../assets/assets'

const Arrivals_page = () => {
   const arrivalsProducts= all_products.filter(
      (product) => product.category === "new-arrivals"
    )
  return (
    <Container>
      <p className='text-center'>LATEST PRODUCT</p>
      <h1 className='text-center mb-4'>New Arrivals</h1>

      <div className="row">
        {arrivalsProducts.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-3 mb-4">
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
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Arrivals_page

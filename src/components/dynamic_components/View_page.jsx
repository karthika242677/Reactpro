import React, { useContext } from 'react'
import { all_products } from '../../assets/assets'
import { MyContext } from '../../context/ContextProvider';
import arr1 from '../../assets/images/home_page_img/All_products/arr1.png';
import arr2 from '../../assets/images/home_page_img/All_products/arr2.png';
import arr3 from '../../assets/images/home_page_img/All_products/arr3.png';
import arr4 from '../../assets/images/home_page_img/All_products/arr4.png';
import shop7 from '../../assets/images/home_page_img/All_products/shop7.png';
import { useParams } from 'react-router-dom';

const View_page = () => {
  

    const { openIndex,
    setOpenIndex, } = useContext(MyContext);
  const {id}=useParams()
  const selectedProduct = all_products.find(a=>a.id===Number(id))

  return (
    <div className="container mb-5">
      <h1 className="text-center my-2">Shop</h1>
      <div className="d-flex">
      <p>
        <a href="/" className="text-dark">HOME</a> /
        <a href="/shop" className="text-muted">SHOP</a>/
        <a className=" ms-2 fs-3 text-decoration-none text-dark">{selectedProduct.desc}</a>
      </p>
    
      </div>


      <div className="row">
        {/* left images */}
        <div className="col-lg-6">
          <img
          src={selectedProduct.img}
          alt={selectedProduct.type}   // ✅ use selectedProduct here
          className="img-fluid"
        />

          <div className="d-flex justify-content-between flex-wrap mt-3">
            <img src={arr1} alt="" className="mt-2" height={100} width={100} />
            <img src={arr2} alt="" className="mt-2" height={100} width={100} />
            <img src={arr3} alt="" className="mt-2" height={100} width={100} />
            <img src={arr4} alt="" className="mt-2" height={100} width={100} />
            <img src={shop7} alt="" className="mt-2" height={100} width={100} />
          </div>
        </div>

        {/* right product info */}
        <div className="col-lg-6">
          <h1 className="fw-bold">{selectedProduct.desc}</h1>
          <p className="text-muted fs-4">{selectedProduct.price}</p>
          <hr />
          <p className='text-muted'>
            A product short description is a concise and brief overview of a product, providing key information to potential customers. Typically, it is a brief summary that highlights the most important features, benefits, and characteristics of the product. The goal is to quickly communicate relevant details to the consumer and entice them to learn more or make a purchase.
          </p>

          <div className="d-lg-flex d-md-flex gap-4 align-items-center">
            <button className="btn btn-dark my-3 py-2">Add to Cart</button>
          </div>

          <div className="d-flex" role="button">
            <i className="bi fs-5 bi-suit-heart"></i>
            <div className="mx-2 my-1">
              <p>Add to Wishlist</p>
            </div>
          </div>

          <div className="d-flex text-secondary gap-5 mx-4">
            <div>
              <p>Categories</p>
              <p>Tags</p>
            </div>
            <div>
              <p>{selectedProduct.type}</p>
              <p>clothing, etc, fashion, m12, men, products</p>
            </div>
          </div>

          {/* Accordion Section 1 */}
          <div
            className="d-flex justify-content-between align-items-center border-bottom pb-2 mt-4"
            style={{ cursor: 'pointer' }}
            onClick={() => setOpenIndex(!openIndex)}
          >
            <h5 className="mb-0">Description</h5>
            <span className="fs-4">{openIndex ? '-' : '+'}</span>
          </div>
          {openIndex && (
            <div className="mt-3 text-muted">
              <p>
                In WooCommerce, a product description refers to the written content that provides information about a specific product listed on an online store…
              </p>
              <p>
                Each product has its own page where you can input and format the description, add images, set prices, and manage other product-related details.
              </p>
            </div>
          )}

          {/* Accordion Section 2 */}
          <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mt-4"
            style={{ cursor: 'pointer' }}
            onClick={() => setOpenIndex(!openIndex)}
          >
            <h5 className="mb-0">Additional Information</h5>
            <span className="fs-4">{openIndex ? '-' : '+'}</span>
          </div>
          {openIndex && (
            <div className="mt-3 text-muted">
              <p>Here you can show size chart, material, weight etc…</p>
            </div>
          )}
          <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mt-4"
            style={{ cursor: 'pointer' }}
            onClick={() => setOpenIndex(!openIndex)}
          >
            <h5 className="mb-0">Reviews</h5>
            <span className="fs-4">{openIndex ? '-' : '+'}</span>
          </div>
          {openIndex && (
            <div className="review py-4">
                <h4>Reviews</h4>
                <p className="text-secondary">There are no reviews yet.</p>
                <h4 className="mt-5">Be the first to review “Dime Classic Remastered Hoodie, black”</h4>
                <p className="text-secondary mt-5">Your email address will not be published. Required fields are marked *</p>
                <p className="text-secondary">Your rating *</p>
                <div className="d-flex text-secondary ratings">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <p className="mt-5">Your review*</p>
                    <textarea name="" rows="9" id="" className="w-100"></textarea>
                    <div className="row my-3">
                        <div class="col-lg-6 col-md-6">
                            <p>Name*</p>
                            <input type="text" className="w-100 p-2"/>
                        </div>
                            <div class="col-lg-6 col-md-6">
                                <p>Email*</p>
                                <input type="email" class="w-100 p-2"/>
                            </div>
                    </div>
                        <input type="checkbox"/>
                        <label for="" className="mx-3 text-secondary">Save my name, email, and website in this browser for the next time I comment.</label>
                        <button class="btn btn-dark px-5 py-2 my-5">Submit</button>
                </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default View_page;

import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { MyContext } from '../../context/ContextProvider';

const Shop_prod = () => {
  const { addToCart, addToWishlist, navigate, filteredProducts } = useContext(MyContext);

  return (
    <div className="container mb-5">
      {/* Header */}
      <h1 className='text-center'>Shop</h1>
      <p className='text-center'>
        <a href='/' className='text-dark'>HOME</a> /{' '}
        <span className='text-muted'>SHOP</span>
      </p>

      {/* Sorting / View */}
      <div className="d-flex justify-content-between align-items-center text-muted p-3 rounded mb-3">
        <p className="mb-0">Showing {filteredProducts.length} results</p>

        <Dropdown>
          <Dropdown.Toggle variant='secondary' className='border rounded' id="dropdown-basic">
            Default sorting
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Icons for view */}
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-grid-fill fs-5 p-2 border rounded"></i>
          <i className="bi bi-list-task fs-5 p-2 border rounded"></i>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-3 mb-4">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "250px",
                  overflow: "hidden",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/Dynamic/${product.id}`)}
              >
                <img
                  src={product.img}
                  alt={product.type}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                {/* Overlay icons */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <i
                    className="bi bi-cart"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.53)",
                      borderRadius: "40%",
                      padding: "10px",
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent navigating to detail
                      addToCart(product);
                    }}
                  ></i>

                  <i
                    className="bi bi-heart"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.53)",
                      borderRadius: "40%",
                      padding: "10px",
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToWishlist(product);
                    }}
                  ></i>
                </div>
              </div>

              <p className="mb-2">{product.type}</p>
              <p className="mb-2 text-muted">{product.desc}</p>
              <p className="fw-bold">{product.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No products found</p>
        )}
      </div>
    </div>
  );
};

export default Shop_prod;

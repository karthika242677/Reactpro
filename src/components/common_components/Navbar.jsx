import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { logo } from "../../assets/assets";
import { MyContext } from "../../context/ContextProvider";

const CustomNavbar = () => {
  const {
    wishlist,
    cart,
    searchFun,
    input,
    removeFromWishlist,
    removeFromCart  } = useContext(MyContext);

  return (
    <>
      {/* Top Banner (hidden on small screens) */}
      <Container fluid className="bg-light py-2 text-center border-bottom d-none d-md-block">
        <p className="mb-0 small">
          Free shipping on US orders $100+ & Free exchanges
        </p>
      </Container>

      {/* Main Navbar */}
      <div className="d-flex flex-wrap justify-content-between align-items-center py-3 px-3">
        {/* Logo */}
        <div className="flex-shrink-0 mb-2 mb-md-0">
          <img src={logo.logos} alt="Logo" style={{ height: "40px" }} className="img-fluid" />
        </div>

        {/* Menu */}
        <div className="d-flex flex-wrap justify-content-center gap-3 flex-grow-1 mb-2 mb-md-0">
          <a href="/" className="text-dark text-decoration-none">
            HOME
          </a>
          <a href="/Shop" className="text-dark text-decoration-none">
            SHOP
          </a>
          <a href="/Pages" className="text-dark text-decoration-none">
            PAGES
          </a>
          <a href="/Blog" className="text-dark text-decoration-none">
            BLOG
          </a>
          <a href="/Contact" className="text-dark text-decoration-none">
            CONTACT
          </a>
        </div>

        {/* Icons */}
        <div className="d-flex align-items-center gap-3 ms-3">
          {/* Search */}
          <i
            className="bi bi-search"
            style={{ cursor: "pointer", fontSize: "20px" }}
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
            aria-label="Search"
          ></i>

          {/* Wishlist */}
          <div className="position-relative">
            <i
              className="bi bi-heart"
              data-bs-toggle="modal"
              data-bs-target="#wishlistModal"
              aria-label="Wishlist"
              style={{ fontSize: "20px", cursor: "pointer" }}
            ></i>
            {wishlist.length > 0 && (
              <span
                className="badge bg-danger rounded-pill position-absolute"
                style={{ top: "-6px", right: "-10px", fontSize: "10px" }}
              >
                {wishlist.length}
              </span>
            )}
          </div>

          {/* Cart */}
          <div className="position-relative">
            <i
              className="bi bi-cart"
              data-bs-toggle="modal"
              data-bs-target="#cartModal"
              aria-label="Cart"
              style={{ fontSize: "20px", cursor: "pointer" }}
            ></i>
            {cart.length > 0 && (
              <span
                className="badge bg-danger rounded-pill position-absolute"
                style={{ top: "-6px", right: "-10px", fontSize: "10px" }}
              >
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 🔍 Search Modal */}
      <div className="modal fade" id="searchModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3"style={{backgroundColor:"lightgreen"}}>
            <div className="modal-header border-0">
              <h5 className="modal-title">Search Products</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
             <input
            type="text"
            className="form-control"
            placeholder="Type product name..."
            value={input}
            onChange={(e) => searchFun(e.target.value)}
          />

            </div>
          </div>
        </div>
      </div>

      {/* ❤️ Wishlist Modal */}
      <div className="modal fade" id="wishlistModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-3"style={{backgroundColor:"lightgreen"}}>
            <div className="modal-header border-0">
              <h5 className="modal-title">Wishlist Products</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body table-responsive">
              <table className="table align-middle text-center">
                <thead className="table-light">
                  <tr>
                    <th>Image</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.length > 0 ? (
                    wishlist.map((product, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            src={product.img}
                            alt={product.type}
                            style={{ width: "70px", height: "70px", objectFit: "cover" }}
                          />
                        </td>
                        <td>{product.type}</td>
                        <td>{product.price}</td>
                        <td>
                          <i
                            className="bi bi-x-circle text-danger"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => removeFromWishlist(product.id)}
                            title="Remove"
                          ></i>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-muted">
                        No products in wishlist
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* 🛒 Cart Modal */}
      <div className="modal fade" id="cartModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-3"style={{backgroundColor:"lightblue"}}>
            <div className="modal-header border-0">
              <h5 className="modal-title">Cart Products</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body table-responsive">
              <table className="table align-middle text-center">
                <thead className="table-light">
                  <tr>
                    <th>Image</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length > 0 ? (
                    cart.map((product, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            src={product.img}
                            alt={product.type}
                            style={{ width: "70px", height: "70px", objectFit: "cover" }}
                          />
                        </td>
                        <td>{product.type}</td>
                        <td>{product.price}</td>
                        <td>
                          <i
                            className="bi bi-x-circle text-danger"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => removeFromCart(product.id)}
                            title="Remove"
                          ></i>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-muted">
                        Your cart is empty
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;

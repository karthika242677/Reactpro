import React, { useContext } from "react";
import { faq } from "../../assets/assets";
import { MyContext } from "../../context/ContextProvider"; // adjust path

const Accord_page = () => {
  const { openIndex, toggleAccordion } = useContext(MyContext);

  return (
    <div className="container my-5">
      <h1 className="text-center display-2">FAQs</h1>
      <p className="text-center">
        <a href="/" className="text-dark">HOME</a> /
        <a href="/blog" className="text-muted">FAQ</a>
      </p>
      <div className="row">
        {faq.map((item, index) => (
          <div key={index} className="col-lg-6">
            <div
              className="d-flex justify-content-between align-items-center border p-3 mt-3"
              style={{ cursor: "pointer" }}
              onClick={() => toggleAccordion(index)}
            >
              <h5 className="mb-0">{item.question}</h5>
              <span className="fs-4">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="border-start border-end border-bottom p-3 text-muted">
                <p className="mb-0">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accord_page;

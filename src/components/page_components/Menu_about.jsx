
import React, { useContext } from "react"; // <-- added useContext here
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { about, tabs } from "../../assets/assets"; // import both at once
import { MyContext } from "../../context/ContextProvider";

const Menu_about = () => {
  const {  openIndex,
    setOpenIndex,} = useContext(MyContext);

  return (
    <Container className="my-4">
      {/* Tabs */}
      <Row className="mt-5">
        <Col>
          <ButtonGroup
            className="d-flex flex-nowrap overflow-auto"
            style={{ scrollbarWidth: "thin" }} // optional styling
          >
            {tabs.map((tab) => (
              <Button
                key={tab.key}
                variant={openIndex === tab.key ? "light" : "outline-secondary"}
                className="fs-3 border-0 fw-bold"
                onClick={() => setOpenIndex(tab.key)}
              >
                {tab.label}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>

      <hr />

      {/* Content */}
      <Row className="mt-4">
        <Col>
          {openIndex === "about" && (
            <div className="row">
              <div className="col-12 col-lg-6">
                <img src={about.abt} alt="About Mixtas" className="img-fluid" />
              </div>
              <div className="col-12 col-lg-6">
                <h1 className="mt-5 ms-5">Unveiling Your</h1>
                <h1 className="ms-5">Unique Fashion</h1>
                <h1 className="mb-5 ms-5">Journey</h1>
                <p className="mb-4 fs-5 ms-5">
                  Welcome to Mixtas Store, where fashion meets individuality, and
                  style is more than just clothing – it's a statement. Our
                  passion for fashion drives us to curate a collection that
                  celebrates diversity, embraces trends, and empowers you to
                  express yourself through clothing.
                </p>
              </div>
            </div>
          )}

          {openIndex === "ourstory" && (
            <div className="row">
             <div className="col-12">
           <p className="mt-4 text-muted">
               In the heart of [Your City], a dream was woven into the fabric of reality – the dream of creating a clothing haven that resonates with style enthusiasts, trendsetters, and those who seek to express themselves through fashion. Welcome to [Your Store Name], where every stitch tells a story.
             </p>
             <p className="mt-4 text-muted">
              Founded [Year], [Your Store Name] emerged from a passion for clothing and a commitment to providing a curated collection that transcends mere fashion trends. Our journey began with the belief that clothing is not just about covering the body; it’s a canvas for self-expression, an art form that reflects individuality.
             </p>
             <p className="mt-4 text-muted">
               What sets us apart is our dedication to offering more than just garments – we curate experiences. From the luxurious touch of premium fabrics to the meticulous craftsmanship of each design, every piece at [Your Store Name] is a testament to our commitment to quality and style. Our curated selection embraces the essence of contemporary trends while celebrating the enduring charm of timeless classics.
             </p>
             <p className="mt-4 text-muted">
               At [Your Store Name], we understand that fashion is more than a fleeting moment; it’s an ongoing narrative. Our collections are thoughtfully curated to tell stories that resonate with diverse tastes, preferences, and lifestyles. We believe in empowering our customers to embrace their unique identities through the choices they make in our store.
               </p>
              <p className="mt-4 text-muted">
                 Beyond the racks of clothing, [Your Store Name] is a community – a gathering place for fashion enthusiasts to connect, explore, and celebrate the art of dressing well. Our team is passionate about assisting you in creating looks that speak volumes and stand the test of time.
               </p>
               <p className="mt-4 text-muted">
               As we continue to evolve, our commitment remains unwavering – to inspire confidence, foster self-expression, and redefine the way you experience fashion. Thank you for being a part of our story, and we look forward to helping you script your own fashion narrative at [Your Store Name].”               </p>
              <p className="mt-4 mb-5 text-muted">
                Feel free to customize the details to align with your store’s unique history and vision.
               </p>
              </div>
            </div>
          )}

          {openIndex === "mission" && (
            <div className="row">
              <div className="col-12">
                <p className="mt-4 mb-5 text-muted">
                  At [Your Store Name], we are driven by a singular mission: to
                  empower individuals through the art of fashion. We believe that
                  clothing is not just a means of covering the body but a
                  powerful tool for self-expression, confidence, and
                  individuality.
                </p>
                <ol type="1">
                  <li>
                    <p className="mt-4 mb-4 text-muted">
                      <b>Curate Exceptional Style</b>: We are committed to curating a
                      diverse and exceptional collection of clothing that
                      transcends the boundaries of fashion. Our mission is to
                      offer a carefully selected range of garments that reflect
                      the latest trends, timeless classics, and unique pieces
                      that resonate with our customers.
                    </p>
                  </li>
                  <li>
                    <p className="mb-4 text-muted">
                      <b>Quality Craftsmanship</b>: We prioritize quality craftsmanship in every stitch and detail. Our dedication to superior craftsmanship ensures that each garment is not just a piece of clothing but a work of art, designed to stand the test of time.
                    </p>
                  </li>
                  <li>
                    <p className="mb-4 text-muted">
                     <b> Celebrate Diversity:</b> Fashion is a universal language, and we celebrate the diversity of styles and tastes. Our mission is to provide a space where individuals from all walks of life can find clothing that aligns with their unique identity and personal expression.
                    </p>
                  </li>
                  <li >
                    <p className="mb-4 text-muted">
                     <b>Customer Empowerment:</b> We strive to empower our customers to embrace their individuality with confidence. Our team is committed to providing personalized assistance, style advice, and a seamless shopping experience that goes beyond transactions to create lasting connections. 
                 </p>
                  </li>
                  <li>
                    <p className="mb-4 text-muted">
                      <b>Sustainable Choices: </b>As stewards of the environment, we are dedicated to making sustainable choices in our business practices. We actively seek eco-friendly materials, ethical manufacturing processes, and sustainable packaging options to contribute to a more conscious and responsible fashion industry.
                    </p>
                  </li>
                  <li className="unstyled">
                <p className="mb-4 text-muted">
                  <b>Community Engagement:</b> [Your Store Name] is more than just a place to shop; it’s a community. Our mission extends beyond fashion to create a space where like-minded individuals can connect, share inspiration, and foster a sense of belonging.
                </p>

                  </li>
                  <li>
                <p className="mb-5 text-muted">
                  <b>Innovation and Adaptability: </b>In a dynamic and ever-changing fashion landscape, we embrace innovation and adaptability. Our mission is to stay ahead of the curve, offering the latest trends and technological advancements that enhance the overall shopping experience.
                  </p>
                  </li>
                </ol>
            <p className="mt-5 text-muted">
              At [Your Store Name], our mission is not just about selling clothes; it’s about fostering a culture of confidence, creativity, and self-expression. Join us on this journey as we continue to redefine the way you experience fashion.”
            </p>
            <p className="mt-2 text-muted">
              Feel free to modify the mission statement to align with the specific values and goals of your clothing store.


            </p>

              </div>
            </div>
          )}

          {openIndex === "connect" && (
            <div className="row">
              <div className="col mb-5 mt-3">
            <h1>Affilate Program</h1>
              <ul type="dot">
                <li className="text-muted mt-3 mb-3">
                  Build your own online sporting goods store!
                </li>
              <li className="text-muted mb-3">If you have a web site, you can make money selling sporting goods products. It’s easy and it’s free to join.
        </li>
      <li className="text-muted mb-5">
        <b>Click here to join now</b> and earn commissions of up to 6%

      </li>
              </ul>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Menu_about;


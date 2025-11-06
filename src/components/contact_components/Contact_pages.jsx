import React from 'react'

const Contact_pages = () => {
  return (
    <>
    <div className="container my-5">

        <div className="row">
            <div className="col-lg-3 col-md-3 col-12 mt-5">
                <div className="text-center">
                <i className="fa-solid bi-geo-alt-fill text-light bg-dark fa-2x p-4 rounded-circle"></i>
                <h5 className="my-3 mt-5 mb-2">Store Address</h5>
                <p className="text-secondary">PO Box 16122 Collins Street West Victoria 8007 Australia</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12 mt-5">
                <div className="text-center">
                    <i className="bi bi-telephone-fill text-light bg-dark fa-2x p-4 rounded-circle"></i>
                    <h5 className="my-3 mt-5 mb-2">Call Info</h5>
                    <p className="text-secondary">Open a chat or give us call at <br/> <b>+61 3 8376 6284</b></p>
                    </div>
                </div>
            <div className="col-lg-3 col-md-3 col-12 mt-5">
                <div className="text-center">
                    <i className="bi bi-envelope-fill text-light bg-dark fa-2x p-4 rounded-circle"></i>
                    <h5 className="my-3 mt-5 mb-2">Email support</h5>
                    <p className="text-secondary">Sent mail to <br/> <b>support@mixtas.com</b></p>
                    </div>
                </div> 
            <div className="col-lg-3 col-md-3 col-12 mt-5">
                <div className="text-center">
                    <i className="bi bi-chat-left-fill text-light bg-dark fa-2x p-4 rounded-circle"></i>
                    <h5 className="my-3 mt-5 mb-2">Live Support</h5>
                    <p className="text-secondary">Live chat service <br/> <b>https://www.livechat.com</b></p>
                    </div>
                </div>        
        </div>
            <div className="row my-5">
                <div className="col-lg-6 col-md-6 col-12">
                    <p className="display-5"><b>Get In Touch</b></p>
                    <div>
                        <input type="text" placeholder="Your Name" className="border-bottom py-3 px-3 w-100 border-0 my-3"/>
                        <input type="text" placeholder="Your email" className="border-bottom py-3 px-3 w-100 border-0 my-3"/>
                        <input type="text" placeholder="Subject" className="border-bottom py-3 px-3 w-100 border-0 my-3"/>
                        <textarea rows="9" placeholder="Your Message (optional)" className="border-bottom py-3 px-3 w-100 border-0 my-3"></textarea>
                        <button className="btn btn-dark px-4 my-3 py-2 rounded-0">Send Message</button>
                    </div>
                </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.696701121622!2d144.9438463867357!3d-37.820572599710616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5a3ff30273%3A0x55700729bcaebb85!2s16122%20Collins%20St%2C%20West%20Melbourne%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sin!4v1733587516525!5m2!1sen!2sin" className="w-100 h-100"></iframe>
                        </div>
            </div>
    </div>
    
    </>
  )
}

export default Contact_pages
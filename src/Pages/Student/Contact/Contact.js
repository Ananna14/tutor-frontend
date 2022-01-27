import React from 'react'
import './Contact.css'
import banner from '../../../bannerImages/Contact us_topbanner_cropped.jpg'


const Contact = () => {
    return (
        <div className='container'>
            <img src={banner} class='img-fluid' alt="" />
            <h2 className='text-center my-5'>Contact Us</h2>
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img className='img' src="https://i.ibb.co/nbPmCNc/Capture.png" alt="" />
                            <h5 className='text-center my-5 fw-bold'>OUR LOCATION</h5>
                            <p className='text-center my-5'>PO Box 97845 Baker st. 567,<br />
                                Los Angeles, California, US.</p>
                        </div>
                        <div class="col">
                            <img className='img' src="https://i.ibb.co/Gssbqyb/Capture.png" alt="" />
                            <h5 className='text-center my-5 fw-bold'>CONTACT US</h5>
                            <p className='text-center my-5'>Mobile: (+04) 600 444 999<br />
                                Fax: (+04) 600 888 222</p>
                        </div>
                        <div class="col">
                            <img className='img' src="https://i.ibb.co/NnNQ7Ct/Capture.png" alt="" />
                            <h5 className='text-center my-5 fw-bold'>CONTACT US</h5>
                            <p className='text-center my-5'>Support24/7@domain.com<br />
                                Info@domain.com</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* form */}
            <div className='mx-auto px-lg-5'>
                <h1 className='text-center my-5'>Leave a Message</h1>
                <form className=''>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder='Name' id="exampleInputEmail1" />
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" placeholder="Email" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" placeholder="Subject" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <textarea type="password" class="form-control" placeholder="Message" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-color">SEND YOU MESSAGE</button>
                </form>
            </div>
        </div>

    )
}

export default Contact

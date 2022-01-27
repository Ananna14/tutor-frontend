import React from 'react'
import logo from '../../../bannerImages/logo-tutor-finder-1.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='text-center p-5 bg-black top-design'>
            <img height={80} src={logo} alt="" /><br /><br />
            {/* icon-start */}
            <h5 className='footer-design'>Finder your best teacher from one place</h5>
            <h3 className='footer-design'><a href="https://www.youtube.com/results?search_query=programing+english+tutorial"><i class="fab fa-youtube mx-2"></i></a>
                <a href="https://www.facebook.com/"><i class="fab fa-facebook mx-2"></i></a>
                <a href="https://www.linkedin.com/in/fahmida14/"><i class="fab fa-linkedin mx-2"></i></a>
                <a href="https://github.com/Ananna14"><i class="fab fa-github mx-2"></i></a>
                <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><i class="fab fa-twitter mx-2"></i></a></h3>
            {/* icon-end */}
            <hr />

            <div className='gap-design'>
                <h3 className='white my-10'>CONTACT US</h3>
                <div className='d-flex footer-design'>
                    {/* 1-column */}
                    <div>
                        <h5><i class="fas fa-home mx-3"></i></h5>
                        <h5><i class="fas fa-phone-square"></i></h5>
                        <h5><i class="fas fa-envelope-open-text"></i></h5>
                        <h5><i class="fas fa-clock mx-2"></i></h5>
                    </div>

                    <div>
                        <h5>1115 Broadway, 11th Fl, New York, NY 10010</h5>
                        <h5>646-481-5228</h5>
                        <h5>Thimpresssupports@gmail.com</h5>
                        <h5>Daily: 10:00 am – 5:00 pm</h5>
                    </div>

                </div>
            </div>
            <div>
            </div>
            <p className='copyright'>Copyright 2022 Tutor-Finder</p>
        </div>
    )
}

export default Footer

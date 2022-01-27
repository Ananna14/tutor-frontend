import React from 'react'
import pic1 from '../../../bannerImages/image01.jpg'
import pic2 from '../../../bannerImages/image02.jpg'
import pic3 from '../../../bannerImages/photo-mixed-race-boy-girl-classmates-watch-tutorial-video-together-laptop-computer_273609-28629.jpg'
import { Carousel } from 'react-bootstrap'

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic1}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic2}
            alt="Second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner

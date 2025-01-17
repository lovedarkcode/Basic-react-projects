import React, { useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import doc1 from "../assets/img/doc1.jpg"
import doc2 from "../assets/img/doc2.jpg"
import doc3 from "../assets/img/doc3.jpg"
import doc4 from "../assets/img/doc4.jpg"
import doc5 from "../assets/img/doc5.jpg"
import doc6 from "../assets/img/doc6.jpg"

function Doctor() {
  const data = [
    { img: doc1, name: "Dr. John Doe" },
    { img: doc2, name: "Dr. Jane Smith" },
    { img: doc3, name: "Dr. Sam Brown" },
    { img: doc4, name: "Dr. Lisa White" },
    { img: doc5, name: "Dr. Mark Green" },
    { img: doc6, name: "Dr. Nancy Black" }
  ]

  const sliderRef = useRef(null)

  const NextArrow = (props) => {
    const { onClick } = props
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }

  const PrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {data.map((doctor, index) => (
          <div key={index}>
            <img src={doctor.img} alt={doctor.name} />
            <h3>{doctor.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Doctor
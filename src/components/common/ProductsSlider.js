import React from 'react'
import { Col } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import DotIcon from '../../assets/images/icon/dot.svg'
import ProIcon from '../../assets/images/Mask-Group-39.png'
import IndianRupee from '../../assets/images/icon/Indian-Rupee.svg'


export default function CustomSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
	disableHostCheck: true
  };
  return (
    <Slider {...settings}>
      	<div className="item">
			<Col lg={12} md={12} sm={12} xs={12}>
				<div className="menu-item">
					<div className="item-type">
						<img src={DotIcon} alt="dot" width="10" />
					</div>
					<img className="dish-img" src={ProIcon} alt="" width="100%" />
					<h4 className="item-heading">Red Sauce Pasta</h4>
					<p className="item-tittle">Lorem ipsum dolor sit ame</p>
					<span className="item-price">
						<img src={IndianRupee} alt="" width="100%" />159
					</span>
				</div>
			</Col>
		</div>
    </Slider>
  );
}

<section className="process-section">
	<div className="container-fluid container-fluid-max">
		<div className="background-bee-img"></div>

	</div>
</section>
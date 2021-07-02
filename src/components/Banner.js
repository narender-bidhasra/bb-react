import React from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap';
import Zomato from '../assets/images/icon/Group-692.svg'
import Swiggy from '../assets/images/icon/Group-693.svg'

const BannerSection = () => {
    return(
        <section className="banner-section">
			<Container fluid>
				<Row>
					<Col lg={4} md={12} sm={12} xs={12}>
						<div className="banner-title">
							<h1 className="banner-title-heading">Delightful <span className="food">Food</span></h1>
							<p className="banner-title-pera mt-3">Order your meal online now</p>
							<Button variant="primary" className=" main-btn mt-5">PLACE YOUR ORDER</Button>
							<div className="banner-order-via">
								<p>Or order via</p>
                                <img src={Zomato} alt="Zomato" />
                                <img src={Swiggy} alt="Swiggy" />
                            </div>
						</div>
					</Col>
                    <Col lg={8} md={12} sm={12} xs={12} className="banner-background-img">
						<Button variant="primary" className=" main-btn banner-btn">ORDER NOW</Button>
					</Col>
				</Row>
			</Container>
		</section>
    )
}

export default BannerSection
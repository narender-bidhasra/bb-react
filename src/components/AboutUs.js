import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import AboutImg from "../assets/images/icon/Group-770.svg"
import AboutInfo1 from "../assets/images/Mask-Group-12.png"
import AboutInfo2 from "../assets/images/restaurant-manager-with-his-kitchen-staff.png"


const AboutSection = () => {
    return(
        <section className="section-about-us">
			<div className="bc-img-about"></div>
			<Container fluid>
				<Row>
					<Col lg={6} md={12} sm={12} xs={12}>
						<div className="about-us-card">
							<div className="about-info">
                                <img className="about-bee-img" src={AboutImg} alt="" width="30" />
								<h3 className="tittle-heading">What Inspired Us?</h3>
								<p className="about-min-tittle">Protect and Celebrate the Bees</p>
								<p className="tittle-pera">“I always dreamt of opening a restaurant and while I was juggling to find a name for it, a 
								notification popped on my mobile that said Bees are dying at an alarming rate. That's when I decided it has to be 
								BitesBee. Here's a fact: 90% of the world's nutrition is reliant on pollinators and Bees are heavily responsible for 
								crop pollination. Without them, our ecosystem will collapse. So, here we are - protecting the bees and celebrating 
								them by serving you home-like meals healthy, fresh and at pocket-friendly prices.”</p>
								<span className="team-name">- Satish Saini</span> </div>
							<div className="path-img"></div>
						</div>
					</Col>
					<Col lg={6} md={12} sm={12} xs={12}>
						<div className="row about-i">
							<Col lg={6} md={6} sm={12} xs={12} className="btn-postion">
								<div className="about-img-info">
                                    <img src={AboutInfo1} alt="" width="100%" /> </div>
								<Button className="main-btn about-info-btn">ABOUT US</Button>
							</Col>
							<Col lg={6} md={6} sm={12} xs={12} className="btn-postion">
								<div className="about-img-info">
                                    <img src={AboutInfo2} alt="" width="100%" />
                                </div>
								<Button className="main-btn about-info-btn">OUR TEAM</Button>
							</Col>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
    )
}

export default AboutSection
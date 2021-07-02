import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import LiciousImg from "../assets/images/icon/Group-403.svg"
import ZomatoIcon from "../assets/images/icon/Group-692.svg"
import SwiggyIcon from "../assets/images/icon/Group-693.svg"
import CloudIcon1 from "../assets/images/icon/Group-401.png"
import CloudIcon2 from "../assets/images/icon/Group-402.png"
import BikerideImg from "../assets/images/bikeride.png"


const BeeLiciousSection = () => {
    return(
        <section className="section-bee-licious">
            <Container fluid>
                <Row>
                    <Col lg={5} md={12} sm={12} xs={12}>
                        <div className="bee-licious-card">
                            <img className="bee-licious-img" src={LiciousImg} alt="" width="30" />
                            <h3 className="tittle-heading">Bee-licious Food At Your Doorstep</h3>
                            <p className="tittle-pera">Stay Home. Stay Safe. Our hygienic and well-sanitised bees are at work for you. We'll deliver you the best taste wrapped in wholesome goodness and deliver it fresh at your doorstep, contactless.</p>
                            <Button className="main-btn mt-3">ORDER NOW</Button>
                            <div className="mt-5">
                                <p className="text-bee-licious">Also available on</p>
                                <img src={ZomatoIcon} alt="zomato" style={{marginRight: '10px'}} />
                                <img src={SwiggyIcon} alt="Swiggy" />
                            </div>
                            <div className="path-img bt-size"></div>
                        </div>
                    </Col>
                    <Col lg={7} md={12} sm={12} xs={12}>
                        <div className="Bee-licious-right-section">
                            <img className="cloud-1" src={CloudIcon1} alt="cloud" width="100%" />
                            <img className="cloud-2" src={CloudIcon2} alt="cloud" width="100%" />
                            <img className="bike-rider-img" src={BikerideImg} alt="bikeride" width="100%" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BeeLiciousSection
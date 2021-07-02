import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import BeepIcon from "../assets/images/beep.png"

const SinglOfferSection = () => {
    return(
        <section className="section-single-offer">
            <div className="background-bee-img"></div>
            <Container fluid>
                <Row>
                    <Col lg={6} md={12} xs={12} xs={12} className="bee-Offer-section">
                        <div className="bee-Offer-shadow"></div>
                        <img className="bee-Offer" src={BeepIcon} alt="beep" width="100%" />
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12} className="d-flex offer-div">
                        <div className="contant-div">
                            <h3 className="tittle-heading">Never Miss a Single Offer</h3>
                            <p className="offer-tittle mt-4">Join the BitesBee hive and we’ll keep you buzzing with latest offers.</p>
                            <input className="subscribe-filed mt-5" placeholder="Enter Email Address" type="email" />
                            <Button className="main-btn mt-4 float-right">SUBSCRIBE</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SinglOfferSection
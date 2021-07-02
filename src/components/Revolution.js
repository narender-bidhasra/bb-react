import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import RevImg from "../assets/images/Mask-Group-15.png"


const RevolutionSection = () => {
    return(
        <section className="section-revolution">
            <Container fluid>
                <div className="background-bee-img"></div>
                <Row>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className="revol-img">
                            <img src={RevImg} alt="" width="100%" />
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className="revolution-info-card">
                            <h3 className="tittle-heading">Bee a Part of the Revolution</h3>
                            <p className="tittle-pera">Do you dream to have your own restaurant but lack the expertise to set up and run a food business? Then, seize this opportunity. With just one-time investment, you can own the profitable franchise of BitesBee in your city and fast track your journey by attaching a well-known brand name. Get in touch for more details!</p>
                            <Button className="main-btn mt-5">GET FRANCHISE</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default RevolutionSection
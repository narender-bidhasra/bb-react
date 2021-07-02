import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import FoodMan from "../assets/images/Group-776.svg"

const Endless = () => {
    return(
        <section className="section-endless-food">
			<Container fluid>
				<Row>
					<Col lg={6} md={6} sm={12} xs={12}>
                        <img src={FoodMan} alt="Food Man" width="100%" />
                    </Col>
					<Col lg={6} md={6} sm={12} xs={12}>
						<h3 className="tittle-heading">Endless Food Choices</h3>
						<p className="tittle-pera">Feeling hungry? Say No More. From Chinese, Italian, American, North Indian, South Indian to Street Bites and Confectionery, we've got all your cravings sorted. Mindfully chosen ingredients are combined with natural honey to create recipes that tingle your taste buds and promote wellness.</p>
						<p className="tittle-pera"> Fasten your napkins and get ready to dive into the pool of flavors at BitesBee where you will taste the difference with a hint of wholesome sweetness of honey.</p>
						<Button variant="primary" className="main-btn mt-5">EXPLORE ALL CUISINES</Button>
					</Col>
				</Row>
			</Container>
			<div className="left-background-image"></div>
			<div className="right-background-image"> </div>
		</section>
    )
}

export default Endless
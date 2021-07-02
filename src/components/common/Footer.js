import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import SocialMedia from './SocialMedia'
import iconG1 from '../../assets/images/icon/Group-4938.svg'
import iconG2 from '../../assets/images/icon/Group-4937.svg'
import iconG3 from '../../assets/images/icon/Group-421.svg'

const Menus = [
	{
		index: 1,
		link: '/home',
		label: "Home"
	},
	{
		index: 2,
		link: '/our-story',
		label: "Our Story"
	},
	{
		index: 3,
		link: '/franchise',
		label: "Franchise"
	},
	{
		index: 4,
		link: '/contact',
		label: "Contact"
	},
	{
		index: 5,
		link: '/team',
		label: "Team"
	},
	{
		index: 6,
		link: '/beelog',
		label: "Beelog"
	}
]
const Support = [
	{
		index: 7,
		link: '/faq',
		label: "FAQs"
	},
	{
		index: 8,
		link: '/privacy-policy',
		label: "Privacy Policy"
	}
]

const Footer = () => {
	return(
		<footer className="footer-section">
			<div className="bee-bc-img"></div>
			<Container fluid>
				<Row>
					<Col lg={3} md={6} sm={12} xs={12}>
						<h5 className="footer-header">Menu</h5>
						<div className="footer-menus">
							{Menus.map(({ label, ...rest }, index) => (
								<a href="#" key={index + 'ft-1'}>{label}</a>
							))}
						</div>
					</Col>
					<Col lg={3} md={6} sm={12} xs={12}>
						<h5 className="footer-header">Support</h5>
						<div className="footer-menus">
							{Support.map(({ label, ...rest}, index) => (
								<a href="#" key={index + 'ft-2'}>{label}</a>
							))}
						</div>
					</Col>
					<Col lg={3} md={6} sm={12} xs={12}>
						<h5 className="footer-header">Contact</h5>
						<a href="#" style={{color: '#FFC545'}}>+91 8571016161</a>
						<a href="#" style={{color: '#FFC545'}}>hi@bitesbee.Com</a>
						<a href="#">G-016, Bestech Business Towers, Sector 66, Mohali, Punjab, 160066</a>
					</Col>
					<Col lg={3} md={6} sm={12} xs={12}>
						<h5 className="footer-header ">Download Our App</h5>
						<div className="d-flex justify-content-between rp-sm">
							<a href="#">
								<img src={iconG1} alt="store" />
							</a>
							<a href="#">
								<img src={iconG2} alt="store" />
							</a>
						</div>
					</Col>
				</Row>
				<hr style={{borderTop: '1px solid #696969'}} />
				<Row className="copy-right justify-content-between mt-5">
					<Col lg={4} md={12} sm={12} xs={12}>
						<img src={iconG3} alt="store" />
					</Col>
					<Col lg={4} md={12} sm={12} xs={12} className="text-center item-center-footer">
						<a href="#"> © BitesBee 2021. All rights reserved.</a>
					</Col>
					<Col lg={4} md={12} sm={12} xs={12} className="item-center-footer justify-content-md-end">
						<SocialMedia />
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
import React from 'react'
import logo from '../../assets/images/logo.svg'
import menuIcon from '../../assets/images/icon/menu-icon.svg'
import { Container } from 'react-bootstrap'

const MainMenu = [
    {
        index: 1,
        link: '/menu',
        label: "MENU"
    },
    {
        index: 2,
        link: '/online-order',
        label: "ONLINE ORDER"
    }
]

const Header = () => {
    return(
        <header className="fixed-top page-header">	
            <Container fluid>
                <nav id="navbar" className="navbar navbar-expand-lg justify-content-between">
                    <a href="#">
                        <img src={logo} alt="Logo" />
                    </a>
                    <div className="nav-menu">
                        {MainMenu.map(({label, index, ...rest}) => (
                            <a href="" key={index}>{label} <div className="line-header"></div></a>
                        ))}
                    </div>
                    <a href="#">
                        <img src={menuIcon} alt="Menu Icon" />
                    </a>
                </nav>
            </Container>
        </header>
    )
}
    
export default Header
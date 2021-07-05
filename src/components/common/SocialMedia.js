import React from 'react'
import iconFB from '../../assets/images/icon/Icon-awesome-facebook-f.svg'
import iconTW from '../../assets/images/icon/Icon-awesome-twitter.svg'
import iconIG from '../../assets/images/icon/Icon-feather-instagram.svg'

const SocialMedia = () => {
	return(
        <div className="footer-social-icon">
            <a href="/">
                <img src={iconFB} alt="facebook" />
            </a>
            <a href="/">
                <img src={iconTW} alt="twitter" />
            </a>
            <a href="/">
                <img src={iconIG} alt="instagram" />
            </a>
            <a href="/">
                <img src={iconTW} alt="twitter" />
            </a>
            <a href="/">
                <img src={iconFB} alt="facebook" />
            </a>
        </div>
    )
}

export default SocialMedia
import React from 'react'
import {Element} from 'react-scroll'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Contact.css'

const Contact = () => {
    return (
        
    <Element className='contact' id='contact'>
        <h1>Contact Us</h1>
        <div className='contact_'>
            <strong><p>
                Email : <span>shankaeducationalacademy@gmail.com</span>
            </p>
            <p>
                Mobile : <span>9841092007</span>
            </p>
            <p class="address">
                Address: <span>Shanka Educational Academy<br />
                <span className='n'>No:10c , Shanthi Nagar, Jamaliya link road,</span><br />
                <span>Jamaliya, Perambur, Chennai: 600012</span></span>
            </p></strong>


            <div className='icons'>
                <strong>
                <a href='https://www.facebook.com/profile.php?id=61553004870661'>
                <FacebookIcon />
                </a>
                <a href='https://instagram.com/shankaacademy?igshid=OGQ5ZDc2ODk2ZA=='>
                <InstagramIcon />
                </a>
                <a href='https://www.linkedin.com/in/shanka-educational-academy-905239297/'>
                <LinkedInIcon />
                </a>
                <a href='https://www.linkedin.com/in/jobszone-now-9a8a4128a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                <TwitterIcon    />
                </a></strong>
            </div>
            </div>
    </Element>
    )
}

export default Contact
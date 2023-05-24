import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'
import Facebook from '../assets/Facebook.png'
import Linkedin from '../assets/LinkedIn.png'
import Twitter from '../assets/Twitter.png'
import Location from '../assets/Location.png'
import Call from '../assets/Call.png'
import Envelope from '../assets/Envelope.png'

const Footer  = () => {
    return (
        <div className="footer-container">
            <h1>Company Name</h1>
            <div className="footer-content">
                <div className="footer-section1">
                    <p>Join With Us</p>
                    <div className="footer-input">
                        <input type="email" name = "email" placeholder="Enter your email address" />
                        <button>Sign Up</button>
                    </div>
                    <div style={{
                        paddingTop: "20px"
                    }}>
                        <p style = {{
                            fontWeight: "600",
                            fontSize: "24px"
                        }}>Make You check us on </p>
                        <p style = {{
                            fontWeight: "600",
                            fontSize: "16px"
                        }}>Android & ios we are available on both the platform</p>
                    </div>
                    <div className = "download-links">
                        <img src = {playstore} alt = "playstore" />
                        <img src = {appstore} alt = "appstore" /> 
                    </div>
                </div>
                <div className='footer-section2'>
                    <div className='links'>
                        <div className="content">
                            <h1>GENERAL</h1>
                            <p>HOME</p>
                            <p>SHOP</p>
                            <p>ABOUT</p>
                            <p>COLLECTION</p>
                        </div>
                        <div className="content">
                            <h1>LEGAL</h1>
                            <p>FAQs</p>
                            <p>ABOUT US</p>
                            <p>PRIVACY & POLICY</p>
                            <p>TERMS & CONDITIONS</p>
                        </div>
                    </div>
                    <div className="follow">
                        <h1>FOLLOW US </h1>
                        <div className='follow-links'>
                            <img src = {Facebook} alt = "facebook"/>
                            <img src = {Linkedin} alt = "linkedIn"/>
                            <img src = {Twitter}  alt = 'Twitter' />
                        </div>
                    </div>
                </div>
                <div className='footer-section3'>
                    <h1>Contact Us</h1>
                    <div className='contact-detail'>
                        <img src = {Location} />
                        <p>COMPANY MARKET  HOUSE, 10/2 PARK BASE LANE CA 94158</p>
                    </div>
                    <div className='contact-detail'>
                        <img src = {Call} />
                        <p>012-345-678</p>
                    </div>
                    <div className='contact-detail'>
                        <img src = {Envelope} />
                        <p>companyname123@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
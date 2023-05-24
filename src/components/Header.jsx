import companyLogo from '../assets/company-logo.png'

const Header = () => {
    return(
        <div className = "header">
            <img src={companyLogo} alt="company logo"/>
            <div className='navs'>
                <ul>
                    <li>Home</li>
                    <li>Careers</li>
                    <li>About</li>
                    <li>Who we're</li>
                    <li>What we do</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
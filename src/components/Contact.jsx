import logo1 from "../assets/images/instagram.png"
import logo2 from "../assets/images/twitter.png"
import logo3 from "../assets/images/linkedin.png"

function Contact() {
    return ( 
        <div className="contact">
            <div >
                <p className='text'>CONTACT</p>
<a className="navbar-logo" onClick={() => handleLogoClick()}><img src={logo1} className="logo" alt="ETER logo"/></a>
<a className="navbar-logo" onClick={() => handleLogoClick()}><img src={logo2} className="logo" alt="ETER logo"/></a>
<a className="navbar-logo" onClick={() => handleLogoClick()}><img src={logo3} className="logo" alt="ETER logo"/></a>
                <p className="creative">eter@eter.studio</p>
            </div>
        </div>
     );
}

export default Contact;
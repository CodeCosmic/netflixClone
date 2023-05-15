import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='container'>
                <div className='primaryNavLinks'>
                    <img className='netflixLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    <span className='leftLinks'>Home</span>
                    <span className='leftLinks'>TV Shows</span>
                    <span className='leftLinks'>Movies</span>
                    <span className='leftLinks'>New & Popular</span>
                    <span className='leftLinks'>My list</span>
                    <span className='leftLinks'>Browse by Languages</span>
                </div>
                <div className='secondaryNavLinks'>
                    <FontAwesomeIcon className='rightLinks' icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                    <span className='rightLinks'>DVD</span>
                    <FontAwesomeIcon className='rightLinks' icon={faBell} style={{color: '#ffffff'}} />
                    <img className='profilePic rightLinks' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar

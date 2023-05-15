import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className="navbar">
            <span className='netflixLogo'>Netflix</span>
            <ul className='primaryNavLinks'>
                <li className='navLinks'>Home</li>
                <li className='navLinks'>TV Shows</li>
                <li className='navLinks'>Movies</li>
                <li className='navLinks'>New & Popular</li>
                <li className='navLinks'>My list</li>
                <li className='navLinks'>Browse by Languages</li>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
            </ul>
            <div className='secondaryNavLinks'>
               <span>searchIcon</span>
               <span>DVD</span>
               <span>notification</span>
               <span>Profile Image</span>
            </div>
        </div>
    )
}

export default Navbar

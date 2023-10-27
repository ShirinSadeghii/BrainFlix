import logo from '../../assets/Images/BrainFlix-logo.svg';
import upload from '../../assets/Images/Icons/upload.svg';
import search from '../../assets/Images/Icons/search.svg';
import mohan from '../../assets/Images/Mohan-muruge.jpg';
import './Header.scss';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <nav className="nav">
            <div className='nav-img__container'>
                <Link to="/">
                    <img className="nav__logo" src={logo} alt="BrainFlix Logo"/>
                </Link>
            </div>
            <div className='nav-form__container'>
                <form className="nav__form">
                    <input className="nav__input" type="text" name="search" placeholder="Search"/>
                    <img className="search-icon" src={search} alt="search icon"/>
                    <img className="mohan" src={mohan} alt="Mohan" />            
                </form>
                <button className="nav__button">UPLOAD 
                    <img className="upload-btn" src={upload} alt="upload icon"/>
                </button>
            </div>
        </nav>
    )
}

export default Header
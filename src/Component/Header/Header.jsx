import { NavLink } from 'react-router-dom';
import  './Header.css'
const Header = () => {
    return (
        <nav>
            <ul className='navLink'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </ul>
        </nav>
    );
};

export default Header;
import { Link} from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
  
    return (
        <>
        <nav className="navbar">
        <Link to="/"  className="navbar-link">
        <div className="navbar-title">
            Novo
        </div>
        </Link> 
        <div className="navbar-links">
            <Link to="/Explore"  className="navbar-link">Explore</Link> 
        </div>
    </nav>
        </>
    );
};

export default Navbar;
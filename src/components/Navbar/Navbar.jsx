import { Link, useLocation} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import './Navbar.css';

const Navbar = ({data, setData, login, authDispatch}) => {
  const location = useLocation();
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
        <div className="navbar-items">
            <div className="navbar-list" style={{display: location.pathname === '/Explore' ? "block" : "none" }}>
                <SearchBar className="navbar-item" filterText={data.search} setData={setData}/>
            </div>
        </div>
        <Link to='/SignIn' className="btn btn-tertiary" onClick={() => 
            {login && authDispatch({type:"LOGIN", payload:false, token:localStorage.removeItem("token")})}} >{login ? "logout" : "login"}</Link>
    </nav>
        </>
    );
};

export default Navbar;
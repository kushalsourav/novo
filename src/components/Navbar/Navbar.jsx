import { Link, useLocation} from "react-router-dom";
import avatar from "../../assets/img/avatar.png";
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
            { login && 
                <Link to='/Profile' >
                    <div className="avatar avatar-quaternary">
                        <img src={avatar} alt="avatar-quaternary" className="img-responsive img-round nav-img" />
                    </div>
                </Link>
            }
           <Link to='/SignIn' className="btn btn-tertiary" onClick={() => 
                {login &&  authDispatch({type:"LOGIN", login:false, token:localStorage.removeItem("token")})}}>
                {login ? "logout" : "login"}
            </Link>
        </div>
    </nav>
        </>
    );
};

export default Navbar;
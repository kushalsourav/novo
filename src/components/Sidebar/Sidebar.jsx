import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = ({categories, filterCategory, setData, toggle}) => {
    const className = "sidebar ";
    console.log(toggle)
    return(
        <>
        <div className={className + ` ${toggle ? "sidebar-active" : "sidebar-inactive"}` }>
             <div className="sidebar-user">
             <Link to="/"  className="sidebar-items">
                
                <div className="sidebar-icon"><i className="fa fa-home" aria-hidden="true"></i></div>
                <div className="sidebar-item-name">Home</div>
            </Link>
            <Link to="/WatchLater" className="sidebar-items">
                 <div className="sidebar-icon"><i className="fa fa-clock-o" aria-hidden="true"></i>
                 </div>
                <div className="sidebar-item-name">watch later</div>
            </Link>
            <Link to="/Liked" className="sidebar-items">
                <div className="sidebar-icon"><i className="fa fa-thumbs-up" aria-hidden="true"></i></div>
                <div className="sidebar-item-name">Liked</div>
            </Link>
            <Link to="/History" className="sidebar-items">
            <div className="sidebar-icon"><i className="fa fa-history" aria-hidden="true"></i></div>
                <div className="sidebar-item-name">History</div>
            </Link>
            <Link to="/Playlist" className="sidebar-items">
            <div className="sidebar-icon"><i className="fa fa-play" aria-hidden="true"></i></div>
                <div className="sidebar-item-name">playlist</div>
            </Link>
             </div>
             {
                categories && 
                <div className="sidebar-explore">
                <div className="sidebar-title">category</div>
                {
                   categories.map(({categoryName}) => {
                       return(
                           <div key={categoryName} className="sidebar-items"> 
                            <label htmlFor={categoryName}>
                              <input type="checkbox" id={categoryName} 
                                checked={filterCategory.filterChecked && filterCategory.filterCategoryName === categoryName} 
                                onChange={(e) =>setData({type:"FILTER" ,filterChecked: e.target.checked, filterCategoryName:categoryName})}
                              /> : {categoryName}
                            </label>
                           </div>
                       )
                   })
                }
                </div>
             }
        </div>
        </>
    )
};

export default Sidebar;


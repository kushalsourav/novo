import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({videos, filterBySearch, setData, postVideoId, button, postToast, deleteVideo, postWatchLater,playlistId, filterCategory}) => {
    return(
        <>
        {
            videos.map((video) => {
                if(filterBySearch && video.categoryName.indexOf(filterBySearch) === -1) {
                    return <Fragment key={video._id}></Fragment>;
                }
                if(filterCategory &&  filterCategory.filterChecked && !video.categoryName.includes(filterCategory.filterCategoryName)) {
                    return <Fragment key={video._id}></Fragment>;
                }
                return(
                    <div className="card-vertical-sm" key={video._id}>
                        {postWatchLater && 
                        <span className="badge-quinary" onClick={() => postWatchLater(video,setData, postToast)}>
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </span>
                        }
                        <Link to="/SingleVideoPage" className="card-img" onClick={() => postVideoId(video._id, setData)}>
                            <img src={video.thumbNail} alt={video.title} className="img-responsive card-img" />
                        </Link>
                        <div className="card-head">
                            <h3 className="card-title">{video.categoryName}</h3>
                            <p className="card-subtitle">{video.title}</p>
                        </div>
                        <small className="card-icons">
                           <span><i className="fa fa-eye" aria-hidden="true"></i>{video.likes}</span>
                           <span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i>{video.views}</span>
                        </small>
                        {button &&  
                            <button className="btn btn-primary btn-large" onClick={() => deleteVideo(video._id,setData,postToast, playlistId)}>
                                {button}
                            </button> 
                        }
                    </div>
                )
            })
        }
        </>
    );
};

export default Card;
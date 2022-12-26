import { Fragment } from "react";
import "./Card.css";

const Card = ({videos, filterBySearch}) => {
    return(
        <>
        {
            videos.map((video) => {
                if(filterBySearch && video.categoryName.indexOf(filterBySearch) === -1) {
                    return <Fragment key={video._id}></Fragment>;
                }
            
                return(
                    <div className="card-vertical-sm" key={video._id}>
                    
                        <div className="card-img" >
                            <img src={video.thumbNail} alt={video.title} className="img-responsive card-img" />
                        </div>
                        <div className="card-head">
                            <h3 className="card-title">{video.categoryName}</h3>
                            <p className="card-subtitle">{video.title}</p>
                        </div>
                        <small className="card-icons">
                           <span><i className="fa fa-eye" aria-hidden="true"></i>{video.likes}</span>
                           <span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i>{video.views}</span>
                        </small>

                    </div>
                )
            })
        }
        </>
    );
};

export default Card;
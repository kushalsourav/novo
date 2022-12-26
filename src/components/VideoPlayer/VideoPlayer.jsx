import ReactPlayer from "react-player";
import Buttons from "../Buttons/Buttons";
import './VideoPlayer.css';

const VideoPlayer = ({video, setData, postToast, postUserLikes}) => {
    return(
        <>
        <div className="videoplayer">
            <div>
            <div className="player-header"><h2>{video.categoryName}</h2></div>
             <div className="player-creator">By: {video.creator}</div>
            </div>
           <div className="player">
           <ReactPlayer  url={video.url} />
           </div>
           <div>
            <Buttons 
            video={video}
            setData={setData}
            postToast={postToast}
            postUserLikes={postUserLikes}
            />
           </div>
          <div className="player-description"> 
            <h5 className="description-header">Description: </h5>
            <p className="description">
                {video.description}
            </p>
          </div>
        </div>
        </>
    );
};


export default VideoPlayer;
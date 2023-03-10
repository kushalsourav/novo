import ReactPlayer from "react-player";
import Buttons from "../Buttons/Buttons";
import './VideoPlayer.css';

const VideoPlayer = ({video, setData, postToast, postUserLikes, postWatchLater, postPlaylistVideo, playlist, isOpen, playlistForm, postPlaylist, error, postError}) => {
    return(
        <>
        <div className="videoplayer">
            <div>
            <div className="player-header"><h2>{video.categoryName}</h2></div>
             <div className="player-creator">By: {video.creator}</div>
            </div>
           <div className="player">
           <ReactPlayer  url={video.url}  width="100%" height="100%" />
           </div>
           <div>
            <Buttons 
            video={video}
            setData={setData}
            postToast={postToast}
            postUserLikes={postUserLikes}
            postWatchLater={postWatchLater}  
            playlist={playlist}
            postPlaylistVideo={postPlaylistVideo}
            isOpen={isOpen}
            playlistForm={playlistForm}
            postPlaylist={postPlaylist}
            error={error}
            postError={postError}
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
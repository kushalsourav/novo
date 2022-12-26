import './Playlist.css';

const Playlist = ({playlist, video, postToast, postPlaylistVideo}) => {
    return(
        <div className="playlist-card"> 
           <div>
            {playlist.map((playlist) => {
                return(
                    <div key={playlist._id} className="playlist-main" onClick={() => postPlaylistVideo(playlist._id, video,postToast)}>
                       <div className='playlist-icon'><i className="fa fa-play" aria-hidden="true"></i></div>
                       <div className='playlist-name'>{playlist.title}</div>
                    </div>
                )
            })}
           </div>
        </div>
    );
};

export default Playlist;
import { Link } from "react-router-dom";

const PlaylistCard = ({playlist, handleDelete, setData, postToast}) => {
    return(
        <>
                {playlist.map((playlist) => {
            return(
                <div className='playlist' key={playlist._id}>
                    <Link to={`/PlaylistVideo/${playlist._id}`}className="playlist-link">
                    <div className="playlist-content">
                       <h5 className="playlist-header">{playlist.title}</h5>    
                      <p className="playlist-description">{playlist.description}</p> 
                    </div>
                    </Link>
                    <div className='playlist-delete'>
                        <button className='btn btn-transparent btn-tertiary-outline' 
                        onClick={() => {
                            handleDelete(playlist._id, setData, postToast) 
                        }}>
                            <span><i className="fa fa-trash-o" aria-hidden="true"></i></span>
                        </button>
                    </div>
                 </div>
            )
        })}
        </>
    );
};

export default PlaylistCard;
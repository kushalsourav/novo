
import Modal from "../Modal/Modal";
import Playlist from "../Playlist/Playlist";
import PlaylistForm from "../PlaylistForm/PlaylistForm";
import "./Buttons.css";


const Buttons = ({video, setData, postToast, postUserLikes, postWatchLater, isOpen, playlist, playlistForm, postPlaylist, error, postError, postPlaylistVideo}) => {
    return(
        <div className="buttons">
            <div>
            <button className="btn btn-tertiary" onClick={() => {
                 postUserLikes(video,setData, postToast)
             }}>like</button>
            </div>
            <button className="btn btn-tertiary" onClick={() => {
                postWatchLater(video,setData, postToast)
            }}>watchLater</button>
            <button className="btn btn-tertiary" onClick={() => setData({type:"MODAL", modal:true})}>playlist</button>
            <Modal handleClose={() => setData({type:"MODAL", modal:false})} isOpen={isOpen}>
            <Playlist playlist={playlist} video={video}  postToast={postToast} postPlaylistVideo={postPlaylistVideo} />
            <PlaylistForm  
            playlistForm={playlistForm} 
            setData={setData}  
            error={error} 
            postPlaylist={postPlaylist} postError={postError} postToast={postToast} />
            </Modal>
        
        </div>
    );
};

export default Buttons;
import Input from '../Form/Input/Input';
import './PlaylistForm.css';

const PlaylistForm = ({playlistForm, setData, error, postPlaylist, postToast, postError}) => {

    return(
        <form className='playlist-form'   onSubmit={(e) =>{postPlaylist(e,playlistForm.title, playlistForm.description,setData, postToast, postError)}}>
            <h4 className='playlist-header'>Create new Playlist</h4>
            <Input  name="title" placeholder="My Playlist"  id="Title" value={playlistForm.title}  setInput={setData} error={error} />
            <Input  name="description" placeholder="awesome programming"  id="Description"  value={playlistForm.description} setInput={setData} error={error} />
            <label className='input-label'>
            <button className='btn btn-primary btn-large'>create playlist</button>
            </label>
        </form>
    );
};

export default PlaylistForm;
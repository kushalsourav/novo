import Modal from '../../components/Modal/Modal';
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard';
import PlaylistForm from '../../components/PlaylistForm/PlaylistForm';
import Sidebar from '../../components/Sidebar/Sidebar';
import Grid14 from '../../components/Ui/Grid-1-4/Grid14';

import {useData} from '../../contexts/DataContext/DataContext';
import useToast from '../../hooks/useToast';
import useError from "../../hooks/useError";
import './Playlist.css';
import Grid28 from '../../components/Ui/Grid-2-8/Grid28';
import { postPlaylist, deletePlaylist } from '../../apis/Apis';

const Playlists = () => {
const { data,setData} = useData();
const postToast = useToast();
const [error , setError] = useError();



    return(
       <Grid28>
            <Sidebar />
            <div>
            <div className='playlist-head'>
                <div><h3>My Playlists</h3></div>
                <button className='btn btn-tertiary btn-small' onClick={() => setData({type:"MODAL", modal:true})}>create playlist</button>
            </div>
             <Modal handleClose={() => setData({type:"MODAL", modal:false})} isOpen={data.modal}> 
            <PlaylistForm  
            playlistForm={data.playlistForm} 
            setData={setData}  
            error={error} 
            postPlaylist={postPlaylist} postError={setError} postToast={postToast} />
            </Modal>
            <Grid14>
                <PlaylistCard  setData={setData}  postToast={postToast}  playlist={data.playlist} handleDelete={deletePlaylist}/>
            </Grid14>
            </div>
        </Grid28>
    );
};

export default Playlists;
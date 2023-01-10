import {useData} from "../../contexts/DataContext/DataContext";
import { postPlaylist, deletePlaylist } from "../../apis/Apis";
import Modal from "../../components/Modal/Modal";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import PlaylistForm from "../../components/PlaylistForm/PlaylistForm";
import Sidebar from "../../components/Sidebar/Sidebar";
import Grid14 from "../../components/Ui/Grid-1-4/Grid14";
import useToast from "../../hooks/useToast";
import useError from "../../hooks/useError";
import Grid28 from "../../components/Ui/Grid-2-8/Grid28";
import NoData from "../../components/NoData/NoData.jsx";
import useToggle from "../../hooks/useToggle";
import "./Playlist.css";

const Playlists = () => {
const { data,setData} = useData();
const postToast = useToast();
const [error , setError] = useError();
const [toggle, setToggle] = useToggle();

    return(
       <Grid28>
             <button className="sidebar-toggler" onClick={() => setToggle()}>
                <i className="fa fa-tasks" aria-hidden="true"></i>
            </button>
            <Sidebar toggle={toggle} />
            <div>
            <div className="playlist-head">
                <div><h3>My Playlists</h3></div>
                <button className="btn btn-tertiary btn-small" onClick={() => setData({type:"MODAL", modal:true})}>create playlist</button>
            </div>
             <Modal handleClose={() => setData({type:"MODAL", modal:false})} isOpen={data.modal}> 
            <PlaylistForm  
            playlistForm={data.playlistForm} 
            setData={setData}  
            error={error} 
            postPlaylist={postPlaylist} postError={setError} postToast={postToast} />
            </Modal>
            <Grid14>
                {data.playlist.length === 0 && <NoData />}
                <PlaylistCard  setData={setData}  postToast={postToast}  playlist={data.playlist} handleDelete={deletePlaylist}/>
            </Grid14>
            </div>
        </Grid28>
    );
};

export default Playlists;
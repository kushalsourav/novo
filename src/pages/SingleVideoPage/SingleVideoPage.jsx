import { useData } from "../../contexts/DataContext/DataContext";
import Card from "../../components/Card/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import Grid262 from "../../components/Ui/Grid-2-6-2/Grid262";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { getVideo, postUserLikes, postWatchLater, postPlaylistVideo, postPlaylist } from "../../apis/Apis";
import useToast from "../../hooks/useToast";
import useError from "../../hooks/useError";

const SinglevideoPage = () => {
   const {data, setData } = useData();
   const [error, setError] = useError();
   const postToast = useToast();
    return (
       <Grid262>
       <Sidebar />
       <VideoPlayer 
        video={data.video} 
        setData={setData}
        postToast={postToast}
        postUserLikes={postUserLikes}
        postWatchLater={postWatchLater}
        isOpen={data.modal} 
        playlist={data.playlist}
        postPlaylistVideo={postPlaylistVideo}
        playlistForm={data.playlistForm}
        postPlaylist={postPlaylist}
        error={error}
        postError={setError}
        />
        <div className="grid-column">
            <Card videos={data.videos.filter(({_id}) => _id !== data.video._id)} 
            filterBySearch={data.search} 
            postVideoId={getVideo} 
            setData={setData} 
            postWatchLater={postWatchLater}
            postToast={postToast}
            />
        </div>
       </Grid262>
    );
};

export default SinglevideoPage;
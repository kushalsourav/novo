import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useData } from "../../contexts/DataContext/DataContext";
import Card from '../../components/Card/Card';
import { getVideo,deletePlaylistVideo, getPlaylistVideo } from "../../apis/Apis";
import useToast from "../../hooks/useToast";
import NoData from "../../components/NoData/NoData.jsx";

const PlaylistVideo = () => {
    const {data,setData} = useData();
    const {playlistId} = useParams();
    const postToast = useToast();
  useEffect(() => {
    getPlaylistVideo(playlistId, setData);
  },[playlistId, setData]);
    return (
        <div className="playlist-video">
           {data.playlistVideo.length === 0 && <NoData />}
         <Card 
         videos={data.playlistVideo}  
         filterBySearch={data.search} 
         setData={setData} 
         playlistId={playlistId} 
         postToast={postToast}
         postVideoId={getVideo}
         deleteVideo={deletePlaylistVideo}
         button={"remove video from playlist"}/>
        </div>
    );
};

export default PlaylistVideo;
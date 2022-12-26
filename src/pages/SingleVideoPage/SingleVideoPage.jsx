import { useData } from "../../contexts/DataContext/DataContext";
import Card from "../../components/Card/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import Grid262 from "../../components/Ui/Grid-2-6-2/Grid262";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { getVideo } from "../../apis/Apis";


const SinglevideoPage = () => {
   const {data, setData } = useData();

    return (
       <Grid262>
       <Sidebar />
       <VideoPlayer 
        video={data.video} 
        />
        <div className="grid-column">
            <Card videos={data.videos.filter(({_id}) => _id !== data.video._id)} 
            filterBySearch={data.search} 
            postVideoId={getVideo} 
            setData={setData} 
            />
        </div>
       </Grid262>
    );
};

export default SinglevideoPage;
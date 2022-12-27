import Card from "../../components/Card/Card";
import { useData } from "../../contexts/DataContext/DataContext"
import useToast from "../../hooks/useToast";
import Sidebar from "../../components/Sidebar/Sidebar";
import Grid28 from "../../components/Ui/Grid-2-8/Grid28";
import Grid14 from "../../components/Ui/Grid-1-4/Grid14";
import { getVideo, deleteUserLikes } from "../../apis/Apis";
import NoData from "../../components/NoData/NoData.jsx";

const LikedVideo = () => {
const {data, setData,} = useData();
const postToast = useToast();

    return (
        <Grid28>
            <Sidebar />
                <Grid14>
                    {data.liked.length === 0 && <NoData />}
                    <Card 
                    videos={data.liked} 
                    setData={setData} 
                    postVideoId={getVideo} 
                    deleteVideo={deleteUserLikes} 
                    postToast={postToast} 
                    button={"Remove from liked"} />
                </Grid14>
        </Grid28>
    );
};

export default LikedVideo;
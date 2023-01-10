import { useData } from "../../contexts/DataContext/DataContext"
import { getVideo, deleteUserLikes } from "../../apis/Apis";
import Card from "../../components/Card/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import Grid28 from "../../components/Ui/Grid-2-8/Grid28";
import Grid14 from "../../components/Ui/Grid-1-4/Grid14";
import NoData from "../../components/NoData/NoData.jsx";
import useToast from "../../hooks/useToast";
import useToggle from "../../hooks/useToggle";

const LikedVideo = () => {
const {data, setData,} = useData();
const postToast = useToast();
const [toggle, setToggle] = useToggle();
    return (
        <Grid28>
            <button className="sidebar-toggler" onClick={() => setToggle()}>
                <i className="fa fa-tasks" aria-hidden="true"></i>
            </button>
            <Sidebar toggle={toggle} />
            <div>
                <h3 className="text-center">liked</h3>
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
            </div>
        </Grid28>
    );
};

export default LikedVideo;
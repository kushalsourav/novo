import { useData } from "../../contexts/DataContext/DataContext";
import Grid28 from "../../components/Ui/Grid-2-8/Grid28";
import VideoTable from "../../components/VideoTable/VideoTable";
import Sidebar from "../../components/Sidebar/Sidebar";
import { getVideo, postWatchLater } from "../../apis/Apis";
import useToast from "../../hooks/useToast";


const Explore = () => {
    const {data, setData} = useData();
    const postToast = useToast();
    return(
        <>
        <Grid28>
          <Sidebar categories={data.categories} filterCategory={data.filterCategory} setData={setData} />
        <VideoTable videos={data.videos} filterBySearch={data.search} video={getVideo} setData={setData} postWatchLater={postWatchLater} postToast={postToast} filterCategory={data.filterCategory} />
        </Grid28>
        </>
    );
};

export default Explore;
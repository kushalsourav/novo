import { useData } from "../../contexts/DataContext/DataContext";
import Grid28 from "../../components/Ui/Grid-2-8/Grid28";
import VideoTable from "../../components/VideoTable/VideoTable";
import Sidebar from "../../components/Sidebar/Sidebar";


const Explore = () => {
    const {data} = useData();
    return(
        <>
        <Grid28>
          <Sidebar categories={data.categories} />
        <VideoTable videos={data.videos} filterBySearch={data.search} />
        </Grid28>
        </>
    );
};

export default Explore;
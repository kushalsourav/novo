import { useData } from "../../contexts/DataContext/DataContext";
import Grid28 from "../../components/Ui/Grid-2-8/Grid28";
import VideoTable from "../../components/VideoTable/VideoTable";


const Explore = () => {
    const {data} = useData();
    return(
        <>
        <Grid28>
          <div></div>
        <VideoTable videos={data.videos} />
        </Grid28>
        </>
    );
};

export default Explore;
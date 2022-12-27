import { useData } from "../../contexts/DataContext/DataContext";
import Card from "../../components/Card/Card"
import useToast from "../../hooks/useToast";
import Grid28 from "../../components/Ui/Grid-2-8/Grid28";
import Grid14 from "../../components/Ui/Grid-1-4/Grid14";
import Sidebar from "../../components/Sidebar/Sidebar";
import { getVideo, deleteWatchLater } from "../../apis/Apis";
import NoData from "../../components/NoData/NoData.jsx";

const Watchlater = () => {
  
  const {data, setData} = useData();
  const postToast = useToast();

      return(
          <Grid28>
          <Sidebar />
          <div>
              <div className="header"><h3>Watch Later</h3></div>
              <Grid14>
                {data.watchLater.length === 0 && <NoData />}
                 <Card 
                 videos={data.watchLater} 
                 setData={setData} 
                 postVideoId={getVideo} 
                 deleteVideo={deleteWatchLater} 
                 postToast={postToast} 
                 button={"Remove from watch later"}/>
              </Grid14>
          </div>
          </Grid28>
      );
};

export default Watchlater;
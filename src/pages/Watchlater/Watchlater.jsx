import { useData } from "../../contexts/DataContext/DataContext";
import Card from "../../components/Card/Card"
import useToast from "../../hooks/useToast";
import Grid28 from "../../components/Ui/Grid-2-8/Grid28";
import Grid14 from "../../components/Ui/Grid-1-4/Grid14";
import Sidebar from "../../components/Sidebar/Sidebar";
import { getVideo, deleteWatchLater } from "../../apis/Apis";
import NoData from "../../components/NoData/NoData.jsx";
import useToggle from "../../hooks/useToggle";

const Watchlater = () => {
  
  const {data, setData} = useData();
  const postToast = useToast();
  const [toggle, setToggle] = useToggle();

      return(
        <Grid28>
           {data.watchLater.length === 0 && <NoData />}
            <button className="sidebar-toggler" onClick={() => setToggle()}>
                <i className="fa fa-tasks" aria-hidden="true"></i>
            </button>
            <Sidebar toggle={toggle} />
            <div>
            <h3 className="text-center">watchlater</h3>
            <Grid14>
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

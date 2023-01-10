import { useData } from "../../contexts/DataContext/DataContext";
import {deleteHistory, deleteHistoryAll, getVideo} from "../../apis/Apis";
import Card from "../../components/Card/Card";
import useToast from "../../hooks/useToast";
import Grid28 from "../../components/Ui/Grid-2-8/Grid28";
import Sidebar from "../../components/Sidebar/Sidebar";
import Grid14 from "../../components/Ui/Grid-1-4/Grid14";
import useToggle from "../../hooks/useToggle";
import NoData from "../../components/NoData/NoData.jsx";
import "./History.css"


const History = () => {
const {data, setData, } = useData();
const postToast = useToast();
const [toggle, setToggle] = useToggle();
    return(
        <>
        <Grid28>
            <button className="sidebar-toggler" onClick={() => setToggle()}>
                <i className="fa fa-tasks" aria-hidden="true"></i>
            </button>
            <Sidebar toggle={toggle} />
            <div>
                <div className="history">
                     <h3>History</h3>
                     <button className="btn btn-tertiary" onClick={() => {deleteHistoryAll(setData, postToast)}}>delete all</button>
                </div>
                {data.history.length === 0 && <NoData />}
                <Grid14>
                     <Card videos={data.history}   deleteVideo={deleteHistory} postVideoId={getVideo} postToast={postToast} setData={setData} button={"remove"}/>
                </Grid14>
            </div>
        </Grid28>
        </>
    );
};

export default History;
import { useData } from "../../contexts/DataContext/DataContext";
import Card from '../../components/Card/Card';
import useToast from "../../hooks/useToast";
import Grid28 from '../../components/Ui/Grid-2-8/Grid28';
import Sidebar from '../../components/Sidebar/Sidebar';
import Grid14 from "../../components/Ui/Grid-1-4/Grid14";
import {deleteHistory, deleteHistoryAll, getVideo} from "../../apis/Apis";
import './History.css'

const History = () => {
const {data, setData, } = useData();
const postToast = useToast();
    return(
        <>
        <Grid28>
            <Sidebar />
            <div>
                <div className="history">
                     <h3>History</h3>
                     <button className="btn btn-tertiary" onClick={() => {deleteHistoryAll(setData, postToast)}}>delete all</button>
                </div>
                <Grid14>
                     <Card videos={data.history}   deleteVideo={deleteHistory} postVideoId={getVideo} postToast={postToast} setData={setData} button={"remove"}/>
                </Grid14>
            </div>
        </Grid28>
        </>
    );
};

export default History;
import Card from "../Card/Card";
import Grid14 from "../Ui/Grid-1-4/Grid14";
import './VideoTable.css';
const VideoTable = ({videos, filterBySearch , video, setData, postToast, postWatchLater}) => {
    return (
        <>
        <div className="video-table">
        <Grid14>
          <Card videos={videos}  filterBySearch={filterBySearch} postVideoId={video} setData={setData} postToast={postToast} postWatchLater={postWatchLater} />
        </Grid14>
        </div>
        </>
    );
};

export default VideoTable;
import Card from "../Card/Card";
import Grid14 from "../Ui/Grid-1-4/Grid14";
import './VideoTable.css';
const VideoTable = ({videos, filterBySearch}) => {
    return (
        <>
        <div className="video-table">
        <Grid14>
          <Card videos={videos}  filterBySearch={filterBySearch} />
        </Grid14>
        </div>
        </>
    );
};

export default VideoTable;
import Card from "../Card/Card";
import Grid14 from "../Ui/Grid-1-4/Grid14";
import './VideoTable.css';
const VideoTable = ({videos}) => {
    return (
        <>
        <div className="video-table">
        <Grid14>
          <Card videos={videos} />
        </Grid14>
        </div>
        </>
    );
};

export default VideoTable;
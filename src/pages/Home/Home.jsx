import Accordion from "../../components/Accordion/Accordion";
import { useData } from "../../contexts/DataContext/DataContext";
import Card from "../../components/Card/Card";
import Grid14 from "../../components/Ui/Grid-1-4/Grid14";
import "./Home.css";
import { getVideo } from "../../apis/Apis";


const Home = () => {
    const {data, setData} = useData();
    const setAccordion = data.categories.filter(({id}) => Number(id) === data.accordion);
        let isPrev , isNext;
        isPrev = data.accordion <= 1; 
        isNext = data.accordion >= 3;
    return (
        <>
        <Accordion  accordion={setAccordion} setData={setData}  isPrev={isPrev}  isNext={isNext}  />
        <div className="home-bottom">
        <Grid14>
          <Card videos={data.videos.slice(0,4)} postVideoId={getVideo} setData={setData} />
        </Grid14>
        </div>
        </>
    );
};

export default Home;
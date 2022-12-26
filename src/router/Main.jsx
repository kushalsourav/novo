import Navbar from "../components/Navbar/Navbar";
import { useData } from "../contexts/DataContext/DataContext";
import Router from "./Router/Router";

const Main = () => {
 const {data, setData} = useData();
  return (
    <div>
        <Navbar data={data} setData={setData} />
        <Router />
    </div>
  );
};

export default Main
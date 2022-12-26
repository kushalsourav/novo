import Navbar from "../components/Navbar/Navbar";
import { useData } from "../contexts/DataContext/DataContext";
import Router from "./Router/Router";
import Toast from "../components/Toast/Toast";


const Main = () => {
 const {data, setData} = useData();
  return (
    <div>
        <Navbar data={data} setData={setData} />
        <Router />
        <Toast type={data.toast.toastType} message={data.toast.toastMessage}/>
    </div>
  );
};

export default Main
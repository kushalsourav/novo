import Navbar from "../components/Navbar/Navbar";
import { useData } from "../contexts/DataContext/DataContext";
import Router from "./Router/Router";
import Toast from "../components/Toast/Toast";
import { useAuth } from "../contexts/AuthContext/AuthContext";


const Main = () => {
 const {data, setData} = useData();
 const {authState, authDispatch} = useAuth();
  return (
    <div>
        <Navbar data={data} setData={setData} login={authState.login} authDispatch={authDispatch} />
        <Router />
        <Toast type={data.toast.toastType} message={data.toast.toastMessage}/>
    </div>
  );
};

export default Main
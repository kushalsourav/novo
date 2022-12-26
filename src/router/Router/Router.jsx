import { Route, Routes } from "react-router-dom";
import Explore from "../../pages/Explore/Explore";
import Home from "../../pages/Home/Home";
import SinglevideoPage from "../../pages/SingleVideoPage/SingleVideoPage";


const Router = () => {

    return(
        <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/SingleVideoPage" element={<SinglevideoPage />} />
        </Routes>
        </>
    );
};

export default Router;
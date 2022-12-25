import { Route, Routes } from "react-router-dom";
import Explore from "../../pages/Explore/Explore";
import Home from "../../pages/Home/Home";


const Router = () => {

    return(
        <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        </Routes>
        </>
    );
};

export default Router;
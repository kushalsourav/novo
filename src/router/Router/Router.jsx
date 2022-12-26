import { Route, Routes } from "react-router-dom";
import RequireAuth from "../../contexts/AuthContext/RequireAuth/RequireAuth";
import Explore from "../../pages/Explore/Explore";
import Home from "../../pages/Home/Home";
import Liked from "../../pages/Liked/Liked";
import SingleVideoPage from "../../pages/SingleVideoPage/SingleVideoPage";
import SignIn from "../../views/SignIn/SignIn";
import SignUp from "../../views/SignUp/SignUp";


const Router = () => {

    return(
        <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/SingleVideoPage" element={<SingleVideoPage />} />
        <Route path="/Liked" element={<RequireAuth><Liked /></RequireAuth>} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        </>
    );
};

export default Router;
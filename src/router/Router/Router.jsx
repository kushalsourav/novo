import { Route, Routes } from "react-router-dom";
import RequireAuth from "../../contexts/AuthContext/RequireAuth/RequireAuth";
import Explore from "../../pages/Explore/Explore";
import History from "../../pages/History/History";
import Home from "../../pages/Home/Home";
import Liked from "../../pages/Liked/Liked";
import Playlists from "../../pages/Playlists/Playlists";
import PlaylistVideo from "../../pages/PlaylistVideo/PlaylistVideo";
import Profile from "../../pages/Profile/Profile";
import SingleVideoPage from "../../pages/SingleVideoPage/SingleVideoPage";
import Watchlater from "../../pages/Watchlater/Watchlater";
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
        <Route path="/Playlist" element={<RequireAuth><Playlists /></RequireAuth>} />
        <Route path="/WatchLater"  element={<RequireAuth><Watchlater /></RequireAuth>} />
        <Route path="/PlaylistVideo/:playlistId" element={<RequireAuth><PlaylistVideo /></RequireAuth>} />
        <Route path="/History" element={<RequireAuth><History /></RequireAuth>} />
        <Route path="/Profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        </>
    );
};

export default Router;
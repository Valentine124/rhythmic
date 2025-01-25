import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./privateRouter";
import Home from "../pages/home"
import Artist from "../pages/artists"
import Album from "../pages/album"
import Favorite from "../pages/favorite"
import RecentlyPlays from "../pages/recently-plays"
import SignUpPage from "../components/auth_comp/signup_comp"
import LogInPage from "../components/auth_comp/login_comp"

function Router() {

  return (
    <div>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artist />} />
          <Route path="/albums" element={<Album />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/recently-plays" element={<RecentlyPlays />} />
        </Route>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  )
}

export default Router
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Registration from "./pages/registration";
import Login from "./pages/login";
import Home from "./pages/home";
import NotLoggedInUser from "./privateRouter/NotLoggedIn";
import LoggedInUser from "./privateRouter/LoggedInUser";
import RootLayout from "./rootLayout/RootLayout";
import Friends from "./pages/home/HomeNav/Friends";
import Newsfeed from "./pages/home/HomeNav/Newsfeed";
import Message from "./pages/home/HomeNav/Message";
import Medias from "./pages/home/HomeNav";
import Profile from "./pages/profile/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route element={<NotLoggedInUser />}>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<LoggedInUser />}>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/newsfeed" element={<Newsfeed />} />
            <Route path="/messages" element={<Message />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/media" element={<Medias />} />
          </Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
      </Route>
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

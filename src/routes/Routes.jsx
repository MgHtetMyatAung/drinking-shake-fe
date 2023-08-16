import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import Detail from "../pages/detail/Detail";
import AddToCard from "../pages/add-to-card/AddToCard";
import FindUs from "../pages/Find-us/FindUs";
import Faq from "../pages/faq/Faq";
import Main from "../pages/main/Main";
import NotFound from "../pages/not-found/NotFound";
import Profile from "../pages/profile/Profile";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Blog from "../pages/blog/Blog";

const Routes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "detail/:id",
          element: <Detail />,
        },
        {
          path: "add-to-card",
          element: <AddToCard />,
        },
        {
          path: "find-us",
          element: <FindUs />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return element;
};

export default Routes;

import FindUs from "../pages/Find-us/FindUs";
import AddToCard from "../pages/add-to-card/AddToCard";
import Faq from "../pages/faq/Faq";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";

export const mobileSliderRoute = [
    {
      id: 1,
      path: "/",
      component: (
        <Home />
      ),
    },
    {
      id: 2,
      path: "/find-us",
      component: (
        <FindUs />
      ),
    },
    {
      id: 3,
      path: "/faq",
      component: (
        <Faq />
      ),
    },
    {
      id: 4,
      path: "/add-to-card",
      component: (
        <AddToCard />
      ),
    },
    {
      id: 5,
      path: "/profile",
      component: (
        <Profile />
      ),
    },
];
  
export const tabletSliderRoute = [
    {
      id: 1,
      path: "/",
      component: (
        <Home />
      ),
    },
    {
      id: 2,
      path: "/find-us",
      component: (
        <FindUs />
      ),
    },
    {
      id: 3,
      path: "/faq",
      component: (
        <Faq />
      ),
    },
    {
      id: 4,
      path: "/add-to-card",
      component: (
        <AddToCard />
      ),
    }
  ];
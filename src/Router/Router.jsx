import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Components/Home/Home";
import DocSearch from "../Components/Patiant/DocSearch";









const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/doctor-list",
            element: <DocSearch></DocSearch>,
        },
    ]
  },
]);

export default router;
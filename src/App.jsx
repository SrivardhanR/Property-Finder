import "./routes/layout/layout.scss";
import "./responsive.scss"
import HomePage from "./routes/homepage/HomePage";
import ListPage from "./routes/ListPage/ListPage";
import Layout from "./routes/layout/Layout";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import SinglePage from "./routes/SinglePage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        },
        {
          path: "/profile",
          element: <ProfilePage/>
        }
      ]
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App
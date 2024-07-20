import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import SongList from "../components/MusicPlayer/SongList";
import Layout from "./Layout";
import About from "../components/About";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../components/NotFound";

const Router = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    index: true, // path: "/"
                    element: (
                        <ProtectedRoute>
                            <SongList />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/about",
                    element: (
                        <ProtectedRoute>
                            <About />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "*",
                    element: <NotFound />,
                },
            ],
        },
    ],
    {
        basename: "/react_context",
    }
);

export default Router;

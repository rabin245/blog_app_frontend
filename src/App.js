import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
  useNavigation,
} from "react-router-dom";
import Home, { homeLoader } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single, { loader as postLoader } from "./pages/Single";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function Layout() {
  const { state } = useNavigation();
  console.log(state);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      {state === "loading" ? (
        <div className="loading-indicator">
          <ClipLoader loading={true} size={150} color={"teal"} />
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, loader: homeLoader },
      {
        path: "/post/:id",
        element: <Single />,
        loader: postLoader,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "*",
        element: <h1>404 Not Found</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

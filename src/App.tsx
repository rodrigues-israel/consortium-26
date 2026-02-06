import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import Schedule from "./pages/Schedule.tsx";
import Events from "./pages/Events.tsx";
import Speakers from "./pages/Speakers.tsx";
import Team from "./pages/Team.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/schedule",
      element: <Schedule />,
    },
    {
      path: "/events",
      element: <Events />,
    },
    {
      path: "/speakers",
      element: <Speakers />,
    },
    {
      path: "/team",
      element: <Team />,
    },
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;

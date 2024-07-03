import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";


import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Profile from "./pages/Profile.jsx";
import EditPrfoile from "./pages/EditPrfoile.jsx";
import GigProfile from "./pages/GigProfile.jsx";
import Inbox from "./pages/Inbox.jsx";
import Subscription from "./pages/Subscription.jsx";
import Itinerary from "./pages/Iteinerary.jsx";
import Travel from "./pages/Travel.jsx";
import Shopping from "./pages/Shopping.jsx";
import Gigs from "./pages/Gigs.jsx";
import Settings from "./pages/Settings.jsx";
import Signin from "./pages/Sigin.jsx";
import SignUp from "./pages/SignUp.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./store/index.js";
import Itinerary2 from "./pages/Itinerary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Profile /> },
      { path: "/editprofile", element: <EditPrfoile /> },
      { path: "/gigprofile", element: <GigProfile /> },
      { path: "/inbox", element: <Inbox /> },
      { path: "/subscription", element: <Subscription /> },
      { path: "/itinerary", element: <Itinerary /> },
      { path: "/travel", element: <Travel /> },
      { path: "/shopping", element: <Shopping /> },
      { path: "/gigs", element: <Gigs /> },
      { path: "/settings", element: <Settings /> },
      { path: "/trial", element: <Itinerary2 /> },
    ],
  },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <SignUp /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </PersistGate>
);

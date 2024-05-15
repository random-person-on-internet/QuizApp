import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import {
  ProfileH,
  Profile,
  Topics,
  About,
  Contact,
} from "./components/Index.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="home" element={<ProfileH />} />
      <Route path="profile" element={<Profile />} />
      <Route path="quiz" element={<App />} />
      <Route path="quiz/math" element={<Topics />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RegisterForm from "./components/form/RegisterForm.jsx";
import { Explore, History, Home, Shorts, Library } from "@/components/pages";
import ContentLayout from "./components/layout/ContentLayout.jsx";
import LoginForm from "./components/form/LoginForm.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        {/* page */}
        <Route
          path=""
          element={
            <ContentLayout>
              <Home />
            </ContentLayout>
          }
        />
        <Route
          path="/shorts"
          element={
            <ContentLayout>
              <Shorts />
            </ContentLayout>
          }
        />
        <Route
          path="/explore"
          element={
            <ContentLayout>
              <Explore />
            </ContentLayout>
          }
        />
        <Route
          path="/history"
          element={
            <ContentLayout>
              <History />
            </ContentLayout>
          }
        />
        <Route
          path="/library"
          element={
            <ContentLayout>
              <Library />
            </ContentLayout>
          }
        />
        {/* auth */}
        <Route
          path="/user/register"
          element={
            <ContentLayout>
              <RegisterForm />
            </ContentLayout>
          }
        />
        <Route
          path="/user/login"
          element={
            <ContentLayout>
              <LoginForm />
            </ContentLayout>
          }
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

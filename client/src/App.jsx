import { Outlet } from "react-router-dom";
import api from "./axios/api";
import RegisterForm from "./components/form/RegisterForm";
import Nav from "./components/nav/Nav";
import Aside from "./components/aside/Aside";
import { Toaster } from "./components/ui/toaster";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const { currentUser } = useSelector((store) => store.user);

  useEffect(() => {
    console.log(currentUser);
  }, []);

  return (
    <div className="h-full">
      <Nav />
      <Aside />
      <Outlet />
      <Toaster />
    </div>
  );
}

export default App;

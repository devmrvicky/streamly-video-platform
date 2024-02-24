import { Outlet } from "react-router-dom";
import api from "./axios/api";
import RegisterForm from "./components/form/RegisterForm";
import Nav from "./components/nav/Nav";
import Aside from "./components/aside/Aside";

function App() {
  const handleClick = async () => {
    try {
      const res = await api.get("http://localhost:8000/get");
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Nav />
      <Aside />
      <Outlet />
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import api from "./axios/api";
import RegisterForm from "./components/form/RegisterForm";

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
      <button onClick={handleClick}>click me</button>
      <Outlet />
    </div>
  );
}

export default App;

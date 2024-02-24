import api from "./axios/api";

function App() {
  const handleClick = async () => {
    try {
      const res = await api.get("http://localhost:8000/get");
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  return <button onClick={handleClick}>click me</button>;
}

export default App;

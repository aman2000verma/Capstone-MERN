import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import AddUser from "./components/User/AddUser";
import ListUser from "./components/User/ListUser";
import EditUser from "./components/User/EditUser";
import Header from "./components/Header/Header";

function App() {
  const localData = localStorage.getItem("token");
  return (
    <div className="container">
      {localData ? <Header /> : ""}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<ListUser />} />
        <Route path="/create" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;

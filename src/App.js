// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import AdminRegister from './Components/AdminRegister';
function App() {
  return (
    <BrowserRouter>
    <Routes>

        <Route path="/admin-register" element={<AdminRegister/>} />

        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

      </Routes>
      </BrowserRouter>
  );
}

export default App;

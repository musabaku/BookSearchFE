import './App.css';
import BookSearch from "./Components/Books/BookSearch";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home"
import Register from "./Components/User/Register"
import Login from "./Components/User/Login"
import UserFavourite from './Components/Books/UserFavourite';
import About from './Components/Home/About';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/books" element={<BookSearch/>}/>
      <Route path="/favourite" element={<UserFavourite/>}/>
      

      </Routes>
    </Router>
  
  );
}

export default App;

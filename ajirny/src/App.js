import Landing from './components/home/Landing';
import {Nav} from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react';
import Category from './components/category/Category';
import SingleCat from './components/single-category/SingleCat';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/categories" element={<Category/>}/>
        <Route path="/singleCat" element={<SingleCat/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;

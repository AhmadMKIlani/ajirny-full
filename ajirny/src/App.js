import About from './components/about/About';
import Contact from './components/contact/Contact';
import Landing from './components/home/Landing';
import {Nav} from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react';
import Category from './components/category/Category';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Contact/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/categories" element={<Category/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;

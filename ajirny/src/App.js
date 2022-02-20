
import SinglePage from './components/singlepage/SinglePage';
import Landing from './components/home/Landing';
import { Nav } from "./components/nav/Nav";
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


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singlepage" element={<SinglePage />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

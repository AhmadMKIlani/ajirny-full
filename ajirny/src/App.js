import About from './components/about/About';
import Contact from './components/contact/Contact';
import Landing from './components/home/Landing';
import {Nav} from "./components/nav/Nav";
function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <Landing/> */}
      <About/>
      <Contact/>
    </div>
  );
}

export default App;

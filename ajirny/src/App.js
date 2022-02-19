import Landing from './components/home/Landing';
import {Nav} from "./components/nav/Nav";
import Category from './components/home/Lcategory/Category';
import Footer from "./components/footer/Footer";
import Testimonials from './components/testimonials/Testimonials';
import { Partners } from './components/partners/Partners';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <Category/>
      <Testimonials/>
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Work from './Components/MyWork/Work';
import Services from './Components/Services/Services';
import About from './Components/about/About';
import Navbar from './Components/navbar/Navbar';
import Profile from './Components/profile/Profile';
import Contact from "./Components/contacts/Contact";
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
    <ToastContainer />
    <Navbar />
    <Profile />
    <About />
    <Services />
    <Work />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;

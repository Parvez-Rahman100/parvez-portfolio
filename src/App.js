import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import Projects from './Routes/Projects';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProjectDetails from './Routes/ProjectDetails';
import NotFound from './Routes/NotFound';

const App = () => {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/projects/:id' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

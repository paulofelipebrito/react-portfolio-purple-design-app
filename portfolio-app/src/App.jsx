import Contact from './components/Contacts/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Members from './components/Members/Members';
import Footer from './components/Footer/Footer';
import Navbar from './components/Nav/Nav';
import About from './components/About/About';

function App() {
  return (
    <>
      <div className="bg-circle1" />
      <div className="bg-circle2" />
      <Header />
      <Navbar />
      <Home />
      <About />
      <Members />
      <Contact />
      <Footer />
    </>    
  );
}

export default App;

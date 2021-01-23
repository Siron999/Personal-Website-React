import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './/ScrollToTop'

function App() {
  return (
  <>
  <Router>
    <ScrollToTop>
    <NavBar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
    <Footer />
    </ScrollToTop>
  </Router>

  </>
  );
}

export default App;

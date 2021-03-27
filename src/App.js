import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {

 

  return (
    <>
      <Router>
        
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

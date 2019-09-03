import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainView from './MainView/MainView';
import Cart from './Cart/Cart';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Route exact path="/" component={MainView} />
      <Route  path="/cart" component={Cart} />
    </Router>
  );
}

export default App;

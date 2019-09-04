import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainView from './modules/MainView/MainView';
import Cart from './modules/Cart/Cart';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import NavBar from './Components/NavBar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

toast.configure();

function App() {
  return (
    <Router>
      <ToastContainer/>
      <NavBar/>
      <Route exact path="/" component={MainView} />
      <Route  path="/cart" component={Cart} />
    </Router>
  );
}

export default App;

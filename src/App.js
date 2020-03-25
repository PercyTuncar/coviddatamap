import React from 'react';
import "./styles/styles.scss"
import "./styles/styles.css"
import "./styles/homestyle.css"
import Explorar from './components/Pages/Explorar';
import Prevenir from "./components/Pages/Prevenir"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainMenu from './components/MainMenu'
import Reportar from './components/Pages/Reportar'
import Home from './components/Pages/Home';

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/Explorar" component={ Explorar } />  
      <Route path="/Prevenir" component={ Prevenir } />  
      <Route path="/Reportar" component={ Reportar } />  
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Página no encontrada</span>  
        </div>
      )} />  
    </Switch> 
  </Router>
)

export default App;
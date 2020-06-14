import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './componentes/pages/home';
import Contact from './componentes/pages/contact';
import About from './componentes/pages/about';
import Navbar from './componentes/layout/Navbar';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import NotFound from './componentes/pages/NotFound';
import Adduser from './componentes/users/Addusers';
import Edituser from './componentes/users/Edituser';
import Viewuser from './componentes/users/Viewuser';

function App() {
  return (
<Router>
  <div className="App">
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/users/add' component={Adduser}></Route>
        <Route exact path="/users/edit/:id" component={Edituser}></Route>
        <Route exact path="/users/:id" component={Viewuser}></Route>
        <Route component={NotFound} />
      </Switch>
    
  </div>
</Router>
  );
}

export default App;

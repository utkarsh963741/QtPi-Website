import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import BlogList from './components/pages/BlogList';
import Blog from './components/pages/Blog';
// import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Test from './components/pages/Test';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/blog' exact component={BlogList}/>
          <Route path='/blog/:id' exact component={Blog}/>
          <Route path='/products' exact component={Products}/>
          {/* <Route path='/cart' exact component={Cart}/> */}
          <Route path='/login' exact component={Login}/>
          <Route path='/test' exact component={Test}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

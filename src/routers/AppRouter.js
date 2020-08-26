import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage  from '../components/NotFoundPage';
import Home from '../components/Home';
import About from '../components/About';
import Cart from '../components/Cart';
import Login from '../components/Login';
import Customer from '../components/Customer';
import ProductDetail from '../components/ProductDetail';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/productDetails/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/customer/account" component={Customer} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default AppRouter;

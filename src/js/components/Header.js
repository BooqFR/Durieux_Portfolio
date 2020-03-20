import React                            from 'react';
import logo                             from '../../assets/img/logo.svg';
import { BrowserRouter, Switch, Link }  from 'react-router-dom'; 
import Routes                           from './Routes';
 
const Header = () => {
  return (
    <BrowserRouter>
      <div className="header">
        <Link to="/">
          <img src={ logo } className="header__logo" alt="Logo" />
        </Link>
        <div className="nav">
          <Link to="/about-me"  className="nav__item">About Me</Link>
          <Link to="/work"      className="nav__item nav__item--last-left">Work</Link>
          <Link to="/shop"      className="nav__item nav__item--first-right">Shop</Link>
          <Link to="/contact"   className="nav__item">Contact</Link>
        </div>
      </div>
      <Switch>
        <Routes />
      </Switch>
    </BrowserRouter>
  );
}
 
export default Header;
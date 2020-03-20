import React                   from 'react';
import logo                    from '../../assets/img/logo.svg';
import { BrowserRouter, Link } from 'react-router-dom'; 
import Masonry                 from './Masonry';
import Routes                  from './Routes';
 
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">

        <div className="header">
          <img src={ logo } className="header__logo" alt="Logo" />
          <div className="nav">
            <Link to="/about" className="nav__item">About Me</Link>
            <Link to="/about" className="nav__item nav__item--last-left">Work</Link>
            <Link to="/about" className="nav__item nav__item--first-right">Shop</Link>
            <Link to="/about" className="nav__item">Contact</Link>
          </div>
        </div>

        <section className="section">
          <Masonry />
        </section>
      </div>
      
      <Routes />
    </BrowserRouter>
  );
}
 
export default App;
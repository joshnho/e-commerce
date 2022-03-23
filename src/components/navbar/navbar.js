import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/images/crown.svg';

import './navbar.scss';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="navbar-links-container">
          <Link className="navbar-link" to="/shop">
            Shop
          </Link>
          <Link className="navbar-link" to="/login">
            Login
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

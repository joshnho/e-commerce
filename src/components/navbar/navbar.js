import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/images/crown.svg';
import { UserContext } from '../../contexts/user';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navbar.scss';

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
          {currentUser ? (
            <Link className="navbar-link" to="login" onClick={signOutHandler}>
              Logout
            </Link>
          ) : (
            <Link className="navbar-link" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';
import Button from "../Button";
import "./styles.css";
import TemporaryDrawer from "./drawer";

function Header() {
  const { user } = useAuth();

  return (
    <div className="header">

      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1>
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </Link>

      <div className="links-desktop">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <Button text="Dashboard" />
        </Link>
        {!user ? (
          <Link to="/login">
            <Button text="Login" outlined={true} />
          </Link>
        ) : (
          <Link to="/profile">
            <Button 
              text={user.displayName?.split(' ')[0] || 'Profile'} 
              outlined={true}
            />
          </Link>
        )}
      </div>

      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;

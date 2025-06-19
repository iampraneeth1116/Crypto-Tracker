import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { IconButton, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import "./TemporaryDrawer.css";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="drawer-container">
      <IconButton onClick={() => setOpen(true)}  className="icon-white">
        <MenuRoundedIcon className="icon-white" />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        classes={{ paper: "drawer-paper" }}
      >
        <div className="drawer-content">
          <div className="drawer-header">
            <IconButton onClick={() => setOpen(false)} className="icon-white close-button">
              <CloseRoundedIcon className="icon-white" />
            </IconButton>
          </div>

          {user && (
            <div className="drawer-user">
               <Avatar className="drawer-avatar ">
           <PersonIcon sx={{ fontSize: 30 }} />
        </Avatar>
              <span className="drawer-username">
                {user.email?.split("@")[0] || "User"}
              </span>
            </div>
          )}

          <nav className="drawer-links">
            <Link to="/" className={`drawer-link ${isActive("/") ? "active" : ""}`}>Home</Link>
            <Link to="/compare" className={`drawer-link ${isActive("/compare") ? "active" : ""}`}>Compare</Link>
           
           <Link to="/watchlist" className={`drawer-link ${isActive("/watchlist") ? "active" : ""}`}>Watchlist</Link>
            
            <Link to="/dashboard" className={`drawer-link ${isActive("/dashboard") ? "active" : ""}`}>Dashboard</Link>
            {!user ? (
              <Link to="/login" className={`drawer-link ${isActive("/login") ? "active" : ""}`}>Login</Link>
            ) : (
              <Link to="/profile" className={`drawer-link ${isActive("/profile") ? "active" : ""}`}>Profile</Link>
            )}
          </nav>
        </div>
      </Drawer>
    </div>
  );
}

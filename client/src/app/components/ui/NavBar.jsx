import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../store/authSlice";
import AdminLink from "./NavLinkGroup/AdminLink";
import UserLink from "./NavLinkGroup/UserLink";
import GuestLinks from "./NavLinkGroup/GuestLinks";

const NavBar = () => {
  const user = useSelector(getCurrentUser());

  return (
    <nav className="nav-bar">
      <div className="nav-wrapper px-2">
        <Link to="/" className="brand-logo left">
          <img
            src={
              "https://img.freepik.com/premium-vector/sushi-logo_18099-54.jpg?w=2000"
            }
            alt="img"
            width="64"
            height="64"
          />
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {user?.admin && <AdminLink />}
          {user ? <UserLink user={user} /> : <GuestLinks />}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

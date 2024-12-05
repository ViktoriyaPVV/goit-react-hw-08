import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";
const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <div className={s.wrapperLinks}>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNav;

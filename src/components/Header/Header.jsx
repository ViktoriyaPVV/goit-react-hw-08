import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && <p>Welcome, {user.name}</p>}
      <div className={s.wrapperLinks}>
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={buildLinkClass} to="/login">
              Login
            </NavLink>
            <NavLink className={buildLinkClass} to="/register">
              Register
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button
            onClick={() => dispatch(logout())}
            className="btn btn-secondary"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
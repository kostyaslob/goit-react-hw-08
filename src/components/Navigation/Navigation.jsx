import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from 'clsx';

import { selectIsLoggedIn } from "../../redux/auth/selectors";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active)
}

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={buildLinkClass} to="/">Home</NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">Contacts</NavLink>
      )}
    </nav>
  );
}
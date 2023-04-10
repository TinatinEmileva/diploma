import "./Logo.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/vite.svg";

export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src={logo} alt="Website logo" />
      </NavLink>
    </div>
  );
}

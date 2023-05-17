import "./Logo.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src="https://img.freepik.com/premium-vector/furniture-store-logo-template-design_316488-1344.jpg" alt="Website logo" />
      </NavLink>
    </div>
  );
}
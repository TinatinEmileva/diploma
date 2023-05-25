
import { NavLink } from "react-router-dom";
import "./Logo.css";
export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src="https://img.freepik.com/premium-vector/furniture-store-logo-template-design_316488-1344.jpg" alt="Website logo" />
      </NavLink>
    </div>
  );
}
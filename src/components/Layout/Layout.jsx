import Category from "../../pages/Category";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "../logo/logo";
import Nav from "../Nav/Nav";
import "./Layout.css";


export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
      </header>
      <aside>
        <Category />
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}

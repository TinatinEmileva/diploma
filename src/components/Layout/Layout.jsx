import Logo from "../logo/logo";
import Nav from "../Nav/Nav";
import "./Layout.css";

export default function Layout(props) {
  return (  
    <div className="Layout">
      <header>
        <Logo/>
        <Nav />
      </header>
      <aside>Category</aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}

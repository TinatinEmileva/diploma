import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Cantacts from "./pages/Cantacts";
import Delivery from "./pages/Delivery";
import Storage from "./pages/Storage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Storage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Cantacts/>} />
          <Route path="/Delivery" element={<Delivery/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

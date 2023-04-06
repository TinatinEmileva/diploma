import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Cantacts from "./pages/Cantacts";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Cantacts/>} />
          <Route path="/Delivery" element={<Delivery/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

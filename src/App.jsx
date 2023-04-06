import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<h2> About </h2>} />
          <Route path="/contacts" element={<h2>Cantacts</h2>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

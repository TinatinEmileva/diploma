
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'

function App() {

  return (
    <div className="App">
     <Layout>
     <Routes>
        <Route path="/" element={<h2>Home </h2>} />
        <Route path="/about" element={<h2> About  </h2>}  />
      </Routes>
     </Layout>

    </div>
  )
}

export default App

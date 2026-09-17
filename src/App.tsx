import { Routes, Route } from "react-router-dom";
import './App.css'
import FrontPage from "./pages/frontPage/index.tsx";
import About from './pages/aboutUs/index.tsx';
import Reports from "./pages/reports/index.tsx";
import Header from "./components/Header/Header.tsx";


function App() {
  return (
    <>
      <Header/>
      
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/aboutUs" element={<About/>}/>
        <Route path="/reports" element={<Reports/>}/>
      </Routes>
    </>

  )
}

export default App

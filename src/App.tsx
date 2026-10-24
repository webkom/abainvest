import { Routes, Route } from "react-router-dom";
import FrontPage from "./pages/frontPage/index.tsx";
import About from './pages/aboutUs/index.tsx';
import Reports from "./pages/reports/index.tsx";
import Header from "./components/Header/Header.tsx";
import { ThemeProvider } from "@/components/theme-provider"


function App() {
  return (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header/>
      
      <Routes>
        
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/aboutUs" element={<About/>}/>
        <Route path="/reports" element={<Reports/>}/>
      
      </Routes>
    
    </ThemeProvider>


  )
}

export default App

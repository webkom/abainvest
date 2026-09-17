import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import FrontPage from "./pages/frontPage/index.tsx";
import About from './pages/aboutUs/index.tsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  )
}

export default App

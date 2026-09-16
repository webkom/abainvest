import { Link } from "react-router-dom";
import "./Header.module.css";

export default function Header() {
    return (
        <header className = "header">
            <div className = "logo">
                <img src="../assets/logo.png" alt="Logo" />
            </div>


            <nav>
                <Link to = "/"> Forside </Link>
                <Link to = "/aboutUs"> Om oss </Link>
                <Link to = "/reports"> Rapporter </Link>
            </nav>
        </header>
    )
}
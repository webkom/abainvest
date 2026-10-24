import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logoImg from "../../assets/logo.png";
import { ModeToggle } from "../mode-toggle.tsx"

export default function Header() {
    return (
        <header className = {styles.header}>
            <div className = {styles.logo}>
                <Link to = "/"> <img src = {logoImg} alt = "Logo" /> </Link>
            </div>


            <nav className = {styles.nav}>
                <Link to = "/aboutUs"> Om oss </Link>
                <Link to = "/reports"> Rapporter </Link>
                <ModeToggle/>
            </nav>
        </header>
    )
}
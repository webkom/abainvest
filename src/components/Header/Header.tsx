import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logoImg from "../../assets/logo.png";

export default function Header() {
    return (
        <header className = {styles.header}>
            <div className = {styles.logo}>
                <img src = {logoImg} alt = "Logo" />
            </div>


            <nav className = {styles.nav}>
                <Link to = "/"> Forside </Link>
                <Link to = "/aboutUs"> Om oss </Link>
                <Link to = "/reports"> Rapporter </Link>
            </nav>
        </header>
    )
}
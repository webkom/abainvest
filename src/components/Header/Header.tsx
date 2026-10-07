import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logoImg from "../../assets/logo.png";

export default function Header() {
    return (
        <header className = {styles.header}>
            <div className = {styles.logo}>
                <Link to = "/"> <img src = {logoImg} alt = "Logo" /> </Link>
            </div>


            <nav className = {styles.nav}>
                <Link to = "/aboutUs"> Om oss </Link>
                <Link to = "/reports"> Rapporter </Link>
            </nav>
        </header>
    )
}
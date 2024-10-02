import { Menu } from "lucide-react";
import Container from "../Container/Container";

import css from "./Header.module.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className={css.header}>
      <Container className={css.headerBox}>
        <a href="#" style={{ marginRight: "auto" }}>
          LOGO
        </a>
        <nav className={css.nav}>
          <ul className={css.navList}>
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
          </ul>
        </nav>
        <button>Sign In</button>
        <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
        <button>
          <Menu size={32} />
        </button>
      </Container>
    </header>
  );
};

export default Header;

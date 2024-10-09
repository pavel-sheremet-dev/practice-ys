import { Menu } from "lucide-react";
import Container from "../Container/Container";

import css from "./Header.module.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import IconButton from "../IconButton/IconButton";
import Button from "../Button/Button";

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
        <Button>Sign In</Button>
        <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
        <IconButton RLIcon={Menu} />
      </Container>
    </header>
  );
};

export default Header;

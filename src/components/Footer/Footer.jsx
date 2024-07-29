import Container from "../Container/Container";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container className={css.footerBox}>
        React Practice © {new Date().getFullYear()}
      </Container>
    </footer>
  );
};

export default Footer;

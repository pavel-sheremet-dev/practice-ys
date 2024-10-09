import Button from "../Button/Button";

export default function ThemeSwitcher({ toggleTheme, theme }) {
  return <Button onClick={toggleTheme}>{theme}</Button>;
}

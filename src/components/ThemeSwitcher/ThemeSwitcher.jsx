export default function ThemeSwitcher({ toggleTheme, theme }) {
  return <button onClick={toggleTheme}>{theme}</button>;
}

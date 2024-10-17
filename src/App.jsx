import { useEffect, useState } from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LogsPage from "./pages/LogsPage/LogsPage";
import LogsSearchPage from "./pages/LogsSearchPage/LogsSearchPage";
import LogDetailsPage from "./pages/LogDetailsPage/LogDetailsPage";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const dataLs = localStorage.getItem("theme");

    if (!dataLs) {
      return "light";
    }
    return dataLs;
    // return !dataLs ? "light" : dataLs
    // return dataLs ?? "light"
    // return localStorage.getItem("theme") ?? "light"
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />

      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/logs-search" element={<LogsSearchPage />} />
          <Route path="/logs/:logId" element={<LogDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;
// Створити сторінку home і Logs i searchlogs i дкиаоізації 1го логу
// переробтити Апп

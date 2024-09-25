import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LogList from "./components/LogList/LogList";
import Main from "./components/Main/Main";

import data from "./data/data.json";
import { createLogItem } from "./helpers/createLogItem";

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

  const [logData, setLogData] = useState(() => {
    const dataFromLs = localStorage.getItem("logs");
    if (!dataFromLs) {
      return data;
    }
    return JSON.parse(dataFromLs);
    // return data;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("logs", JSON.stringify(logData));
  }, [logData]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const addLogItem = () => {
    const newLogItem = createLogItem();
    console.log(newLogItem);
    setLogData([...logData, newLogItem]);
  };
  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />

      <Main>
        <section>
          <Container>
            <h1>Журнал</h1>
            <button onClick={addLogItem}>Add new logItem</button>
            <LogList logData={logData} />
          </Container>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default App;

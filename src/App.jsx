import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LogList from "./components/LogList/LogList";
import Main from "./components/Main/Main";

import data from "./data/data.json";

import LogForm from "./components/LogForm/LogForm";
import { addLog, deleteLog, readLogs } from "./services/api-logs";

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

  const [logData, setLogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const logs = await readLogs();
        setLogData(logs);
        setError(null);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const addLogItem = async (newLogItem) => {
    try {
      setIsLoading(true);
      const createdLogItem = await addLog(newLogItem);
      setLogData([createdLogItem, ...logData]);
      setError(null);
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteLogItem = async (id) => {
    try {
      setIsLoading(true);
      await deleteLog(id);
      setLogData(logData.filter((item) => item.id !== id));
      setError(null);
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  const sortedLogData = (() => {
    console.log("sorting");
    return logData.toSorted((a, b) => a.date - b.date);
  })();
  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />

      <Main>
        <section>
          <Container>
            <h1>Журнал</h1>
            {isLoading && <div>Is Loading...</div>}
            {!isLoading && error && <div>{error}</div>}
            {/* <button onClick={addLogItem}>Add new logItem</button> */}
            <LogForm onSubmit={addLogItem} />
            <LogList logData={sortedLogData} deleteLogItem={deleteLogItem} />
          </Container>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default App;

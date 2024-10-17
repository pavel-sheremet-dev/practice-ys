import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import LogForm from "../../components/LogForm/LogForm";
import LogList from "../../components/LogList/LogList";
import { addLog, deleteLog, readLogs } from "../../services/api-logs";

export default function LogsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [logData, setLogData] = useState([]);

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
    return logData.toSorted(
      (a, b) =>
        new Date(a.date) - new Date(b.date) ||
        a.username.localeCompare(b.username)
    );
  })();

  return (
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
  );
}

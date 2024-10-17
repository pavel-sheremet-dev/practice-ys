import { Search } from "lucide-react";
import Container from "../../components/Container/Container";
import IconButton from "../../components/IconButton/IconButton";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteLog, readLogsByName } from "../../services/api-logs";
import LogList from "../../components/LogList/LogList";

export default function LogsSearchPage() {
  const [params, setParams] = useSearchParams();
  const searchQuery = params.get("query");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [logData, setLogData] = useState([]);

  useEffect(() => {
    if (!searchQuery) return;

    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        const logs = await readLogsByName(searchQuery);
        setLogData(logs);
        setError(null);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.query.value.trim().toLowerCase();
    setParams(query ? { query } : {});
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
        <h1>Logs Search Page</h1>

        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="query" />
          </label>
          <IconButton RLIcon={Search} />
        </form>
        {isLoading && <div>Is Loading...</div>}
        {!isLoading && error && <div>{error}</div>}

        <LogList logData={sortedLogData} deleteLogItem={deleteLogItem} />
      </Container>
    </section>
  );
}

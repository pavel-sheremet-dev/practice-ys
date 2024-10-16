import axios from "axios";

axios.defaults.baseURL = "https://66cdad9a8ca9aa6c8ccb3c7d.mockapi.io";

// CRUD

export const addLog = async (newLog) => {
  const response = await axios.post("/logs", newLog);
  return response.data;
};
export const deleteLog = async (id) => {
  const response = await axios.delete(`/logs/${id}`);
  return response.data;
};
export const readLogs = async () => {
  const response = await axios.get("/logs");
  return response.data;
};

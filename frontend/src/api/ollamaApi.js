import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getModels = async () => {
  const response = await api.get("/api/models/");
  return response.data.models;
};
export const runBenchmark = async (model, prompt) => {
  const response = await api.post("/api/benchmark/", {
    model,
    prompt,
  });

  return response.data;
};
export const getHistory = async () => {
  const response = await api.get("/api/history/");
  return response.data;
};
export const getDashboard = async () => {
    const response = await api.get("/api/dashboard/");
    return response.data;
};
export const getCharts = async () => {
    const response = await api.get("/api/charts/");
    return response.data;
};
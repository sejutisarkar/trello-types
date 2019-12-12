import Axios from "axios";

const BASE_URL = "http://localhost:9000/";

const client = Axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export function fetchTasks() {
  return client.get("/tasks");
}

export function saveTasks({ params }) {
  return client.post("/tasks", params);
}

export function updateTasks({ id, params }) {
  return Axios.put(`${BASE_URL}tasks/${id}`, params);
}

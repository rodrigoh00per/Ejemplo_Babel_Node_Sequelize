import express, { json } from "express";
import morgan from "morgan";
import tasksRoutes from "./routes/tasks";
import projectsRoutes from "./routes/projects";

const app = express();

app.use(morgan("dev"));
app.use(json());
app.use("/api/tasks", tasksRoutes);
app.use("/api/projects", projectsRoutes);

export default app;

import { Router } from "express";
import {
  getTasks,
  getOneTask,
  createTask,
  deleteTask,
  updateTask,
  getProjectTask,
  getProjectTask2
} from "../controllers/task.controller";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getOneTask);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);
router.get("/project/:projectid", getProjectTask);
router.get("/project2/:projectid", getProjectTask2);

export default router;

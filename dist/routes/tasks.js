"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _task = require("../controllers/task.controller");

const router = (0, _express.Router)();
router.get("/", _task.getTasks);
router.get("/:id", _task.getOneTask);
router.post("/", _task.createTask);
router.delete("/:id", _task.deleteTask);
router.put("/:id", _task.updateTask);
router.get("/project/:projectid", _task.getProjectTask);
router.get("/project2/:projectid", _task.getProjectTask2);
var _default = router;
exports.default = _default;
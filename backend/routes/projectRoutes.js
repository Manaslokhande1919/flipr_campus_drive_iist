import express from "express";
import upload, { cropAndSave } from "../middleware/upload.js";
import Project from "../models/Project.js";
import path from "path";

const router = express.Router();

router.post("/", upload.single("image"), async (req, res) => {
  const imagePath = `uploads/${Date.now()}.jpg`;
  await cropAndSave(req.file, imagePath);

  const project = await Project.create({
    name: req.body.name,
    description: req.body.description,
    image: imagePath
  });

  res.json(project);
});

router.get("/", async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

export default router;

import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend escuchando en puerto ${PORT}`);
});

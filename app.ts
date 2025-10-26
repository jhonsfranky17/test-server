import express from "express";
import { config } from "dotenv";
import healthRoutes from "./routes/health.route";

config();

const PORT = process.env.APP_PORT;

const main = async () => {
  const server = express();

  server.use("/health", healthRoutes);

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();

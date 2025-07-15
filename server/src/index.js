import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import fileRoutes from "./routes/file.routes.js"
import { downloadFile } from "./controllers/file.controller.js";


dotenv.config();

const PORT=process.env.PORT || 5600;

      
const startServer = async () => {
    await connectDB();
    
    app.use('/api/files', fileRoutes);
    app.get("/file/:fileId", downloadFile)
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  };
  
  startServer();
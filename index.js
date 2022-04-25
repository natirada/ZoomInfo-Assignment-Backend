import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import productRoutes from "./api/routes/products.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/product", productRoutes);

app.listen(port, () => console.log('Server listening on port:' + port));

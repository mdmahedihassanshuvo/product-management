import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productRouter } from "./config/modules/products/product.routes";
const app: Application = express();

//parser
app.use(express.json());
app.use(express.text());
app.use(cors());

// application routes
app.use("/api", productRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

//export app for use the server separately
export default app;

import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productRouter } from "./app/config/modules/products/product.routes";
const app: Application = express();

//parser
app.use(express.json());
app.use(express.text());
app.use(cors());

// application routes
app.use("/api", productRouter);

app.get("/", (req: Request, res: Response) => {
  
  res.send("Welcome to my application");
});

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    status: false,
    message: "Route not found",
  });
});
//export app for use the server separately
export default app;

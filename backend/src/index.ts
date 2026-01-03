import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.json({ message: "Home Page" });
});

app.listen(PORT, () => {
  console.log(`Server is listing Port ${PORT}`);
});

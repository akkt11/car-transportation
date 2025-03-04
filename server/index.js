import express from "express";
import mongoose from "mongoose";
import UserModel from "./models/User.js";
import cors from "cors";

mongoose
  .connect(
    "mongodb+srv://akktii:aktan010104@cluster0.julvv.mongodb.net/user-car?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB is ok");
  })
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(cors());

app.use(express.json());

app.post("/user/create", async (req, res) => {
  try {
    const doc = new UserModel({
      name: req.body.name,
      phone: req.body.phone,
      car: req.body.car,
      date: req.body.date,
    });

    await doc.save();

    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Не удалось подать заявку" });
  }
});

app.use(express.json());

app.listen(4444, (error) => {
  if (error) {
    return console.log(error);
  }

  console.log("server is ok");
});

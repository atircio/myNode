const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
  console.log("ughhj");
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(201).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = UserModel.findById(id);
    res.status(200).json(id);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);
    res.status(200).send("User eliminado com sucesso");
  } catch (error) {}
});

const port = 8080;

app.listen(port, () => console.log("Iniciando na porta 8080"));

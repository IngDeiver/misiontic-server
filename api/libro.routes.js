const express = require("express");
const router = express.Router();
const Libro = require("../Model/Libro");

router.get("/list", async (req, res, next) => {
  const libros = await Libro.find({});
  res.json(libros);
});

router.post("/create", async (req, res, next) => {
  const libro = await new Libro(req.body).save();
  res.json(libro);
});

router.put("/update/:id", async (req, res, next) => {
  const libro = await Libro.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
  res.json(libro);
});

router.delete("/remove/:id", async (req, res, next) => {
  await Libro.remove({ _id: req.params.id });
  res.json({ ok: true });
});

module.exports = router;

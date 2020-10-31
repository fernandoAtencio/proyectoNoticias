const express = require("express");
const router = express.Router();

const objetoNoticias = [
  {
    id: 1,
    titulo: "Programación en Javascript",
    descripcion:
      "La programación en Javascript es furor a nivel mundial ya que se puede trabajar del lado del servidor y del cliente",
    cuerpo:
      "Tecnologías como React, Vue, Angular y demas frameworks o librerías son utilizadas para trabajar la parte del frontend y tecnologías como NodeJS se dedican a la parte del backend",
    autor: "Franco Di Leo",
    fecha: "27/02/2020",
  },
  {
    id: 2,
    titulo: "Programación en Python",
    descripcion:
      "La programación en Python es furor a nivel mundial ya que se puede trabajar del lado del servidor y del cliente",
    cuerpo: "Python tambien es tendencia en materia de inteligencia artificial",
    autor: "Franco Di Leo",
    fecha: "27/02/2020",
  },
];

router.get("/all", (req, res, next) => {
  res.render("noticias", { noticias: objetoNoticias });
});

router.get("/:id", (req, res, next) => {
  console.log(`El id que llega es el: ${req.params.id}`);
  res.end();
});
module.exports = router;

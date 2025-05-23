import express from "express";

const router = express.Router();

// Le operazioni crud che possiamo fare con pizze

const menu = [
  {
    id: "1",
    name: "Margherita",
    image: "imgs/pizze/margherita.webp",
    ingredients: ["pomodoro", "mozzarella"],
  },
  {
    id: "2",
    name: "Marinara",
    image: "imgs/pizze/marinara.jpeg",
    ingredients: ["pomodoro", "aglio", "origano"],
  },
  {
    id: "3",
    name: "Diavola",
    image: "imgs/pizze/diavola.jpeg",
    ingredients: ["pomodoro", "mozzarella", "salame piccante"],
  },
  {
    id: "4",
    name: "Bufalina",
    image: "imgs/pizze/bufalina.jpeg",
    ingredients: ["pomodoro", "mozzarella di bufala"],
  },
  {
    id: "6",
    name: "4 formaggi",
    image: "imgs/pizze/4_formaggi.jpeg",
    ingredients: [
      "pomodoro",
      "mozzarella",
      "gorgonzola",
      "parmigiano",
      "ricotta",
    ],
  },
];

// lettura di tutti
// INDEX
router.get("/", (req, res) => {
  res.json({
    data: menu,
  });
});

// lettura di dettagli di un singolo
// SHOW
router.get("/:id", (req, res) => {
  const pizzaId = req.params.id;
  const pizza = menu.find((curPizza) => curPizza.id === pizzaId);
  res.json({
    data: pizza,
  });
});

// creazione
router.post("/", (req, res) => {
  res.json({
    data: "Aggiungo una nuova pizza",
  });
});

// modifica
router.put("/:id", (req, res) => {
  const pizzaId = req.params.id;
  res.json({
    data: `Modifico i dati della pizza con id ${pizzaId}`,
  });
});

// cancellazione
router.delete("/:id", (req, res) => {
  const pizzaId = req.params.id;
  res.json({
    data: `Cancello la pizza con id ${pizzaId}`,
  });
});

export default router;

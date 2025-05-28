import express from "express";
import pizzaController from "../controllers/pizzaController.js";
import checkPizzaExistsMiddleware from "../middlewares/checkPizzaExistsMiddleware.js";
import validatePizza from "../middlewares/validatePizza.js";

const router = express.Router();

// Le operazioni crud che possiamo fare con pizze

// lettura di tutti
// INDEX
router.get("/", pizzaController.index);

// lettura di dettagli di un singolo
// SHOW
router.get("/:id", checkPizzaExistsMiddleware, pizzaController.show);

// creazione
router.post("/", validatePizza, pizzaController.store);

// modifica
router.put(
  "/:id",
  checkPizzaExistsMiddleware,
  validatePizza,
  pizzaController.update
);

// cancellazione
router.delete("/:id", checkPizzaExistsMiddleware, pizzaController.destroy);

export default router;

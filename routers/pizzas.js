import express from "express";
import pizzaController from "../controllers/pizzaController.js";

const router = express.Router();

// Le operazioni crud che possiamo fare con pizze

// lettura di tutti
// INDEX
router.get("/", pizzaController.index);

// lettura di dettagli di un singolo
// SHOW
router.get("/:id", pizzaController.show);

// creazione
router.post("/", pizzaController.store);

// modifica
router.put("/:id", pizzaController.update);

// cancellazione
router.delete("/:id", pizzaController.destroy);

export default router;

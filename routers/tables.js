import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    data: "Invio lal ista di tutti i tavoli",
  });
});

router.get("/:id", (req, res) => {
  const tableId = req.params.id;
  res.json({
    data: `Invio i dettagli di tavolo con id ${tableId}`,
  });
});

router.post("/", (req, res) => {
  res.json({
    data: "Creo un nuovo tavolo",
  });
});

router.put("/:id", (req, res) => {
  const tableId = req.params.id;
  res.json({
    data: `Modifico il tavolo con id ${tableId}`,
  });
});

router.delete("/:id", (req, res) => {
  const tableId = req.params.id;
  res.json({
    data: `cancello il tavolo con id ${tableId}`,
  });
});

export default router;

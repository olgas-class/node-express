function validatePizza(req, res, next) {
  const pizzaData = req.body;
  const tuttiDatiEsistono =
    pizzaData.name !== undefined &&
    pizzaData.ingredients !== undefined &&
    pizzaData.price !== undefined;
  const priceIsNumber = !isNaN(pizzaData.price);

  if (tuttiDatiEsistono === false || priceIsNumber === false) {
    res.status(400);
    return res.json({
      error: "Dati inviati non sono validi",
    });
  } else {
    next();
  }
}

export default validatePizza;

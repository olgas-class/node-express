import pizzasArray from "../data/pizzas.js";

function checkPizzaExistsMiddleware(req, res, next) {
  // Prelevo id della pizza da trovare dalla req
  const pizzaId = req.params.id;
  // Trovo l'indice della pizza nell'array delle pizze
  const pizzaIndex = pizzasArray.findIndex(
    (curPizza) => pizzaId === curPizza.id
  );
  // Se l'indice è - 1
  if (pizzaIndex === -1) {
    //    invio la risposta 404 e mi fermo
    res.status(404);
    return res.json({
      error: "Pizza non trovata: risposta da middleware",
    });
  } else {
    // Altrimenti
    //    salvo l'indice della pizza nella richiesta
    req.pizzaIndex = pizzaIndex;
    //    invoco next
    next();
  }
}

export default checkPizzaExistsMiddleware;

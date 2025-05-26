import pizzasArray from "../data/pizzas.js";

const index = (req, res) => {
  const ingredientFilter = req.query.ingredient;

  let result = pizzasArray;

  if (ingredientFilter !== undefined) {
    result = pizzasArray.filter((curPizza) =>
      curPizza.ingredients.includes(ingredientFilter)
    );
  }

  res.json({
    data: result,
    count: result.length,
  });
};

const show = (req, res) => {
  const pizzaId = req.params.id;
  const pizza = pizzasArray.find((curPizza) => curPizza.id === pizzaId);

  if (pizza === undefined) {
    res.status(404);
    return res.json({
      error: "Pizza non trovata",
    });
  }
  res.json({
    data: pizza,
  });
};

const store = (req, res) => {
  res.json({
    data: "Aggiungo una nuova pizza",
  });
};

const update = (req, res) => {
  const pizzaId = req.params.id;
  res.json({
    data: `Modifico i dati della pizza con id ${pizzaId}`,
  });
};

const destroy = (req, res) => {
  const pizzaId = req.params.id;

  const index = pizzasArray.findIndex((curPizza) => curPizza.id === pizzaId);

  if (index === -1) {
    res.status(404);
    return res.json({
      error: "Pizza non trovata",
    });
  }

  pizzasArray.splice(index, 1);

  res.sendStatus(204);
};

const pizzaController = {
  index,
  show,
  store,
  update,
  destroy,
};

export default pizzaController;

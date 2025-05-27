import pizzasArray from "../data/pizzas.js";

const sendNotFound = (res) => {
  res.status(404);
  return res.json({
    error: "Pizza non trovata",
  });
};

const index = (req, res) => {
  console.log(req.query);

  const ingredientFilter = req.query.ingredient;
  const maxPriceFilter = req.query.maxPrice;

  let result = pizzasArray;

  // DA rivedere per rendere la soluzione più scalabile
  if (ingredientFilter !== undefined && maxPriceFilter !== undefined) {
    // filtro per entrambi
  } else if (ingredientFilter !== undefined) {
    // filtro per ingrediente
  } else if (maxPriceFilter !== undefined) {
    // filtro per prezzo
  }

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
    return sendNotFound(res);
  }
  res.json({
    data: pizza,
  });
};

const store = (req, res) => {
  const newPizza = req.body;
  const lastId = parseInt(pizzasArray[pizzasArray.length - 1].id);
  newPizza.id = (lastId + 1).toString();
  pizzasArray.push(newPizza);

  res.status(201);
  res.json({
    data: newPizza,
  });
};

const update = (req, res) => {
  const pizzaId = req.params.id;
  const updatedPizzaData = req.body;

  const pizza = pizzasArray.find((curPizza) => curPizza.id === pizzaId);

  if (!pizza) {
    return sendNotFound(res);
  }

  pizza.name = updatedPizzaData.name;
  pizza.image = updatedPizzaData.image;
  pizza.ingredients = updatedPizzaData.ingredients;
  pizza.price = updatedPizzaData.price;

  res.json({
    data: pizza,
  });
};

const destroy = (req, res) => {
  const pizzaId = req.params.id;

  const index = pizzasArray.findIndex((curPizza) => curPizza.id === pizzaId);

  if (index === -1) {
    return sendNotFound(res);
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

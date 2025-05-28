import pizzasArray from "../data/pizzas.js";

const index = (req, res) => {
  console.log("Ciao sono index delle pizze");

  console.log(req.query);

  // const ingredientFilter = req.query.ingredient;
  // const maxPriceFilter = req.query.maxPrice;

  const { ingredient, maxPrice } = req.query;

  let result = [...pizzasArray];

  if (ingredient !== undefined) {
    result = result.filter((curPizza) =>
      curPizza.ingredients.includes(ingredient)
    );
  }

  if (maxPrice !== undefined) {
    result = result.filter((curPizza) => curPizza.price <= parseInt(maxPrice));
  }

  res.json({
    data: result,
    count: result.length,
  });
};

const show = (req, res) => {
  const pizza = pizzasArray[req.pizzaIndex];
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
  const updatedPizzaData = req.body;
  const pizza = pizzasArray[req.pizzaIndex];

  pizza.name = updatedPizzaData.name;
  pizza.image = updatedPizzaData.image;
  pizza.ingredients = updatedPizzaData.ingredients;
  pizza.price = updatedPizzaData.price;

  res.json({
    data: pizza,
  });
};

const destroy = (req, res) => {
  pizzasArray.splice(req.pizzaIndex, 1);
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

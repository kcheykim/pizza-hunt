const router = require('express').Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');


router //Set up GET all and POST at /api/pizzas
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

router //Set up GET one, PUT, and DELETE at /api/pizzas/:id
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);
module.exports = router;
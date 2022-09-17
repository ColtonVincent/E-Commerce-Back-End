const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [{
      model: Product,
    }]
  })
  .then(dbCategory => res.json(dbCategory))
  .catch(err => {console.log(err)})
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id, {
    include: [Product]
  })
  .then(dbCategory => res.json(dbCategory))
  .catch(err => {console.log(err)})
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then(dbCategory => res.json(dbCategory))
  .catch(err => {console.log(err)})
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update({where:{id:req.params.id}}, req.body)
  .then(dbCategory => res.json(dbCategory))
  .catch(err => {console.log(err)})
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.destroy({where:{id:req.params.id}})
  .then(dbCategory => res.json(dbCategory))
  .catch(err => {console.log(err)})
  // delete a category by its `id` value
});

module.exports = router;

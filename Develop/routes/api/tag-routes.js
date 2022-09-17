const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [{model: Product,
    through: ProductTag
    }]
  })
  .then(dbTag => res.json(dbTag))
  .catch(err => {console.log(err)})
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk(req.params.id,{
    include: [{model: Product,
    through: ProductTag
    }]
  })
  .then(dbTag => res.json(dbTag))
  .catch(err => {console.log(err)})
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then(dbTag => res.json(dbTag))
  .catch(err => {console.log(err)})
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({where:{id:req.params.id}}, req.body)
  .then(dbTag => res.json(dbTag))
  .catch(err => {console.log(err)})
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where:{id:req.params.id}})
  .then(dbTag => res.json(dbTag))
  .catch(err => {console.log(err)})
});

module.exports = router;

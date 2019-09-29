const express = require('express');
const router = express.Router();

// Item Modal
const Item = require('../../models/item');

//Get api/items
router.get('/', (req, res) =>{
    Item.find()
        .sort({ date: -1 })
        .then(item => res.json(item));
});

//Post api/items
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        price: req.body.price,
        img: req.body.img,
        department: req.body.department
    });
    newItem.save().then(item => res.json(item));
})

//Delete api/items
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
    });

module.exports = router;
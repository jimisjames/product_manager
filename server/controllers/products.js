
const mongoose = require('mongoose'),
Product = mongoose.model('Product')


module.exports = {

    all: function(req, res) {
        Product.find({}, function(err, data){
            if(err){
                console.log("error")
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", products: data});
            }
        })
    },

    new: function(req, res) {

        var product = new Product({ name: req.body.name, price: req.body.price, url: req.body.url });

        product.save(function (err) {
            if (err) {
                console.log('something went wrong');
                res.json({message: "Error", error: err});
            } else {
                //console.log('successfully added a product!');
                res.json({message: "Success"});
            }
        })
    },

    delete: function(req, res, id) {
    	Product.deleteOne({ _id: id }, function (err) {
            if (err) {
                console.log('something went wrong');
                res.json({message: "Error", error: err});
            } else {
                //console.log('successfully removed product');
                res.json({message: "Success", product: "Removed"});
            }
        })
    },

    getById: function(req, res, id) {
        Product.findOne({ _id: id }, function (err, data) {
            if (err) {
                console.log(err)
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", product: data});
            }
        })
    },

    update: function(req, res) {
        console.log(req.body)
        Product.update({ _id: req.body._id }, {$set: { name: req.body.name, price: req.body.price, url: req.body.url }}, function (err) {
            if (err) {
                console.log('something went wrong');
                res.json({message: "Error", error: err});
            } else {
                console.log('successfully updated product');
                res.json({message: "Success", product: "updated"});
            }
        })
    }

};
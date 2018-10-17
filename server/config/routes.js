
const products = require('../controllers/products.js')

module.exports = function (app) {

    app.get('/all', function (req, res) {
        products.all(req, res)
    })

    app.post('/', function (req, res) {
        products.new(req, res)
    })

    app.delete('/:id', function (req, res) {
        products.delete(req, res, req.params.id)
    })

    app.get('/blah/:id', function (req, res) {
        products.getById(req, res, req.params.id)
    })

    app.put('/', function (req, res) {
        products.update(req, res)
    })
}
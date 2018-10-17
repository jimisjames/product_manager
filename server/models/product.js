
const mongoose = require('mongoose')

var ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
    price: { type: Number, required: true },
    url: { type: String, required: true, minlength: 4 },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} })

mongoose.model('Product', ProductSchema);
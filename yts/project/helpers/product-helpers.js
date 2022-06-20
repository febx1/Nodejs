var db = require('../config/connection')
module.exports = {
    addProduct: (product) => {
        db.get().collection('product').insertOne(product).then((data, callback) => {

            console.log(data.insertId)
            callback(true)
            // callback(data.ops[0]._id)
        })
    }
}
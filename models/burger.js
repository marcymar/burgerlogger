const orm = require('../config/orm.js')

const model = { }

model.selectAll = (cb) => {
  orm.read('burgers', burgers => cb(burgers))
}

model.insertOne = (burger, cb) => {
  orm.create('burgers', burger, id => cb(id))
}

model.updateOne = (updates, where, cb) => {
  orm.update('burgers', updates, where, () => cb())
}

module.exports = model
const sequelizeDb = require('../../models')
const Aemet = sequelizeDb.Aemet
const Op = sequelizeDb.Sequelize.Op

exports.create = (req, res) => {
  Aemet.bulkCreate(req.body).then(async data => {
    res.status(200).send(data)
  }).catch(err => {
    if (err.errors) {
      res.status(422).send({
        message: err.errors
      })
    } else {
      res.status(500).send({
        message: 'Algún error ha surgido al insertar el dato.'
      })
    }
  })
}

exports.findAll = (req, res) => {

  Aemet.findAll({
    order: [['createdAt', 'DESC']]
  })
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      res.status(500).send({
        message: err.errors || 'Algún error ha surgido al recuperar los datos.'
      })
    })
}
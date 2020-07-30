const routes = require('express').Router()
const Product = require('./models/product')
const User = require('./models/user')

//TODOS OS PRODUTOS

routes.get('/', async function (req, res) {
  const products = await Product.find()
  return res.json(products)
})

//CRIAR PRODUTO

routes.post('/create', async function (req, res) {
  const product = await Product.create({
    BARCODE: '7899101616042',
    NAME: 'Balueiro 28L mod Smart box',
    QUANTITY: 1,
    DESCRIPTION: '',
    TYPE: 'EAN_13',
    DATE: '2020-06-15 08:31:25'
  })
  return res.json(product)
})

//LOGIN

routes.post('/login', async function (req, res) {
  const { Usuario, Senha } = req.body

  const response = await User.findOne({ Usuario })
  if (response != null) {
    if (response.Usuario === Usuario && response.Senha === Senha) {
      return res.send(true)
    }
    return res.send(false)
  }
  return res.send(false)
})

module.exports = routes

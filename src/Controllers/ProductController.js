const Product = require('../Models/Product');

class ProductController {
/**
 * Lista todos os produtos
 */
  async index(req, res) {
    try {
      const products = await Product.find();
      return res.send(products);
    } catch (err) {
      return res.send({ err });
    }
  }

  /**
   * Mostra um produto em especifico.
   */
  async show(req, res) {
    try {
      // adicionar validação para req.params.id
      const product = await Product.findById(req.params.id);
      return res.send({ product });
    } catch (err) {
      return res.status(400).send({ erro: 'Produto nao encontrado' });
    }
  }

  /**
   * Insere um novo produto na collection Produto
   */
  async store(req, res) {
    try {
      const product = await Product.create(req.body);
      return res.send({ product });
    } catch (err) {
      console.log(err);
      res.status(400).send({ error: 'Problema ao inserir produto.' });
    }
  }

  /**
   * Altera um produto em especifico
   */
  async update(req, res) {
    // validar requisição e params
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.send({ product });
    } catch (err) {
      return res.status(400).send({ error: 'Erro ao atualizar produto' });
    }
  }

  /**
   * Deleta um produto em especifico.
   */
  async delete(req, res) {
    try {
      // validar req.params.id
      const productToRemove = await Product.findByIdAndRemove(req.params.id);
      return res.send({ productToRemove });
    } catch (err) {
      return res.status(400).send({ error: 'Erro ao apagar produto' });
    }
  }
}

 module.exports  = new ProductController();

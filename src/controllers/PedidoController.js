const Pedido = require('../models/Pedido');

module.exports = {
    async index(req, res) {
        const pedidos = await Pedido.findAll();
        return res.json({pedidos});
    },
    
    async create(req, res) {
        const pedido = req.body;
        const novoPedido = await Pedido.create(pedido);
        return res.json(novoPedido);
    },

    async update(req, res) {
        const { id } = req.params;
        const pedido = req.body;
        
        try {
            const novoPedido = await Pedido.update(pedido, {
                where: {
                    id
                }
            });
            return res.json({ novoPedido });
        } catch (err) {
            return res.status(400).send({error: 'id not found'});
        }
    },

    async destroy(req, res) {
        const { id } = req.params;

        try {
            await Pedido.destroy({
                where: {
                    id
                }
            });
            return res.status(204).send();
        } catch(err) {
            return res.status(400).send({error: 'id not found'});
        }
    }
}
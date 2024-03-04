const {Orders} = require("../models/models");

class OrdersController{
    async create(req, res) {
        const {  FirstPoint, LastPoint, Comments} = req.body;
        try {
            const order = await Orders.create({ FirstPoint, LastPoint, Comments });
            return res.json(order);
        } catch (error) {
            console.error("Ошибка при создании заказа:", error);
            return res.status(500).json({ message: "Ошибка сервера при создании заказа" });
        }
    }

    async getAll(req, res) {
        try {
            const orders = await Orders.findAll();
            return res.json(orders);
        } catch (error) {
            console.error("Ошибка при получении всех заказов:", error);
            return res.status(500).json({ message: "Ошибка сервера при получении всех заказов" });
        }
    }

    async getOne(req, res) {
        const { id } = req.params;
        try {
            const order = await Orders.findOne({ where: { id } });
            if (!order) {
                return res.status(404).json({ message: "Заказ не найден" });
            }
            return res.json(order);
        } catch (error) {
            console.error("Ошибка при получении заказа:", error);
            return res.status(500).json({ message: "Ошибка сервера при получении заказа" });
        }
    }

    async change(req, res) {
        const { id } = req.params;
        const { Comments, Date, ClientId, ManagerId, DriverId, OrderStatusId, RouteId, PayId, CargoId } = req.body;
        try {
            let order = await Orders.findOne({ where: { id } });
            if (!order) {
                return res.status(404).json({ message: "Заказ не найден" });
            }
            order = await order.update({ Comments, Date, ClientId, ManagerId, DriverId, OrderStatusId, RouteId, PayId, CargoId });
            return res.json(order);
        } catch (error) {
            console.error("Ошибка при изменении заказа:", error);
            return res.status(500).json({ message: "Ошибка сервера при изменении заказа" });
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            const deleted = await Orders.destroy({ where: { id } });
            if (!deleted) {
                return res.status(404).json({ message: "Заказ не найден" });
            }
            return res.json({ message: "Заказ успешно удален" });
        } catch (error) {
            console.error("Ошибка при удалении заказа:", error);
            return res.status(500).json({ message: "Ошибка сервера при удалении заказа" });
        }
    }
}

module.exports = new OrdersController()
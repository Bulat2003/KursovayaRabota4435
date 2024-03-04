const {Client} = require('../models/models')
const  ApiError = require('../error/ApiError')
class ClientsController{
    async create(req,res){
        const {LastName} = req.body
        const {FirstName} = req.body
        const {Patronymic} = req.body
        const {Email} = req.body
        const {Password} = req.body
        const {Birthday} = req.body
        const {Phone} = req.body
        const client = await Client.create({LastName, FirstName, Patronymic, Email, Password, Birthday, Phone})
        return res.json(client)
    }

    async getAll(req, res){
        try {
            const clients = await Client.findAll();
            return res.json(clients);
        } catch (error) {
            console.error("Ошибка при получении списка пользователей:", error);
            return res.status(500).json({ error: "Ошибка при получении списка пользователей" });
        }
    }

    async getOne(req, res){
        try {
            const { id } = req.params;
            const client = await Client.findByPk(id);
            if (!client) {
                return res.status(404).json({ error: "Клиент не найден" });
            }
            return res.json(client);
        } catch (error) {
            console.error("Ошибка при получении информации о клиенте:", error);
            return res.status(500).json({ error: "Ошибка при получении информации о клиенте" });
        }
    }

    async delete(req, res){
        try {
            const { id } = req.params;
            const deletedCount = await Client.destroy({ where: { id } });
            if (deletedCount === 0) {
                return res.status(404).json({ error: "Клиент не найден" });
            }
            return res.json({ message: "Клиент успешно удален" });
        } catch (error) {
            console.error("Ошибка при удалении клиента:", error);
            return res.status(500).json({ error: "Ошибка при удалении клиента" });
        }
    }

    async change(req,res){
        try {
            const { id } = req.params;
            const { LastName, FirstName, Patronymic, Email, Password, Birthday, Phone } = req.body;
            const [updatedCount, updatedClient] = await Client.update(
                { LastName, FirstName, Patronymic, Email, Password, Birthday, Phone },
                { where: { id }, returning: true }
            );
            if (updatedCount === 0) {
                return res.status(404).json({ error: "Клиент не найден" });
            }
            return res.json(updatedClient[0]);
        } catch (error) {
            console.error("Ошибка при обновлении информации о клиенте:", error);
            return res.status(500).json({ error: "Ошибка при обновлении информации о клиенте" });
        }
    }


}

module.exports = new ClientsController()
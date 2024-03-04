const { Driver, Car } = require('../models/models');
const ApiError = require('../error/ApiError');

class DriverController {
    async create(req, res) {
        try {
            const { LastName, FirstName, Patronymic, Email, Password, Birthday, Phone } = req.body;
            const driver = await Driver.create({ LastName, FirstName, Patronymic, Email, Password, Birthday, Phone });
            return res.json(driver);
        } catch (error) {
            console.error("Ошибка при создании водителя:", error);
            return res.status(500).json({ error: "Ошибка при создании водителя" });
        }
    }

    async getAll(req, res) {
        try {
            const drivers = await Driver.findAll({
                include: [{
                    model: Car, as: 'Car' }]
            });
            return res.json(drivers);
        } catch (error) {
            console.error("Ошибка при получении списка водителей:", error);
            return res.status(500).json({ error: "Ошибка при получении списка водителей" });
        }
    }



    async getOne(req, res) {
        try {
            const { id } = req.params;
            const driver = await Driver.findByPk(id);
            if (!driver) {
                return res.status(404).json({ error: "Водитель не найден" });
            }
            return res.json(driver);
        } catch (error) {
            console.error("Ошибка при получении информации о водителе:", error);
            return res.status(500).json({ error: "Ошибка при получении информации о водителе" });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedCount = await Driver.destroy({ where: { id } });
            if (deletedCount === 0) {
                return res.status(404).json({ error: "Водитель не найден" });
            }
            return res.json({ message: "Водитель успешно удален" });
        } catch (error) {
            console.error("Ошибка при удалении водителя:", error);
            return res.status(500).json({ error: "Ошибка при удалении водителя" });
        }
    }

    async change(req, res) {
        try {
            const { id } = req.params;
            const { LastName, FirstName, Patronymic, Email, Password, Birthday, Phone } = req.body;
            const [updatedCount, updatedDriver] = await Driver.update(
                { LastName, FirstName, Patronymic, Email, Password, Birthday, Phone },
                { where: { id }, returning: true }
            );
            if (updatedCount === 0) {
                return res.status(404).json({ error: "Водитель не найден" });
            }
            return res.json(updatedDriver[0]);
        } catch (error) {
            console.error("Ошибка при обновлении информации о водителе:", error);
            return res.status(500).json({ error: "Ошибка при обновлении информации о водителе" });
        }
    }
}

module.exports = new DriverController();

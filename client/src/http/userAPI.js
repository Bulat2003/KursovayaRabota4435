import { $authHost, $host } from "./index";

export const registration = async (LastName, FirstName, Patronymic, Email, Password, Phone, Birthday, role) => {
    const { data } = await $host.post('api/user/registration', { LastName, FirstName, Patronymic, Email, Password, Phone, Birthday, role});
    return data;
};

export const login = async (Email, Password) => {
    try {
        const { user, role } = await $host.post('/api/user/login', { Email, Password });
        return { user, role }; // Возвращаем данные пользователя и его роль
    } catch (error) {
        throw error; // Если произошла ошибка, пробросьте ее выше для обработки в компоненте Auth
    }
}

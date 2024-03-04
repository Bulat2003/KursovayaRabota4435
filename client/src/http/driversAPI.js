import { $authHost, $host } from "./index";

export const fetchDrivers = async () => {
    const { data } = await $host.get('api/driver');
    return data;
};

export const fetchClients = async () => {
    const { data } = await $host.get('api/client');
    return data;
};

export const fetchOneDriver = async (id) => {
    const { data } = await $host.get('api/driver/' + id);
    return data;
};

export const fetchOneClient = async (id) => {
    const { data } = await $host.get('api/client/' + id);
    return data;
};
export const fetchCars = async () => {
    const { data } = await $host.get('api/car');
    return data;
};
export const deleteDriver = async(id) =>{
    const { data } = await $host.delete('/api/driver/' + id);
    return data
}
export const deleteClient = async(id) =>{
    const { data } = await $host.delete('/api/client/' + id);
    return data
};

export const createOrder = async (FirstPoint, LastPoint, Comments) => {
    const { data } = await $host.post('api/order', {
        FirstPoint,
        LastPoint,
        Comments,
        // Устанавливаем null по умолчанию для указанных полей
        clientId: null,
        managerId: null,
        driverId: null,
        orderStatusId: null,
        payId: null,
        cargoId: null
    });
    return data;
};


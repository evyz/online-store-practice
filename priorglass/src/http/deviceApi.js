import { $authHost, $host } from "."

// ------- Типы ------- //

export const createType = async(name) => {
    const {data} = await $authHost.post('api/type', {name})
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('/api/type')
    return data
}

// ------- Типы ------- //



// ------- Девайс ------- //

export const createDevice = async (name,price,width,height, typeId) => {
    const {data} = await $authHost.post('api/device', {name,price,width,height, typeId})
    return data
}   

export const fetchDevices = async (typeId) => {
    const {data} = await $host.get('/api/device', {params: {typeId}})
    return data
}

export const fetchDevice = async (id) => {
    const {data} = await $host.get('/api/device/' + id)
    return data
}

// ------- Девайс ------- //


// ------- Девайс ------- //

export const fetchBasket = async () => {
    const {data} = await $authHost.get('/api/cart')
    return data
}

export const addToBasket = async (deviceId) => {
    const {data} = await $authHost.post('/api/cart', {deviceId})
    return data
}

export const deleteDeviceFromBasket = async (id) => {
    const {data} = await $authHost.delete('/api/cart/' + id)
    return data 
}

// ------- Девайс ------- //
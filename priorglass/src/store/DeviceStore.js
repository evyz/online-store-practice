import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._types = [
            {id: 1, name: "Прозрачное стекло"},
            {id: 2, name: "Осветленное стекло"},
            {id: 3, name: "Тонированное серое стекло"},
            {id: 4, name: "Тонированное бронзовое стекло"},
            {id: 5, name: "Матовое стекло"},
            {id: 6, name: "Зеркало"}
        ]
        this._sizes = [
            {id: 1, width: 100, height: 200},
            {id: 2, width: 100, height: 200},
            {id: 3, width: 100, height: 200},
            {id: 4, width: 100, height: 200},
            {id: 5, width: 100, height: 200}

        ]
        this._devices = [
            {id: 1, name: "Какое-нить", price: 1000, width: 100, height: 200, typeId: 1},
            {id: 2, name: "Какое-нить 2", price: 1500, width: 100, height: 200, typeId: 1}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setSizes(sizes){
        this._sizes = sizes
    }
    setDevices(devices){
        this._devices = devices
    }

    get types(){
        return this._types
    }
    get sizes(){
        return this._sizes
    }
    get devices(){
        return this._devices
    }
}

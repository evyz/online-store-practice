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
        this._type = {}
        this._width = [
            {id: 1, width: 100  },
            {id: 2, width: 1000 },
            {id: 3, width: 1500 },
            {id: 4, width: 100  },
            {id: 5, width: 100  }

        ]
        this._selectedWidth = {}
        this._devices = [
            {id: 1, name: "Какое-нить", price: 1000, width: 100, height: 200, typeId: 1},
            {id: 2, name: "Какое-нить 2", price: 1500, width: 100, height: 200, typeId: 1}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setType(type){
        this._type = type
    }

    setWidth(sizes){
        this._width = sizes
    }
    setSelectedWidth(width){
        this._selectedWidth = width
    }

    setDevices(devices){
        this._devices = devices
    }

    get types(){
        return this._types
    }
    get type(){
        return this._type
    }

    get width(){
        return this._width
    }
    get selectedWidth(){
        return this._selectedWidth
    }

    get devices(){
        return this._devices
    }
}

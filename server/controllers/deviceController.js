const { Device } = require("../db/models")

class DeviceController{
    async getAll(req,res,next){
        let {typeId, width, height} = req.query

        let devices;

        // All
        if(!typeId && !width && !height){
            devices = await Device.findAll({})
        }
        if(typeId && width && height){
            devices = await Device.findAll({where : {typeId, size_w : width, size_h : height}})
        }

        // 1 from all
        if(typeId && !width && !height){
            devices = await Device.findAll({where: {typeId}})
        }
        if(!typeId && width && !height){
            devices = await Device.findAll({where: {size_w : width}})
        }
        if(!typeId && !width && height){
            devices = await Device.findAll({where: {size_h : height}})
        }

        // 2 from all
        if(typeId && width && !height){
            devices = await Device.findAll({where: {typeId, size_w : width}})
        }
        if(typeId && !width && height){
            devices = await Device.findAll({where: {typeId, size_h : height}})
        }
        if(!typeId && width && height){
            devices = await Device.findAll({where: {size_w : width, size_h : height}})
        }

        return res.json(devices)
    }
    async getOne(req,res,next){
        const {id} = req.params
        const device = await Device.findOne({where : {id}})

        return res.json(device)
    }


    async createDevice(req,res,next){
        const {name, price,  typeId, width, height} = req.body
        
        const device = await Device.create({name, price, typeId, size_w: width, size_h: height})
        
        return res.json(device)
    }

}

module.exports = new DeviceController()
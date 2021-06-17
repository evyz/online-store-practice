const { Device, Width, Height } = require("../db/models")

class DeviceController{
    async getAll(req,res,next){
        let {typeId, widthId, heightId} = req.query

        let devices;

        // All
        if(!typeId && !widthId && !heightId){
            devices = await Device.findAll({})
        }
        if(typeId && widthId && heightId){
            devices = await Device.findAll({where : {typeId, widthId, heightId}})
        }

        // 1 from all
        if(typeId && !widthId && !heightId){
            devices = await Device.findAll({where: {typeId}})
        }
        if(!typeId && widthId && !heightId){
            devices = await Device.findAll({where: {widthId}})
        }
        if(!typeId && !widthId && heightId){
            devices = await Device.findAll({where: {heightId}})
        }

        // 2 from all
        if(typeId && widthId && !heightId){
            devices = await Device.findAll({where: {typeId, widthId}})
        }
        if(typeId && !widthId && heightId){
            devices = await Device.findAll({where: {typeId, heightId}})
        }
        if(!typeId && widthId && heightId){
            devices = await Device.findAll({where: {widthId, heightId}})
        }

        return res.json(devices)
    }
    async getOne(req,res,next){
        const {id} = req.params
        const device = await Device.findOne({where : {id}})

        return res.json(device)
    }


    async createDevice(req,res,next){
        const {name, price, width, height, typeId} = req.body

        const checkWidth = await Width.findOne({where : {size : width}})
        let addWidth;
        let addHeight;
        if(!checkWidth){
            addWidth = await Width.create({size : width})
        }

        const checkHeight = await Height.findOne({where : {size : height}})
        if(!checkHeight){
            addHeight = await Height.create({size : height})
        }
        
        const device = await Device.create({name, price, widthId : addWidth.id, heightId: addHeight.id, typeId})
        
        return res.json(device)
    }


    async getWidth (req,res,next){
        const devices = await Width.findAll()
        return res.json(devices)
    }
    async getHeight (req,res,next){
        const devices = await Height.findAll()
        return res.json(devices)
    }

}

module.exports = new DeviceController()
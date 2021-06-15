const sequelize = require('./db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user' , {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
})

const Cart = sequelize.define('cart' , {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
})

const CartDevice = sequelize.define('cart_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Device = sequelize.define('device' , {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    size_w: {type: DataTypes.INTEGER},
    size_h: {type: DataTypes.INTEGER}
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})




User.hasOne(Cart)
Cart.belongsTo(User)

Cart.hasMany(CartDevice)
CartDevice.belongsTo(Cart)

Device.hasMany(CartDevice)
CartDevice.belongsTo(Device)

Type.hasMany(Device)
Device.belongsTo(Type)

module.exports = {
    User,
    Device,
    Cart,
    CartDevice,
    Type
}
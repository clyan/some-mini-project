(async ()=>{
  const Sequelize = require('sequelize');
  const sequelize = require('../orm/sequelize');
  sequelize.sync();
  const User=  sequelize.define('User',
    {
      img: {
        type: Sequelize.TEXT('long'),
        allowNull: true,
      },
      ip:{
        type: Sequelize.STRING(225),
        allowNull: true
      }
    },
    {
      timeStamp: false,
      freezeTableName: true
    }
  )

  module.exports = User;

})()

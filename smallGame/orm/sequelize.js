(async () => {
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('cameraImg', 'root', '123', {
        host: 'xxx.xxx.xxx.xxx',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

    //检测连接是否正常
    sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

    module.exports = sequelize;
})()



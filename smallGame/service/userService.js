(async ()=>{
  const User = require('../models/User');
  const findAllUser = async function (){
    return (await User.findAll());
  }

  const addUser = async function (img,ip){
        return await User.create({
          img: img,
          ip: ip
        });
  }
  module.exports ={
    findAllUser,
    addUser
  }
})()


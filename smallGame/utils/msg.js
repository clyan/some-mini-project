module.exports = (data)=> {
  return {
    success:()=>{
      return {
        code:1,
        data:data,
        msg:"操作成功"
      }
    },
    error:()=>{
      return {
        code:0,
        data:data,
        msg:"操作失败"
      }
    },
  }
}

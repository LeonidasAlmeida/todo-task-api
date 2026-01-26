const { utilResponse } = require("../utils/resResponse")

const errorMiddleware = (error,req,res,next)=>{
    console.log(error)
    return utilResponse(res,500,false,'Error internal API',error)
}

module.exports = errorMiddleware
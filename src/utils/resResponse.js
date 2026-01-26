const utilResponse = (res,status,sucesss,message,error,data) =>{
    console.log(error)
   return res.status(status).send({
        sucesss:sucesss,
        message:message,
        error:error,
        data
    })
}

module.exports = { utilResponse }
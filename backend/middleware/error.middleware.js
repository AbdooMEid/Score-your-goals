const errorHandelr = (err , req , res , next) => {
   const stausCode = res.statusCode ? res.statusCode : 500

   res.status(stausCode)

   res.json({
       message : err.message,
       stack : process.env.NODE_ENV === 'production' ? null : err.stack

    })
};





module.exports = {
    errorHandelr,
}
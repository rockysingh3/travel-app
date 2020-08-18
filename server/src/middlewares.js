// middleware for error handling in express 
// not found error
const notFound = (req, res, next) => {
    const error = new Error('Not Found - ${req.origialUrl}')
    res.status(400)
    next(error)
  }
  
  
  // genarl error handler
  const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? 'idk' : error.stack,
    })
  }

  module.exports = {
      notFound,
      errorHandler
  }
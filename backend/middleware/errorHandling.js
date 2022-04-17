const errorHandler = (err, req, res, next) => {
  //use ternary(conditional) what I set in the controller I want to use that else if not there use a 500
  const statusCode = res.statusCode ? res.statusCode : 500;
  //call statusCode
  res.status(statusCode);

  //then respond with json
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
};

module.exports = {
  errorHandler,
};

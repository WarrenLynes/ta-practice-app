module.exports = ((req, res, next) => {
  console.log(`REQUEST RECEIVED: ${req.method} ${req.url}`);
  next();
});
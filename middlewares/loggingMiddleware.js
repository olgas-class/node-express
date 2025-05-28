function loggingMiddleware(req, res, next) {
  const url = req.originalUrl;
  const time = new Date().toLocaleString("IT");
  console.log(`LOG: ${url} in ${time}`);
  // la funzione che manda la richiesta alla funzione successiva
  next();
}

export default loggingMiddleware;

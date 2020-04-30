const basicMiddleware = (req, res, next) => {
  console.log("esto solo se ejecuta en esta ruta");
  next();
};

const authMiddleware = (req, res, next) => {
  if (req.headers.auth === "okidoki") {
    next();
  } else {
    res.status(401).send("No estás autorizado para ver esta ruta");
  }
};

module.exports = {
  basicMiddleware,
  authMiddleware,
};

const dataController = (req, res) => {
  console.log(req.query);
  res.send({ datos: "ok" });
};

const dataPostControler = (req, res) => {
  res.send({ post: "ok" });
};

const userPhotoController = (req, res) => {
  console.log(req.params);
  res.send({ userPhotos: "ok" });
};

module.exports = {
  dataController,
  dataPostControler,
  userPhotoController,
};

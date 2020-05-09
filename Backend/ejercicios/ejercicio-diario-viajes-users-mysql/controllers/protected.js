function onlyUsers(req, res, next) {
  res.send({ message: 'If your are viewing this you are a logged user' });
}

function onlyAdmin(req, res, next) {
  res.send({ message: 'If your are viewing this you are an administrator' });
}

module.exports = {
  onlyAdmin,
  onlyUsers
};

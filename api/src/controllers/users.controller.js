const usersCtrl = {};

usersCtrl.getUsers = (req, res) => {
  res.json({ message: "get" });
};

usersCtrl.getUser = (req, res) => {
  res.json({ message: "get" });
};

usersCtrl.createUser = (req, res) => {
  res.json("post");
};

usersCtrl.updateUser = (req, res) => {
  res.json("put");
};

usersCtrl.deleteUser = (req, res) => {
  res.json("delete");
};

module.exports = usersCtrl;

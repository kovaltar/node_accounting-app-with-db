const { models } = require('../models/models');
const { User } = models;

async function getAllUsers() {
  return User.findAll();
}

async function getUserById(id) {
  return User.findByPk(id);
}

async function deleteUser(id) {
  return User.findByPk(id).then((user) => user.destroy());
}

async function createUser(name) {
  return User.create({ name });
}

async function updateUser(id, data) {
  return User.findByPk(id).then((user) => user.update(data));
}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUser,
  createUser,
  updateUser,
};

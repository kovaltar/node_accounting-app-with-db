const { models } = require('../models/models');
const { Expense } = models;

async function getAllExpenses() {
  return Expense.findAll();
}

async function getExpenseById(id) {
  return Expense.findByPk(id);
}

async function deleteExpense(id) {
  return Expense.findByPk(id).then((expense) => expense.destroy());
}

async function createExpense(data) {
  return Expense.create(data);
}

async function updateExpense(id, data) {
  return Expense.findByPk(id).then((expense) => expense.update(data));
}

module.exports = {
  getAllExpenses,
  getExpenseById,
  deleteExpense,
  createExpense,
  updateExpense,
};

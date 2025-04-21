const Expense = require('../models/Expense');

exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find({ user: req.user.id });
  res.json(expenses);
};

exports.addExpense = async (req, res) => {
  const { title, amount, category } = req.body;

  const newExpense = new Expense({
    user: req.user.id,
    title,
    amount,
    category
  });

  await newExpense.save();
  res.status(201).json(newExpense);
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  await Expense.findByIdAndDelete(id);
  res.json({ message: 'Expense deleted' });
};

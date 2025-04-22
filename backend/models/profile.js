const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    balance: { type: Number, default: 0 },
    dailyExpenses: { type: Number, default: 0 },
    monthlyExpenses: { type: Number, default: 0 },
});

module.exports = mongoose.model('Profile', ProfileSchema);

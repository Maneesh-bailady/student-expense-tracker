// ...existing code...
router.post('/add-expense', async (req, res) => {
    const { userId, amount } = req.body;

    // Update daily and monthly expenses
    const profile = await Profile.findOne({ userId });
    if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
    }

    profile.dailyExpenses += amount;
    profile.monthlyExpenses += amount;
    profile.balance -= amount;

    // Check for daily expense alert
    if (profile.dailyExpenses > 100) {
        console.log('Alert: Daily expenses exceeded ₹100!');
    }

    // Check for monthly balance alert
    if (profile.balance <= 100) {
        console.log('Alert: Monthly balance is ₹100 or below!');
    }

    await profile.save();
    res.status(200).json({ message: 'Expense added successfully' });
});
// ...existing code...

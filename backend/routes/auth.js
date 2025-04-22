
router.post('/login', async (req, res) => {
    // ...existing code for login logic...

    // Create user profile if not exists
    const userId = user._id; // Assuming user object is retrieved during login
    const existingProfile = await Profile.findOne({ userId });
    if (!existingProfile) {
        await Profile.create({ userId, balance: 1000 }); // Initial balance set to ₹1000
    }

    res.status(200).json({ message: 'Login successful' });
});
// ...existing code...

// ...existing code...
useEffect(() => {
    async function fetchProfile() {
        const response = await fetch('/api/profile'); // Assuming an API endpoint exists
        const data = await response.json();
        setBalance(data.balance);

        // Check for alerts
        if (data.dailyExpenses > 100) {
            alert('Daily expenses exceeded ₹100!');
        }
        if (data.balance <= 100) {
            alert('Monthly balance is ₹100 or below!');
        }
    }
    fetchProfile();
}, []);
// ...existing code...

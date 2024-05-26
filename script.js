document.addEventListener('DOMContentLoaded', () => {
    const adviceText = document.getElementById('advice-text');
    const newAdviceBtn = document.getElementById('new-advice-btn');

    // Function to fetch and display advice
    function fetchAdvice() {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                adviceText.textContent = data.slip.advice;
            })
            .catch(error => {
                adviceText.textContent = 'Could not fetch advice. Please try again later.';
                console.error('Error fetching advice:', error);
            });
    }
    

    // Event listener for the button
    newAdviceBtn.addEventListener('click', fetchAdvice);

    // Fetch initial advice on page load
    fetchAdvice();
});

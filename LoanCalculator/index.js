function calculateLoan() {
    // Get input values
    var loanAmount = parseFloat(document.getElementById('loan-amount').value);
    var interestRate = parseFloat(document.getElementById('interest-rate').value);
    var monthsToPay = parseInt(document.getElementById('months-to-pay').value);

    // Check if all inputs are valid numbers
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(monthsToPay)) {
        document.getElementById('monthly-payment').textContent = 'Please enter valid numbers';
        return;
    }

    // Calculate monthly interest rate
    var monthlyInterestRate = (interestRate / 100) / 12;

    // Calculate monthly payment using the formula for an annuity
    var monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -monthsToPay));

    // Display the result
    document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2);
}




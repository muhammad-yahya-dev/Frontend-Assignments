  function displayResult(elementId, message, isSuccess) {
            const resultElement = document.getElementById(elementId);
            resultElement.textContent = message;
        
            resultElement.classList.remove('result-success', 'result-failure', 'bg-gray-100', 'text-gray-800');

            if (isSuccess === true) {
                
                resultElement.classList.add('result-success');
            } else if (isSuccess === false) {
                
                resultElement.classList.add('result-failure');
            } else {
                 
                resultElement.classList.add('bg-gray-100', 'text-gray-800');
            }
        }

        // 1. Even or Odd Check
        function checkEvenOdd() {
            const num = parseInt(document.getElementById('num-even-odd').value);
            const resultId = 'result-even-odd';

            if (isNaN(num)) {
                displayResult(resultId, "Please enter a valid number.", false);
                return;
            }

            if (num % 2 === 0) {
                displayResult(resultId, `${num} is Even.`, true);
            } else {
                displayResult(resultId, `${num} is Odd.`, false);
            }
        }

        // 2. Voting Eligibility Check
        function checkVotingEligibility() {
            const age = parseInt(document.getElementById('age-voting').value);
            const resultId = 'result-voting';

            if (isNaN(age) || age < 0) {
                displayResult(resultId, "Please enter a valid age.", false);
                return;
            }

            if (age >= 18) {
                displayResult(resultId, `Age ${age}: Eligible to Vote!`, true);
            } else {
                const yearsLeft = 18 - age;
                displayResult(resultId, `Age ${age}: Not Eligible yet. Wait ${yearsLeft} years.`, false);
            }
        }

        // 3. Positive, Negative, or Zero Check
        function checkSign() {
            const num = parseFloat(document.getElementById('num-sign').value);
            const resultId = 'result-sign';

            if (isNaN(num)) {
                displayResult(resultId, "Please enter a valid number.", false);
                return;
            }

            if (num > 0) {
                displayResult(resultId, `${num} is Positive.`, true);
            } else if (num < 0) {
                displayResult(resultId, `${num} is Negative.`, false);
            } else {
                displayResult(resultId, `${num} is Zero.`, null); 
            }
        }

        // 4. Largest of Three Numbers
        function checkLargestThree() {
            const a = parseFloat(document.getElementById('num-a').value);
            const b = parseFloat(document.getElementById('num-b').value);
            const c = parseFloat(document.getElementById('num-c').value);
            const resultId = 'result-largest';

            if (isNaN(a) || isNaN(b) || isNaN(c)) {
                displayResult(resultId, "Please enter three valid numbers.", false);
                return;
            }

            let largest = a;

            if (a >= b && a >= c) {
                largest = a;
            } else if (b >= a && b >= c) {
                largest = b;
            } else {
                largest = c;
            }

            displayResult(resultId, `The largest number is: ${largest}`, true);
        }

        // 5. Leap Year Check
        function checkLeapYear() {
            const year = parseInt(document.getElementById('year-leap').value);
            const resultId = 'result-leap-year';

            if (isNaN(year) || year < 1) {
                displayResult(resultId, "Please enter a valid year.", false);
                return;
            }

            let isLeap = false;

            if (year % 400 === 0) {
                isLeap = true;
            } else if (year % 100 === 0) {
                isLeap = false;
            } else if (year % 4 === 0) {
                isLeap = true;
            }

            if (isLeap) {
                displayResult(resultId, `${year} IS a Leap Year!`, true);
            } else {
                displayResult(resultId, `${year} is NOT a Leap Year.`, false);
            }
        }

        // 6. Loan Eligibility Check
        function checkLoanEligibility() {
            const salary = parseInt(document.getElementById('salary').value);
            const age = parseInt(document.getElementById('age-loan').value);
            const creditScore = parseInt(document.getElementById('credit-score').value);
            const resultId = 'result-loan-eligibility';

            if (isNaN(salary) || isNaN(age) || isNaN(creditScore)) {
                displayResult(resultId, "Please enter valid numbers for all fields.", false);
                return;
            }

            const minSalary = 50000;
            const minAge = 25;
            const maxAge = 50;
            const minCreditScore = 700;

            if (salary > minSalary && age >= minAge && age <= maxAge && creditScore > minCreditScore) {
                displayResult(resultId, "Eligible for Loan! All criteria met.", true);
            } else {
                let rejectionReason = "Not Eligible for Loan. Reasons:";
                if (salary <= minSalary) {
                    rejectionReason += ` Salary must be > ${minSalary}.`;
                }
                if (age < minAge || age > maxAge) {
                    rejectionReason += ` Age must be between ${minAge} and ${maxAge}.`;
                }
                if (creditScore <= minCreditScore) {
                    rejectionReason += ` Credit Score must be > ${minCreditScore}.`;
                }
                displayResult(resultId, rejectionReason, false);
            }
        }
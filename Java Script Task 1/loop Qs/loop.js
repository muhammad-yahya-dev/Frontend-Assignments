  function displayResult(elementId, message, isSuccess = false) {
            const resultElement = document.getElementById(elementId);
            resultElement.textContent = message;
            
            resultElement.classList.remove('result-success', 'bg-gray-100', 'text-gray-800');

            if (isSuccess) {
                resultElement.classList.add('result-success');
            } else {
                
                resultElement.classList.remove('result-success');
                resultElement.classList.add('bg-gray-100', 'text-gray-800');
            }
        }

        function processChallenge(challengeId) {
          
            const resultId = `result-${challengeId.split('-')[0]}`; 

            switch (challengeId) {
                case 'factorial': {
                    const num = parseInt(document.getElementById('num-factorial').value);
                    if (isNaN(num) || num < 0) { displayResult(resultId, "Error: Please enter a non-negative integer.", false); return; }
                    if (num === 0 || num === 1) { displayResult(resultId, `The factorial of ${num} is: 1`, true); return; }
                    
                    let factorial = 1;
                    for (let i = 2; i <= num; i++) {
                        factorial *= i;
                    }
                    displayResult(resultId, `The factorial of ${num} is: ${factorial.toLocaleString()}`, true);
                    break;
                }

                case 'triangular': {
                    const numTerms = parseInt(document.getElementById('num-triangular').value);
                    if (isNaN(numTerms) || numTerms <= 0) { displayResult(resultId, "Error: The number of terms must be positive.", false); return; }
                    if (numTerms > 15) { displayResult(resultId, "For display limits, please enter a number less than 15.", false); return; }

                    let currentTerm = 0;
                    let output = "Pattern:\n";
                    for (let i = 1; i <= numTerms; i++) {
                        currentTerm += i;
                        output += currentTerm + (i < numTerms ? ", " : "");
                    }
                    displayResult(resultId, output, true);
                    break;
                }

                case 'chars': {
                    const inputString = document.getElementById('string-chars').value.trim();
                    if (inputString.length === 0) { displayResult(resultId, "Error: String must not be empty.", false); return; }
                    
                    let output = "Characters:\n";
                    
                    for (const char of inputString) {
                        output += char + "\n";
                    }
                    displayResult(resultId, output, true);
                    break;
                }

                case 'divisible-three': {
                    let output = "Numbers divisible by 3 (1-30):\n";
                    let numbers = [];
                    for (let i = 1; i <= 30; i++) {
                        if (i % 3 === 0) {
                            numbers.push(i);
                        }
                    }
                    output += numbers.join(", ");
                    displayResult(resultId, output, true);
                    break;
                }
                
                case 'sum-even': {
                    let sum = 0;
                    for (let i = 1; i <= 100; i++) {
                        if (i % 2 === 0) {
                            sum += i;
                        }
                    }
                    displayResult(resultId, `The sum of even numbers from 1 to 100 is: ${sum}.`, true);
                    break;
                }

                case 'squares': {
                    let output = "Number | Square\n------|------\n";
                    for (let i = 1; i <= 10; i++) {
                        const square = i * i;
                        output += `${i}      | ${square}\n`;
                    }
                    displayResult(resultId, output, true);
                    break;
                }

                case 'evens': {
                    let output = "Even Numbers (1-50):\n";
                    let evens = [];
                    for (let i = 2; i <= 50; i += 2) {
                        evens.push(i);
                    }
                    output += evens.join(", ");
                    displayResult(resultId, output, true);
                    break;
                }

                case 'odds': {
                    let output = "Odd Numbers (1-30):\n";
                    let odds = [];
                    for (let i = 1; i <= 30; i += 2) {
                        odds.push(i);
                    }
                    output += odds.join(", ");
                    displayResult(resultId, output, true);
                    break;
                }

                case 'vowels': {
                    const inputString = document.getElementById('string-vowels').value.toLowerCase();
                    if (inputString.length === 0) { displayResult(resultId, "Error: String must not be empty.", false); return; }
                    
                    let vowelCount = 0;
                    const vowels = "aeiou";
                    for (let i = 0; i < inputString.length; i++) {
                        if (vowels.includes(inputString[i])) {
                            vowelCount++;
                        }
                    }
                    displayResult(resultId, `The string "${document.getElementById('string-vowels').value}" contains ${vowelCount} vowels.`, true);
                    break;
                }

                case 'password-while':
                case 'password-do-while': {
                    const enteredPassword = document.getElementById('password-input').value;
                    const correctPassword = "secret";
                    
                    if (challengeId === 'password-while') {
                       
                        if (enteredPassword === correctPassword) {
                             displayResult('result-password', `While Loop: Success! The password is correct.`, true);
                        } else {
                             displayResult('result-password', `While Loop: Incorrect password. (Correct password is 'secret').`, false);
                        }
                    } else {
                  
                        displayResult('result-password', `Do-While Loop: Checking password...`, false);
               
                        do {
                            if (enteredPassword === correctPassword) {
                                displayResult('result-password', `Do-While Loop: Success! The password is correct.`, true);
                            } else {
                                displayResult('result-password', `Do-While Loop: Incorrect password. (Correct password is 'secret').`, false);
                            }
                        } while (false); 
                    }
                    break;
                }

                default:
                    displayResult(resultId, "Error: Invalid challenge ID.", false);
            }
        }
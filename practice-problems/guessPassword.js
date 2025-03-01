const PASSWORD = 'password';
let failedAttempt = 0;

while (true) {
  let guess = prompt('What is the password:');

  if (guess === PASSWORD) {
    console.log('You have successfully logged in.');
    break;
  }

  failedAttempt += 1;

  if (failedAttempt === 3) {
    console.log('You have been denied access.');
    break;
  }
}

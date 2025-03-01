let score1 = Number(prompt('Enter score 1: '));
let score2 = Number(prompt('Enter score 2: '));
let score3 = Number(prompt('Enter score 3: '));

let average_score = (score1 + score2 + score3) / 3;
let grade;

if (average_score >= 90) {
  grade = 'A';
} else if (average_score >= 70) {
  grade = 'B';
} else if (average_score >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`Based on the average of your 3 scores your letter grade is 
  "${grade}".`)
let science = 40;
let maths = 83;
let english = 90;
let computer = 100;

let grade;

if (science < 40 || maths < 40 || english < 40 || computer < 40) {
    grade = "No Grade"
}else {
    let avg = (science + maths + english + computer) / 4

    if (avg > 90) {
        grade = "O";
    } else if (avg > 80) {
        grade = "A+"
    } else if (avg > 70) {
        grade = "A"
    } else if (avg > 60) {
        grade = "B+"
    } else if (avg > 50) {
        grade = "B"
    } else if (avg > 40) {
        grade = "c+"
    } else {
        grade = "No Grade"
    }
}

console.log(grade)
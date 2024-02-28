function checkAge(age) {
  if (age >= 18) {
    console.log("You are old enough to vote");
  } else {
    console.log("Sorry! You must be 18 or older to vote");
  }
}

checkAge(18);
checkAge(21);
checkAge(9);
checkAge(0);

function checkNum(number) {
  if (number > 0) {
    console.log("Positive number");
  } else if (number < 0) {
    console.log("Negative Number");
  } else {
    console.log("Zero Number");
  }
}

checkNum(0);
checkNum(18);
checkNum(-9);

function checkGrade(score) {
  let grade;
  if (score >= 90) {
    grade = "A";
  } else {
    if (score >= 80) {
      grade = "B";
    } else {
      if (score >= 70) {
        grade = "C";
      } else {
        grade = "D";
      }
    }
  }
  console.log(grade);
}
checkGrade(90);
checkGrade(85);
checkGrade(75);
checkGrade(30);

// let browser = "chrome"
// if(browser == "chrome"){
//     console.log("launch chrome")
// }
// if(browser == "edge"){
//     console.log("launch edge")
// }
// if(browser == "firefox"){
//     console.log("launch firefox")
// }else{
//     console.log("Pls pass the right browser")
// }

let browser = "my"
if(browser == "chrome"){
    console.log("launch chrome")
}
else if(browser == "edge"){
    console.log("launch edge")
}
else if(browser == "firefox"){
    console.log("launch firefox")
}else{
    console.log("Pls pass the right browser")
}

//switch case

function checkDayOfWeek(dayNum) {
  let day;
  switch (dayNum) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "Invalid Day";
      break;
  }

  return day;
}

console.log(checkDayOfWeek(0))
console.log(checkDayOfWeek(3))
console.log(checkDayOfWeek(6))
console.log(checkDayOfWeek(10))
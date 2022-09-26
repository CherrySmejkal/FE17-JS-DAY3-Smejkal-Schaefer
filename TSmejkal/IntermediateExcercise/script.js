//Excercise 1

let studentGrade = [
  ["Martin", 76],
  ["Thomas", 85],
  ["Klaus", 65],
  ["Maria", 93],
  ["David", 81],
];

function getPoint(sGrade) {
  let average = 0;
  for (let i = 0; i < studentGrade.length; i++) {
    let sPoint = studentGrade[i][1];
    //    console.log(sPoint);
    //    console.log (giveGrade(sPoint));
    average += sPoint;
    document.write(`${studentGrade[i][0]} has grade ${giveGrade(sPoint)}. <br>`);
  }
  average = average / studentGrade.length;
  document.write(
    `The class average is ${average} points, their average grade will be ${giveGrade(
      average
    )}. <br>`
  );
}

function giveGrade(point) {
  let grade = "";
  if (point < 60) {
    grade = "F";
  } else if (point < 70) {
    grade = "D";
  } else if (point < 80) {
    grade = "C";
  } else if (point < 90) {
    grade = "B";
  } else {
    grade = "A";
  }
  return grade;
}

getPoint(studentGrade);

//Excercise 2



//Excercise 3

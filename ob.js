const students = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

// ans = [virat, leo, cristiano, rohit, viswanath anand]

let testCase2 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 100,
    chemistry: 80,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 80,
    chemistry: 100,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 30,
    chemistry: 40,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 40,
    chemistry: 30,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

students.sort((a, b) => {
  // Compare total marks
  const totalMarksA = a.chemistry + a.biology;
  const totalMarksB = b.chemistry + b.biology;
  if (totalMarksA !== totalMarksB) {
    return totalMarksB - totalMarksA;
  }

  // Compare biology marks
  if (a.biology !== b.biology) {
    return b.biology - a.biology;
  }

  // Compare date of birth
  const dobA = new Date(a.dob);
  const dobB = new Date(b.dob);
  if (dobA !== dobB) {
    return dobA - dobB;
  }

  // In case of ties, any order is acceptable
  return 0;
});

console.log(students);

console.log("JS");

const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

// function cuteCheck(array) {
//   let smolCutePenguins = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].isCute && array[i].size <= .5) {
//       //save those penguins
//       smolCutePenguins.push(array[i]);
//       // console.log('in cuteCheck:', array[i].isCute, array[i].size);
//     }// end conditional
//   }//end loop
//   return smolCutePenguins;
// }// end cuteCheck|

function allEmployees(arr) {
  for (let i = 0; i < arr.length; i++) {
    // const element = array[i];
    if (arr[i].reviewRating <= 2) {
      return 0;
    } else if ((arr[i].reviewRating = 3)) {
      return arr[i].annualSalary * 0.04;
    } else if ((arr[i].reviewRating = 4)) {
      return arr[i].annualSalary * 0.06;
    } else if ((arr[i].reviewRating = 5)) {
      return arr[i].annualSalary * 0.1;
    }
  }
}
allEmployees(employees);

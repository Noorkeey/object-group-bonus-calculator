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
  let bonus = [];
  let additionalBonus = [];
  let adjustedBonus = [];
  for (let i = 0; i < arr.length; i++) {
    // const element = array[i];
    // this conditional calculates bonuses base on review rating * annual salary
    if (arr[i].reviewRating <= 2) {
         'no bonus for you!';
      } else if ((arr[i].reviewRating === 3)) {
         bonus.push(arr[i].annualSalary * 0.04);
      } else if ((arr[i].reviewRating === 4)) {
         bonus.push(arr[i].annualSalary * 0.06);
      } else if ((arr[i].reviewRating === 5)) {
        console.log('normal:', bonus);
        bonus.push(arr[i].annualSalary * 0.1);
      }// end of conditional reviewRating check
    if ((arr[i].employeeNumber.length == 4)){
         additionalBonus.push(arr[i].annualSalary * .05);
         console.log('this is extra',additionalBonus);
      }//end of additional bonus
     if ((arr[i].annualSalary >= 65000)){
          adjustedBonus.push((arr[1].annualSalary * .01))
     } 
  }// end of for loop
  return bonus;
}// end of allEmployees

allEmployees(employees);

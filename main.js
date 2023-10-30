//Add
const arr1 = ['One', 'Two', 'Three'];
arr1.splice(0, 0, "Zero");  //ระบุ parameter ตัวที่ 2 เป็น 0 จะเท่ากับการ add 
console.log(arr1); //[ 'Zero', 'One', 'Two', 'Three' ]
//Replace
const arr2 = ['One', 'Two', 'Three'];
arr2.splice(0, 1, "Zero"); //ระบุ parameter ตัวที่ 2 เป็น 1 จะเท่ากับการ Replace
console.log(arr2); //[ 'Zero', 'Two', 'Three' ]
//Delete 
const arr3 = ['One', 'Two', 'Three'];
arr3.splice(0, 1); //ระบุ parameter ตัวที่ 2 เป็น 1 จะเท่ากับการ delete และ ไม่ต้องระบุ parameter ตัวที่ 3
console.log(arr3); //[ 'Two', 'Three' ]

console.log("---------------------------------------------------")

//-- Arrow functions --
//Function แบบเดิม
function printName(name) {
    console.log(name)
}
printName('A') // A
//Arrow Function
const printName1 = (name) => {
    console.log(name)
}
printName1('A') // A

//Arrow รับ parameter 2 ตัว
const printName2 = (name, age) => {
    console.log(name, age)
}
printName2('A', 20) // A 20

//Function ที่มีการ return หรือมีการส่งกลับค่า
const mul = (number) => {
    return number * 2
}
console.log(mul(2)) // 4



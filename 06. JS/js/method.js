// kode yang dibuat oleh javascript langsung sehingga tinggal di pakek

let detailUser = {
  name: "muchson",
  age: 18,
  address: "Madiun",
};
let numbers = [1, 2, 3, 4, 5];
let listKelasReact = ["01", "fudhail", "ghulam", 1, detailUser]; //digunakan untuk menyimpan data. [0,1,2]
let listKelasGolang = ["rizky", "nadhir", "petrus"];
let listKelasAlterra = listKelasReact.concat(listKelasGolang);
let printCode = numbers.forEach((num) => console.log(num));
let mutliple = numbers.map((element) => element * 2); // contoh map dengan arrow function
let mutlipleFucntion = numbers.map(function (element) {
  return element * 2;
}); // contoh map dengan function biasa

console.log(mutliple);

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0) {
      return "Error: Division by zero";
    }
    return a / b;
  },
};

// Contoh penggunaan
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2
console.log(calculator.multiply(5, 3)); // Output: 15
console.log(calculator.divide(5, 3)); // Output: 1.666...
console.log(calculator.divide(5, 0)); // Output: Error: Division by zero

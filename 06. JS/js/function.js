let name = "muchson";
let age = 10;
let city = "madiun";
let numbers = [1, 2, 3, 4, 5];
const varibelFunction = (age, city) => age * 2 + " " + city; // aku pakek ketika mengerjakan logic di dalam component react

function multiplyBy2(umur, city, numbers) {
  // perlu adanya logika untuk membalik parameter yang dimasukkan.
  return umur * 2 + " " + city;
} // di pakek untuk pembuatan component di react
const veribaelMultiply = function (umur, city, numbers) {
  return umur * 2 + " " + city;
};

const hasil = varibelFunction(age, city, numbers);
// console.log(hasil);
// console.log(multiplyBy2(age, city));

// contoh Rest Parameters

// function sum(a, b, c) {
//   return a + " " + b + " " + c;
// }
function sum(...numbers) {
  return numbers;
}
const numbersArray = [1, 2, 3];
// console.log(sum(numbersArray));

// Fungsi yang mengembalikan fungsi pengali
function createMultiplier(multiplier) {
  // console.log(multiplier);
  return function (num) {
    // console.log(num);
    return num * multiplier; // Mengembalikan hasil perkalian
  };
}
// createMultiplier(2);
// const double = createMultiplier(2); // Menyimpan fungsi untuk menggandakan
// console.log(double(5)); // Output: 10 (2 * 5)
// console.log(createMultiplier(2));

//arr = number / data arraynya
// callback = sebuah function
function process(dollar, callback) {
  const result = callback(dollar);
  return result;
}
const dollar = [4];
function ConvertToRupiah(number) {
  return number * 15000;
}
function ConvertToPeso(number) {
  return number * 1000;
}

// console.log(double(2));
console.log(process(dollar, ConvertToRupiah));

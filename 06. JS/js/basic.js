var nama; // string
/* 
  1. bisa berubah ubah 
  2. bisa deklakasi ulang
  3. tidak rekomendasi karena sulit dilacak
  */

let umur = 17; //number

/* 
  1. buat iterasi, dan fleksibel
  2. bisa di rubah. lebih di rekomendasikan
  */

const jenisKelamin = "laki-laki";
// jenisKelamin = "perempuan";
/* 
  1. tetap, gantinya lebih ribet 
  2. untuk nilai tetap
  */

let status = false; //boolean
var nama;
let detailUser = {
  name: "muchson",
  age: 18,
  address: "Madiun",
};
let listKelasReact = ["01", "fudhail", "ghulam", 1, detailUser]; //digunakan untuk menyimpan data. [0,1,2]

//arrya : datanya banyak, index dimulai dari 0. element2 nya sama. menyimpan banyak nilai seperti data produk.
// obj : mendeklarasikan salah satu, key property. data yang saling berhubungan. perlu di identifikasi
// console.log(nama);
// console.log(umur);
// console.log(listKelasReact);
// console.log("object all :", detailUser);
// console.log("object name :", detailUser.name);

// perulangan

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// condition
umur = "19";
// if (umur == 18) {
//   console.log("selamat sudah 18 tahun");
// } else if (umur === 19) {
//   console.log("wah sudah bertambah 1 tahun");
// } else {
//   console.log("umur mu masuk mana ni ?");
// }

// gabungan for dan condition
let suami = "muchson";
let istri = "toyibiyah1";
// for (let i = 0; i < 5; i++) {
// contoh logka untuk masuk and
// if ((suami == "muchson") & (istri == "toyibiyah")) {
//   console.log("bisa masuk");
// } else {
//   console.log("coba periksa KTP yang masuk");
// }
// }
// contoh logka untuk masuk or
// if ((suami == "muchson") | (istri == "toyibiyah")) {
//   console.log("bisa masuk");
// } else {
//   console.log("coba periksa KTP yang masuk");
// }
// }

// ternery
// if (condition) {
//   //condition true
// } else {
//   //condition false
// }

// umur == 19 ? "wah 19 ni " : "selain 19";

var array = ["anggur", "tomat", "jeruk", "tomat"];
var setData = new Set(["anggur", "tomat", "jeruk", "tomat"]);
array.push("nasi");
array[2] = "manual";
console.log(array);

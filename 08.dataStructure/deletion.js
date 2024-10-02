const avengers = ["captain amerika", "hulk", "ironman", "spiderman"];
// avengers.length = 2;
// avengers.shift();
// avengers.pop();
console.log(avengers);

for (let i = 0; i <= avengers.length; i++) {
  console.log("ketika i = " + i);
  if (avengers[i] == "hulk") {
    console.log("masuk if, sebelum splice = " + avengers);
    avengers.splice(i, 1);
    console.log("setelah splice = " + avengers);
  } else {
  }
}

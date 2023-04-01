console.log("Heloo world");

let buah = [
    'Anggur',
    "Melon",
    'Mangga',
];
let buah2 = [
    'Apel',
    "Semangka ",
    'Pisan',
];
let irisan = [...buah, ...buah2]
console.log(irisan);

irisan.pop();
console.log(irisan);
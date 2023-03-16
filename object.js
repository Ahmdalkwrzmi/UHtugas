// Object
// Object sebenarnya adalah sebuah variabel yg menyimpan nilai (properti) dan fungsi (method)

//contoh object
// let contoh = {
//     key : value,
// }

// let komputer = {
//     prosesor : "intel 19 gen 13",
//     warna : "putih abuabu + rgb",
//     ram : 128,
//     vga : "rtx 4080 super",

// }

//properti = ciri khas dari sebuah object (variabel).
//method = perilaku dari objecty (variabel).

// var mobil = {
//     //object
//     type : "GTR 34",
//     model : "drift",
//     warna : "biru",


// //method
// start: function(){
//     console.log("ini method");
// },

// drive: function(){
//     console.log("ini method");
// },

// break: function(){
//     console.log("ini method");
// },


// }

// console.log(mobil.type);

// mobil.stars();

// //keyword THIS
// let manusia = {
//     firsName : "dudung",
//     lastyName : "dadang",
// showName: function(){
//     console.log(`Nama ${this.fistName} ${this.lastName}`);
// }
// }

// manusia.showName();

//UH PD
//No 1
function cetakFunction(a){
    return `Halo Nama Saya ` + a
}

console.log(cetakFunction("Alok"));

//No 2
function myFunction(a,b){
    return a + b;
}
var a= 20;
var b= 7;
var hasil= myFunction(a,b);
console.log(hasil);

//No 3
function hello (){
    
}

//No 4
let obj = {
    Nama : "jhon",
    Umur : 22,
    Bahasa : "Indonesia"
}

//No 5
let objDaftarPeserta = {
    nama : "Jhon Doe",
    gender : "laki-laki",
    hobi : "baca buku",
    tahun : 1992,
}
console.log(objDaftarPeserta);

//No 6
const buah = [
{
    nama: 'Nanas',
    warna: 'Kuning',
    adabijinya: 'tidak',
    harga: 9000
},
{
    nama: 'Jeruk',
    warna: 'Oranye',
    adabijinya: 'ada',
    harga: 8000
},
{
    nama: 'Semangka',
    warna: 'Hijau & Merah',
    adabijinya: 'ada',
    harga: 10000
},
{
    nama: 'Pisang',
    warna: 'Kuning',
    adabijinya: 'tidak',
    harga: 5000
},
];

const cekBiji = buah.filter((buah) => buah.adabijinya === 'tidak');

console.log(cekBiji);
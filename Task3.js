//Tugas3
// Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). 
// Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.
// Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan hasil pencarian dan menampilkannya ke layar/console.

// Contoh: 
// SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])

// Output:
// [8, 14, 17]

// eleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])

// Output:
// “Nilai akhir harus lebih besar dari nilai awal”


// SeleksiNilai(5, 17 , [2, 25, 4])

// Output:
// “Jumlah angka dalam dataArray tidak ada”


let nilaiAwal = 5
let nilaiAkhir = 20
let dataArray = [2, 25, 4, 14, 17, 30, 8]

function filter (nilai) {
  return nilai > nilaiAwal && nilai < nilaiAkhir
} 

let hasilFilter= dataArray.filter(filter)
if (hasilFilter.length > 0 && nilaiAkhir > nilaiAwal){
  hasilFilter.sort(function(a, b){return a-b})
  console.log(hasilFilter)
}else {
  if (nilaiAkhir < nilaiAwal) {
    console.log("Nilai akhir harus lebih besar dari nilaiAwal")
  }else {
    console.log("Nilai angka dalam dataArray tidak ada")
  }
}

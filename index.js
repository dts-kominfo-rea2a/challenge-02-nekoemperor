// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping"
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let hasilLooping = null;
  const arrNama = [];
  for (let i = 0; i < dataYangAkanDilooping.length; i++) {
    let namaDepan = dataYangAkanDilooping[i].namaDepan;
    let namaBelakang = dataYangAkanDilooping[i].namaBelakang;
    let namaLengkap = namaDepan + " " + namaBelakang;
    arrNama.push(namaLengkap);
  }
  hasilLooping = arrNama;

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = null;
  const arrPria = [];
  for (let i = 0; i < dataYangAkanDilooping.length; i++) {
    if (dataYangAkanDilooping[i].jenisKelamin === 'M') {
      let jenisPria = dataYangAkanDilooping[i].jenisKelamin;
      arrPria.push(jenisPria);
    }

  }
  jumlahPria = arrPria.length;

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = null;
  const arrWanita = [];
  for (let i = 0; i < dataYangAkanDilooping.length; i++) {
    if (dataYangAkanDilooping[i].jenisKelamin === "F") {
      let jenisWanita = dataYangAkanDilooping[i].jenisKelamin;
      arrWanita.push(jenisWanita);
    }
  }
  jumlahWanita = arrWanita.length;

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita

      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentar = null;
  if (jumlahPria > jumlahWanita) {
    komentar = "Jumlah Pria lebih banyak dari Wanita";
  } else if (jumlahWanita > jumlahPria) {
    komentar = "Jumlah Wanita lebih banyak dari Pria";
  } else if (jumlahPria === jumlahWanita) {
    komentar = "Jumlah Pria dan Wanita berimbang";
  }

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;

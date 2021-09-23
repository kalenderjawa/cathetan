/**
 * Generator konstanta konversi untuk tahun Jawa ke tahun Masehi
 */
const initTahunMasehi = 1633;
const penambah = 33;
const initBilangan = 78;

let tahun = initTahunMasehi;
let tahunAkhir = tahun + 33;
let bilangan = initBilangan;

let data_tahun = [];

for (let x = 0; x < initBilangan; x++) {
  data_tahun.push({
    konstan: bilangan,
    tahunAwal: tahun,
    tahunAkhir: tahunAkhir,
  });
  bilangan = bilangan - 1;
  tahun = tahunAkhir + 1;
  tahunAkhir = tahun + penambah;
}

// data ada pada array data_tahun
for(x of data_tahun){
  console.log(`| ${x.konstan} | ${x.tahunAwal} | ${x.tahunAkhir} |`);
}

/**
 * Misalnya pada tahun 1954 Jawa berarti tahun Masehi 2021 Masehi
 * menurut perhitungan 1954 + 67 = 2021
 * 67 adalah konstanta penambah untuk tahun 2007 - 2040
 */

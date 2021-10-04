# Kalender Masehi (Gregorian)

Kalender Gregorian yang banyak dipakai saat ini, merupakan keberlanjutan dari Kalender Julian dimana setiap 4 tahun sekali terdapat 1 tahun kabisat (_Leap Year_) dimana pada tahun tersebut berjumlah 366 hari, artinya tahun kabisat adalah tahun yang habis dibagi 4.

> Pada tahun kabisat terdapat tambahan 1 hari yaitu tanggal 29 pada bulan Februari.

**Mengapa ada tambahan 1 hari?**

Jumlah hari dalam 1 Tahun Masehi (Gregorian) sebenarnya tidaklah bulat utuh 365 hari tetapi lebih tepatnya adalah **365 hari, 5 jam, 48 menit dan 46 detik**.

Untuk mengkompensasi hilangnya 5 jam, 48 menit dan 46 detik tersebut maka diperlukan koreksi dengan menambahkan hari pada tahun yang nantinya bernama tahun kabisat.

Jumlah total jam hilang tersebut akan menjadi 1 hari selang 4 tahun.

```javascript
const koreksi_detik = 5 * 60 * 60 * 4 + 48 * 60 * 4 + 46 * 4; //23.2511 jam
```

Pengkoreksian yang dilakukan pada Kalender Gregorian adalah selama `97` tahun dari `400` tersebut adalah tahun kabisat dan sisanya yaitu 303 adalah tahun biasa [^1].

```javascript
const th_non_kabisat = 365;
const th_kabisat = 366;

1_Tahun_Gregorian = ((th_non_kabisat×303)+(th_kabisat×97))/400 = 146.097/400 = 365,2425 hari
```

Pengkoreksian yang lain adalah untuk tahun yang merupakan kelipatan 100 seperti 1400, 2000, 2100 dsb hanya dimasukkan sebagai tahun kabisat jika tahun tersebut juga habis dibagi dengan 400 [^2].

```javascript
function cekTahunKabisatMasehi(tahun) {
  if (tahun % 100 === 0) {
    if (tahun % 400 === 0 && tahun % 4 === 0) {
      return true;
    }
  } else {
    if (tahun % 4 === 0) {
      return true;
    }
  }
  return false;
}
```

## Tabel Bulan & Hari Masehi

| No  |   Bulan   | Jumlah Hari (Non-Kabisat) | Jumlah Hari (Kabisat) |
| :-: | :-------: | :-----------------------: | :-------------------: |
|  1  |  Januari  |            31             |          31           |
|  2  | Februari  |            28             |          29           |
|  3  |   Maret   |            31             |          31           |
|  4  |   April   |            30             |          30           |
|  5  |    Mei    |            31             |          31           |
|  6  |   Juni    |            30             |          30           |
|  7  |   Juli    |            31             |          31           |
|  8  |  Agustus  |            31             |          31           |
|  9  | September |            30             |          30           |
| 10  |  Oktober  |            31             |          31           |
| 11  | November  |            30             |          30           |
| 12  | Desember  |            31             |          31           |
|     |  Jumlah   |            365            |          366          |

## Referensi

[^1]: [Kalender Jowo Di Gowo, Kalender Arab Di Garap, Kalender Barat Di Ruwat](https://www.caknun.com/2019/kalender-jowo-digowo-kalender-arab-digarap-kalender-barat-diruwat)
[^2]: [Kalender Gregorius](https://id.wikipedia.org/wiki/Kalender_Gregorius)

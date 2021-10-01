# Kalender Masehi (Gregorian)

Kalender Gregorian yang banyak dipakai saat ini, merupakan keberlanjutan dari Kalender Julian dimana setiap 4 tahun sekali terdapat 1 tahun kabisat (_Leap Year_) dimana pada tahun tersebut berjumlah 366 hari, artinya tahun kabisat adalah tahun yang habis dibagi 4.

> Pada tahun kabisat terdapat tambahan 1 hari yaitu tanggal 29 pada bulan Februari.

**Mengapa ada tambahan 1 hari?**

Jumlah hari dalam 1 Tahun Masehi sebenarnya tidaklah bulat utuh 365 hari tetapi **365 hari, 5 jam, 48 menit dan 46 detik**.

Untuk mengkompensasi hilangnya 5 jam, 48 menit dan 46 detik tersebut maka diperlukan koreksi dengan menambahkan hari pada tahun yang nantinya bernama tahun kabisat.

Jumlah total jam hilang tersebut akan menjadi 1 hari selang 4 tahun.

```javascript
const koreksi_detik = 5 * 60 * 60 * 4 + 48 * 60 * 4 + 46 * 4; //23.2511 jam
```

Koreksi dari Kalender Gregorian adalah `97` tahun selama `400` tahun dalam Kalender Gregorian adalah tahun kabisat dan sisanya 303 adalah tahun biasa[^1].

```javascript
const th_non_kabisat = 365;
const th_kabisat = 366;

1_Tahun_Gregorian = ((th_non_kabisat×303)+(th_kabisat×97))/400 = 146.097/400 = 365,2425 hari
```

[^1]: [Kalender Jowo Di Gowo, Kalender Arab Di Garap, Kalender Barat Di Ruwat](https://www.caknun.com/2019/kalender-jowo-digowo-kalender-arab-digarap-kalender-barat-diruwat)

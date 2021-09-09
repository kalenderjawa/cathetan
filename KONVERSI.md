# Konversi Tahun Jawa Ke Tahun Masehi

Menurut buku *The Pakubuwono Code* perubahan dari penanggalan tahun Jawa ke tahun Masehi dapat dihitung dengan memakai konstanta awal konversi yaitu angka **78** dan angka atau konstanta ini akan berkurang 1 setiap perubahan 33 tahun masehi yang dimulai dari tahun awal 1633 Masehi.

## Perhitungan

```
Tahun Masehi = Tahun Jawa + Konstanta_Konversi
```

Angka awal `Konstanta_Konversi` yaitu 78. Sebagai contoh seperti berikut,

### 1633 - 1666

`Tahun Masehi = Tahun Jawa + 78`

### 1667 - 1700

`Tahun Masehi = Tahun Jawa + 77`

...dan seterusnya.

## Tabel Konstanta Konversi

Daftar konstanta konversi dengan tahun awal dan tahun akhir.

| Konstanta Konversi | Tahun Awal | Tahun Akhir |
| :----------------: | :--------: | :---------: |
|         78         |    1633    |    1666     |
|         77         |    1667    |    1700     |
|         76         |    1701    |    1734     |
|         75         |    1735    |    1768     |
|         74         |    1769    |    1802     |
|         73         |    1803    |    1836     |
|         72         |    1837    |    1870     |
|         71         |    1871    |    1904     |
|         70         |    1905    |    1938     |
|         69         |    1939    |    1972     |
|         68         |    1973    |    2006     |
|         67         |    2007    |    2040     |
|         66         |    2041    |    2074     |
|         65         |    2075    |    2108     |
|         64         |    2109    |    2142     |
|         63         |    2143    |    2176     |
|         62         |    2177    |    2210     |
|         61         |    2211    |    2244     |
|         60         |    2245    |    2278     |
|         59         |    2279    |    2312     |
|         58         |    2313    |    2346     |
|         57         |    2347    |    2380     |
|         56         |    2381    |    2414     |
|         55         |    2415    |    2448     |
|         54         |    2449    |    2482     |
|         53         |    2483    |    2516     |
|         52         |    2517    |    2550     |
|         51         |    2551    |    2584     |
|         50         |    2585    |    2618     |
|         49         |    2619    |    2652     |
|         48         |    2653    |    2686     |
|         47         |    2687    |    2720     |
|         46         |    2721    |    2754     |
|         45         |    2755    |    2788     |
|         44         |    2789    |    2822     |
|         43         |    2823    |    2856     |
|         42         |    2857    |    2890     |
|         41         |    2891    |    2924     |
|         40         |    2925    |    2958     |
|         39         |    2959    |    2992     |
|         38         |    2993    |    3026     |
|         37         |    3027    |    3060     |
|         36         |    3061    |    3094     |
|         35         |    3095    |    3128     |
|         11         |    3911    |    3944     |
|         10         |    3945    |    3978     |
|         9          |    3979    |    4012     |
|         8          |    4013    |    4046     |
|         7          |    4047    |    4080     |
|         6          |    4081    |    4114     |
|         5          |    4115    |    4148     |
|         4          |    4149    |    4182     |
|         3          |    4183    |    4216     |
|         2          |    4217    |    4250     |
|         1          |    4251    |    4284     |

Perhitungan tabel diatas dapat dilihat pada kode JavaScript pada berkas [constJ2M.js](constJ2M.js).

**Contoh Konversi**

Sekarang adalah tahun **2021** yang berada pada rentang **2007 - 2040** sehingga konstanta konversi yang dipakai menurut tabel diatas adalah **67**.

```
Tahun Jawa = 1954
Tahun Masehi = 1954 + 67 = 2021

Tahun Jawa = 1955
Tahun Masehi = 1955 + 67 = 2022
```

Tahun-tahun Jawa yang berlaku pada rentang tahun **2007 - 2040** akan memakai konstanta konversi **67**.




## Referensi

1. Agung Prabowo, _The Pakubuwono Code_, hal. 28, 2014.

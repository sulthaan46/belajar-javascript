const nama = "Sulthan";
const jumlahOrderan = 12;
const tarifOrderan = 8000;
const totalPendapatan = jumlahOrderan * tarifOrderan;
const bonus = 20000;
let bensin = 25000;
const pendapatanBersih = totalPendapatan + bonus - bensin;
console.log(
  `Halo ${nama}, hari ini ${jumlahOrderan} order, total Rp.${totalPendapatan.toLocaleString("id-ID")}, dengan bonus Rp.${bonus.toLocaleString("id-ID")}. Pendapatan bersih anda Rp.${pendapatanBersih.toLocaleString("id-ID")}`,
);
console.log(typeof totalPendapatan);

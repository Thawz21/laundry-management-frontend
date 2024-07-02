import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TransactionHistory() {
  const [transactionHistories, setTransactionHistories] = useState([]);

  useEffect(() => {
    const fetchTransactionHistories = async () => {
      /*
        pesanan_id,
        nama,
        jenis_layanan,
        jumlah,
        total,
        uang_bayar,
        kembalian,
        status
      */
      setTransactionHistories([
        {
          pesanan_id: 1,
          nama: "Budi",
          jenis_layanan: "Cuci Komplit",
          jumlah: 5,
          total: 250000,
          uang_bayar: 300000,
          kembalian: 50000,
          status: "Selesai",
        },
        {
          pesanan_id: 2,
          nama: "Ani",
          jenis_layanan: "Cuci Komplit",
          jumlah: 2,
          total: 100000,
          uang_bayar: 150000,
          kembalian: 50000,
          status: "Proses",
        },
        {
          pesanan_id: 3,
          nama: "Joko",
          jenis_layanan: "Cuci Komplit",
          jumlah: 3,
          total: 150000,
          uang_bayar: 200000,
          kembalian: 50000,
          status: "Proses",
        },
        {
          pesanan_id: 4,
          nama: "Rina",
          jenis_layanan: "Cuci Komplit",
          jumlah: 1,
          total: 50000,
          uang_bayar: 60000,
          kembalian: 10000,
          status: "Proses",
        },
        {
          pesanan_id: 5,
          nama: "Dodi",
          jenis_layanan: "Cuci Komplit",
          jumlah: 4,
          total: 200000,
          uang_bayar: 250000,
          kembalian: 50000,
          status: "Selesai",
        },
        {
          pesanan_id: 6,
          nama: "Sari",
          jenis_layanan: "Cuci Komplit",
          jumlah: 2,
          total: 100000,
          uang_bayar: 150000,
          kembalian: 50000,
          status: "Proses",
        },
        {
          pesanan_id: 7,
          nama: "Rudi",
          jenis_layanan: "Cuci Komplit",
          jumlah: 3,
          total: 150000,
          uang_bayar: 200000,
          kembalian: 50000,
          status: "Proses",
        },
      ]);
    };
    //
    fetchTransactionHistories();
  }, []);

  return (
    <div className="min-h-screen text-black bg-sky-100">
      <Navbar />

      <div className="pt-32 px-20 pb-16">
        <h1 className="text-3xl font-semibold tracking-wide">
          DAFTAR RIWAYAT PEMESANAN
        </h1>

        <div className="mt-8 bg-white py-4 px-2 pb-16">
          <table className="table">
            <thead className="text-white font-semibold bg-blue-700">
              <tr>
                <th>No.</th>
                <th>No. Order</th>
                <th>Nama</th>
                <th>Jenis Paket</th>
                <th>Jumlah</th>
                <th>Total</th>
                <th>Uang Bayar</th>
                <th>Kembalian</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {transactionHistories.map((transactionHistory, i) => (
                <tr
                  key={transactionHistory.pesanan_id}
                  className="odd:bg-gray-200 even:bg-white border-0"
                >
                  <td>{i + 1}</td>
                  <td>{transactionHistory.pesanan_id}</td>
                  <td>{transactionHistory.nama}</td>
                  <td>{transactionHistory.jenis_layanan}</td>
                  <td>{transactionHistory.jumlah}</td>
                  <td>{transactionHistory.total}</td>
                  <td>{transactionHistory.uang_bayar}</td>
                  <td>{transactionHistory.kembalian}</td>
                  <td>{transactionHistory.status}</td>
                  <td>
                    <Link
                      href={`/dashboard/order/${transactionHistory.pesanan_id}`}
                      className="bg-green-500 text-white px-2 py-1 rounded-md text-xs"
                    >
                      Detail
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

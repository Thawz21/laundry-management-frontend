import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      /*
        pesanan_id INT AUTO_INCREMENT PRIMARY KEY,
        tanggal_pemesanan DATE,
        nama_pelanggan VARCHAR(100),
        jenis_layanan VARCHAR(100),
        jumlah_cucian INT,
        harga_total DECIMAL(10, 2),
        status_pesanan VARCHAR(50)
      */
      setOrders([
        {
          pesanan_id: 1,
          tanggal_pemesanan: "2021-10-01",
          nama_pelanggan: "Budi",
          jenis_layanan: "Cuci Komplit",
          jumlah_cucian: 5,
          harga_total: 250000,
          status_pesanan: "Selesai",
        },
        {
          pesanan_id: 2,
          tanggal_pemesanan: "2021-10-02",
          nama_pelanggan: "Ani",
          jenis_layanan: "Cuci Komplit",
          jumlah_cucian: 2,
          harga_total: 100000,
          status_pesanan: "Proses",
        },
        {
          pesanan_id: 3,
          tanggal_pemesanan: "2021-10-03",
          nama_pelanggan: "Joko",
          jenis_layanan: "Cuci Komplit",
          jumlah_cucian: 3,
          harga_total: 150000,
          status_pesanan: "Proses",
        },
        {
          pesanan_id: 4,
          tanggal_pemesanan: "2021-10-04",
          nama_pelanggan: "Rina",
          jenis_layanan: "Cuci Komplit",
          jumlah_cucian: 1,
          harga_total: 50000,
          status_pesanan: "Proses",
        },
        {
          pesanan_id: 5,
          tanggal_pemesanan: "2021-10-05",
          nama_pelanggan: "Dodi",
          jenis_layanan: "Cuci Komplit",
          jumlah_cucian: 4,
          harga_total: 200000,
          status_pesanan: "Proses",
        },
        {
          pesanan_id: 6,
          tanggal_pemesanan: "2021-10-06",
          nama_pelanggan: "Sari",
          jenis_layanan: "Cuci Komplit",
          jumlah_cucian: 2,
          harga_total: 100000,
          status_pesanan: "Proses",
        },
        {
          pesanan_id: 7,
          tanggal_pemesanan: "2021-10-07",
          nama_pelanggan: "Rudi",
          jenis_layanan: "Cuci Komplit",
          jumlah_cucian: 3,
          harga_total: 150000,
          status_pesanan: "Proses",
        },
      ]);
    };
    //
    fetchOrderData();
  }, []);

  return (
    <div className="min-h-screen text-black bg-sky-100">
      <Navbar />

      <div className="pt-32 px-20 pb-16">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg">
              Selamat Datang, <span className="font-bold">ADMIN</span>
            </h3>
            <h1 className="text-2xl font-bold tracking-wide">
              D A S H B O A R D
            </h1>
          </div>
          {/*  */}
          <button className="px-10 py-1 bg-blue-700 text-white">
            Order Baru +
          </button>
        </div>

        <div className="mt-8 flex justify-center items-center gap-8 mx-32">
          <div className="bg-white rounded-md px-12 py-3 flex justify-between items-center w-1/3">
            <div>
              <h4 className="text-gray-400">Total Karyawan</h4>
              <p className="text-xl font-semibold mt-2">5</p>
            </div>
            <Image
              src="/karyawan.png"
              alt="Karyawan"
              width={500}
              height={500}
              className="w-14"
            />
          </div>
          {/*  */}
          <div className="bg-white rounded-md px-12 py-3 flex justify-between items-center w-1/3">
            <div>
              <h4 className="text-gray-400">Total Order</h4>
              <p className="text-xl font-semibold mt-2">7</p>
            </div>
            <Image
              src="/total-order.png"
              alt="Karyawan"
              width={500}
              height={500}
              className="w-14"
            />
          </div>
          {/*  */}
          <div className="bg-white rounded-md px-12 py-3 flex justify-between items-center w-1/3">
            <div>
              <h4 className="text-gray-400">Jumlah Paket Tersedia</h4>
              <p className="text-xl font-semibold mt-2">15</p>
            </div>
            <Image
              src="/jumlah-paket.png"
              alt="Karyawan"
              width={500}
              height={500}
              className="w-14"
            />
          </div>
        </div>

        <div className="mt-8 bg-white px-6 pt-4 pb-16">
          <h1 className="font-semibold">Order Cuci Komplit</h1>
          {/*  */}
          <table className="mt-4 table">
            <thead className="text-white font-semibold bg-blue-700">
              <tr>
                <th>No.</th>
                <th>No. Order</th>
                <th>Tgl Order</th>
                <th>Nama Pelanggan</th>
                <th>Jenis Paket</th>
                <th>Berat (Kg)</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr
                  key={order.pesanan_id}
                  className="odd:bg-gray-200 even:bg-white border-0"
                >
                  <td>{i + 1}</td>
                  <td>{order.pesanan_id}</td>
                  <td>{order.tanggal_pemesanan}</td>
                  <td>{order.nama_pelanggan}</td>
                  <td>{order.jenis_layanan}</td>
                  <td>{order.jumlah_cucian}</td>
                  <td>{order.harga_total}</td>
                  <td>
                    <Link
                      href={`/dashboard/order/${order.pesanan_id}`}
                      className="bg-blue-700 text-white px-2 py-1 rounded-md text-xs"
                    >
                      Detail
                    </Link>
                    <button className="ms-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs">
                      Hapus
                    </button>
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

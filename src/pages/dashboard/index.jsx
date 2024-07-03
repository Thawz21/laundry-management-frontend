import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [orders, setOrders] = useState([]);

  // Mapping untuk type_id
  const typeLabels = {
    1: "cuci komplit",
    2: "dry clean",
    3: "cuci satuan",
  };

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/pesananlaundry");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json(); // Assuming your API returns JSON data

        // Format tanggal_pemesanan jika perlu
        const formattedOrders = data.map((order) => ({
          ...order,
          tanggal_pemesanan: new Date(
            order.tanggal_pemesanan
          ).toLocaleDateString("id-ID", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }),
          // Ganti type_id dengan label sesuai mapping
          type: typeLabels[order.type_id],
        }));
        setOrders(formattedOrders); // Set state with fetched and formatted data
      } catch (error) {
        console.error("Fetch order data error: ", error);
      }
    };

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
          <Link href="/dashboard/new-transaction">
            <button className="px-10 py-1 bg-blue-700 text-white">
              Order Baru +
            </button>
          </Link>
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
              {orders &&
                orders.map((order, i) => (
                  <tr
                    key={order.pesanan_id}
                    className="odd:bg-gray-200 even:bg-white border-0"
                  >
                    <td>{i + 1}</td>
                    <td>{order.pesanan_id}</td>
                    <td>{order.tanggal_pemesanan}</td>
                    <td>{order.nama}</td>
                    <td>{order.type}</td>
                    <td>{order.berat_kg}</td>
                    <td>{order.total_harga}</td>
                    <td>
                      <Link
                        href={`/dashboard/order/${order.pesanan_id}`}
                        className="bg-blue-700 text-white px-2 py-1 rounded-md text-xs"
                      >
                        Detail
                      </Link>
                      <Link
                        href={`/dashboard/order/edit/${order.pesanan_id}`}
                        className="ms-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs"
                      >
                        Edit
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

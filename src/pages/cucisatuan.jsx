import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DaftarPaketCuciSatuan() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/pesananlaundry/cucisatuan"
        );
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
    console.log(orders);
  }, []);

  return (
    <div className="min-h-screen text-black bg-sky-100">
      <Navbar />

      <div className="pt-32 px-20 pb-16">
        <h1 className="text-2xl font-bold mb-4">DAFTAR PAKET CUCI SATUAN</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-blue-700 text-white">
              <th className="py-2">No</th>
              <th className="py-2">No. Order</th>
              <th className="py-2">Nama</th>
              <th className="py-2">Jumlah</th>
              <th className="py-2">Harga Total</th>
              <th className="py-2">Uang Bayar</th>
              <th className="py-2">Kembalian</th>
              <th className="py-2">Status</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.order_id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="py-2 text-center">{index + 1}</td>
                <td className="py-2 text-center">{order.order_id}</td>
                <td className="py-2 text-center">{order.name}</td>
                <td className="py-2 text-center">{order.quantity}</td>
                <td className="py-2 text-center">{order.total_price}</td>
                <td className="py-2 text-center">{order.amount_paid}</td>
                <td className="py-2 text-center">{order.change}</td>
                <td className="py-2 text-center">{order.status}</td>
                <td className="py-2 text-center">
                  <Link href={`/dashboard/order/${order.order_id}`}>
                    <button className="bg-green-500 text-white px-2 py-1 rounded-md">
                      Detail
                    </button>
                  </Link>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

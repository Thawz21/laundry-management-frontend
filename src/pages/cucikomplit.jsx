import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CuciKomplit() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      setOrders([
        {
          order_id: 1,
          name: "Budi",
          quantity: 5,
          total_price: 250000,
          amount_paid: 250000,
          change: 0,
          status: "Selesai",
        },
        {
          order_id: 2,
          name: "Ani",
          quantity: 2,
          total_price: 100000,
          amount_paid: 100000,
          change: 0,
          status: "Proses",
        },
        {
          order_id: 3,
          name: "Joko",
          quantity: 3,
          total_price: 150000,
          amount_paid: 150000,
          change: 0,
          status: "Proses",
        },
        {
          order_id: 4,
          name: "Rina",
          quantity: 1,
          total_price: 50000,
          amount_paid: 50000,
          change: 0,
          status: "Proses",
        },
        {
          order_id: 5,
          name: "Dodi",
          quantity: 4,
          total_price: 200000,
          amount_paid: 200000,
          change: 0,
          status: "Proses",
        },
        {
          order_id: 6,
          name: "Sari",
          quantity: 2,
          total_price: 100000,
          amount_paid: 100000,
          change: 0,
          status: "Proses",
        },
        {
          order_id: 7,
          name: "Rudi",
          quantity: 3,
          total_price: 150000,
          amount_paid: 150000,
          change: 0,
          status: "Proses",
        },
      ]);
    };
    fetchOrderData();
  }, []);

  return (
    <div className="min-h-screen text-black bg-sky-100">
      <Navbar />

      <div className="pt-32 px-20 pb-16">
        <h1 className="text-2xl font-bold mb-4">CUCI KOMPLIT</h1>
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

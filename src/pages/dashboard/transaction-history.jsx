import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TransactionHistory() {
  const [transactionHistories, setTransactionHistories] = useState([]);

  // Mapping untuk type_id
  const typeLabels = {
    1: 'cuci komplit',
    2: 'dry clean',
    3: 'cuci satuan'
  };

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/pesananlaundry");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json(); // Assuming your API returns JSON data

        // Filter only completed orders (assuming 'completed' status is represented by 'completed')
        const completedOrders = data.filter(order => order.status === 'selesai'); 

        // Format tanggal_pemesanan jika perlu
        const formattedOrders = completedOrders.map(order => ({
          ...order,
          tanggal_pemesanan: new Date(order.tanggal_pemesanan).toLocaleDateString('id-ID', {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          }),
          // Ganti type_id dengan label sesuai mapping
          type: typeLabels[order.type_id]
        }));
        setTransactionHistories(formattedOrders); // Set state with fetched and formatted data
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
                <th>Berat</th>
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
                  <td>{transactionHistory.tanggal_pemesanan}</td>
                  <td>{transactionHistory.berat_kg}</td>
                  <td>{transactionHistory.total_harga}</td>
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

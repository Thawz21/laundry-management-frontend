import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderDetail() {
  const router = useRouter();
  const { id } = router.query;
  // if (id) {
  //   console.log(id);
  // }

  // const { orderDetailsId, setOrderDetailsId } = useState({});
  // setOrderDetailsId(id);
  // console.log(orderDetailsId);

  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    // async function fetchOrderDetail(id) {
    //   await axios.get(`http://127.0.0.1:5000/pesananlaundry/${id}`).then(
    //     (response) => {
    //       if (!response) {
    //         alert("Failed to fetch data");
    //       }
    //       const data = response.json();
    //       // console.log(JSON.stringify(response));
    //       setOrderDetails(response.json());
    //     }
    //   );
    // }
    // console.log(id);

    async function fetchOrderDetail(id) {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/pesananlaundry/${id}`
        );
        if (!response) {
          alert("Failed to fetch data");
        }
        const data = response.data[0];
        console.log(data);
        setOrderDetails(data);
      } catch (error) {
        console.error("Fetch order data error: ", error);
      }
    }

    // const data = async(id)=> {

    // }
    if (id) fetchOrderDetail(id);
  }, [id]);

  // console.log(orderDetails);

  return (
    <div className="min-h-screen text-black bg-sky-100">
      <Navbar />

      <div className="pt-32 px-20 pb-16">
        <div className="bg-white p-6 pb-16">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold">Detail Order</h1>
            {/*  */}
            <h2 className="text-2xl text-gray-300 font-semibold">
              No. Order: <span className="text-black">SI-1221KLPB</span>
            </h2>
          </div>

          <div className="mx-32">
            <div className="mt-10">
              <h1 className="text-white text-lg font-semibold bg-blue-700 py-2 ps-4">
                Customer
              </h1>
              <div className="flex">
                <div className="w-[30%]">
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">
                    Nama
                  </h3>
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">
                    Nomor Telepon
                  </h3>
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">
                    Alamat
                  </h3>
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">
                    Order Masuk
                  </h3>
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">
                    Diambil Pada
                  </h3>
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">
                    Estimasi Pengerjaan
                  </h3>
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">
                    Jenis Paket
                  </h3>
                </div>
                <div className="w-[70%]">
                  <p className="border border-gray-300 py-2 ps-6">
                    {orderDetails.nama}
                  </p>
                  <p className="border border-gray-300 py-2 ps-6">{orderDetails.nomor_telepon}</p>
                  <p className="border border-gray-300 py-2 ps-6">
                    {orderDetails.alamat}
                  </p>
                  <p className="border border-gray-300 py-2 ps-6">{orderDetails.tanggal_pemesanan}</p>
                  <p className="border border-gray-300 py-2 ps-6">{orderDetails.tanggal_pengambilan}</p>
                  <p className="border border-gray-300 py-2 ps-6">7 Hari</p>
                  <p className="border border-gray-300 py-2 ps-6">
                    {orderDetails.type_id === 1 ? "Cuci Komplit" : orderDetails.type_id === 2 ? "Dry Clean" : "Cuci Satuan"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h1 className="text-white text-lg font-semibold bg-blue-700 py-2 ps-4">
                Order
              </h1>
              <div className="flex">
                <div className="w-1/3">
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">
                    Berat (Kg)
                  </h3>
                  <p className="border border-gray-300 py-2 ps-4">{orderDetails.berat_kg}</p>
                </div>
                <div className="w-1/3">
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">
                    Harga Per-Kg
                  </h3>
                  <p className="border border-gray-300 py-2 ps-4">
                    Rp. 10.000,-
                  </p>
                </div>
                <div className="w-1/3">
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">
                    Total Bayar
                  </h3>
                  <p className="border border-gray-300 py-2 ps-4">
                    {orderDetails.total_harga}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Keterangan:</h3>
              <p>{orderDetails.keterangan}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

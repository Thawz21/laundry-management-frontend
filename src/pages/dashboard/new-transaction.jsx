import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useState } from "react";

export default function OrderDetail() {
  const router = useRouter();
  const { id } = router.query;

  // State untuk mengelola input teks
  const [orderDetails, setOrderDetails] = useState({
    nama: "",
    nomorTelepon: "",
    alamat: "",
    orderMasuk: "",
    diambilPada: "",
    estimasiPengerjaan: "",
    jenisPaket: "",
    berat: "",
    hargaPerKg: "Rp. 10.000,-",
    totalBayar: "",
    keterangan: "",
  });

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  // Handle add button click
  const handleAdd = () => {
    // Tambahkan logika untuk menambahkan data baru di sini
    console.log("Data baru ditambahkan:", orderDetails);
  };

  return (
    <div className="min-h-screen text-black bg-sky-100">
      <Navbar />

      <div className="pt-32 px-20 pb-16">
        <div className="bg-white p-6 pb-16">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold">Detail Order</h1>
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
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">Nama</h3>
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">Nomor Telepon</h3>
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">Alamat</h3>
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">Order Masuk</h3>
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">Diambil Pada</h3>
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">Estimasi Pengerjaan</h3>
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">Jenis Paket</h3>
                </div>
                <div className="w-[70%]">
                  <input className="border border-gray-300 py-2 ps-6 w-full bg-white text-black" name="nama" value={orderDetails.nama} onChange={handleChange} />
                  <input className="border border-gray-300 py-2 ps-6 w-full bg-white text-black" name="nomorTelepon" value={orderDetails.nomorTelepon} onChange={handleChange} />
                  <input className="border border-gray-300 py-2 ps-6 w-full bg-white text-black" name="alamat" value={orderDetails.alamat} onChange={handleChange} />
                  <input className="border border-gray-300 py-2 ps-6 w-full bg-white text-black" name="orderMasuk" value={orderDetails.orderMasuk} onChange={handleChange} />
                  <input className="border border-gray-300 py-2 ps-6 w-full bg-white text-black" name="diambilPada" value={orderDetails.diambilPada} onChange={handleChange} />
                  <input className="border border-gray-300 py-2 ps-6 w-full bg-white text-black" name="estimasiPengerjaan" value={orderDetails.estimasiPengerjaan} onChange={handleChange} />
                  <input className="border border-gray-300 py-2 ps-6 w-full bg-white text-black" name="jenisPaket" value={orderDetails.jenisPaket} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h1 className="text-white text-lg font-semibold bg-blue-700 py-2 ps-4">Order</h1>
              <div className="flex">
                <div className="w-1/3">
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">Berat (Kg)</h3>
                  <input className="border border-gray-300 py-2 ps-4 w-full bg-white text-black mb-2" name="berat" value={orderDetails.berat} onChange={handleChange} />
                </div>
                <div className="w-1/3">
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">Harga Per-Kg</h3>
                  <p className="border border-gray-300 py-2 ps-4 w-full bg-white text-black mb-2">{orderDetails.hargaPerKg}</p>
                </div>
                <div className="w-1/3">
                  <h3 className="border border-gray-300 py-2 ps-4 font-semibold">Total Bayar</h3>
                  <input className="border border-gray-300 py-2 ps-4 w-full bg-white text-black mb-2" name="totalBayar" value={orderDetails.totalBayar} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Keterangan:</h3>
              <textarea className="border border-gray-300 py-2 ps-6 w-full bg-white text-black" name="keterangan" value={orderDetails.keterangan} onChange={handleChange} />
            </div>

            <div className="mt-6 flex justify-end">
              <button
                className="bg-blue-700 text-white py-2 px-4 rounded"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

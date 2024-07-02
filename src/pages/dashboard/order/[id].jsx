import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function OrderDetail() {
  const router = useRouter();
  const { id } = router.query;

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
                  <p className="border border-gray-300 py-2 ps-6">Nabil</p>
                  <p className="border border-gray-300 py-2 ps-6">081234567</p>
                  <p className="border border-gray-300 py-2 ps-6">Tamalanrea</p>
                  <p className="border border-gray-300 py-2 ps-6">22</p>
                  <p className="border border-gray-300 py-2 ps-6">28-05-2024</p>
                  <p className="border border-gray-300 py-2 ps-6">4 Hari</p>
                  <p className="border border-gray-300 py-2 ps-6">
                    Cuci Komplit
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
                  <p className="border border-gray-300 py-2 ps-4">1 Kg</p>
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
                    Rp. 10.000,-
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Keterangan:</h3>
              <p>Jaket Kulit 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

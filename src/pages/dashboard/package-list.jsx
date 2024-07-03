import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function PackageList() {
  return (
    <div className="min-h-screen text-black bg-sky-100">
      <Navbar />

      <div className="pt-32 px-20 pb-16">
        <div className="bg-white p-6 pb-16">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold">Daftar Paket Tersedia</h1>
            <Link
              href="/dashboard"
              className="px-10 py-1 bg-blue-700 text-white"
            >
              Kembali
            </Link>
          </div>

          <div className="mt-8 flex justify-center items-center gap-10 mx-12">
            <Link href="/cucikomplit" className="w-1/3">
              <div className="bg-gray-100 flex flex-col justify-center items-center pb-16">
                <Image
                  src="/cuci-komplit.png"
                  alt="Karyawan"
                  width={500}
                  height={500}
                  className="w-72 h-72 object-cover"
                />
                <h6>Daftar Paket Cuci Komplit</h6>
              </div>
            </Link>
            
            <Link href="/dryclean" className="w-1/3">
              <div className="bg-gray-100 flex flex-col justify-center items-center pb-12">
                <Image
                  src="/dry-clean.png"
                  alt="Karyawan"
                  width={500}
                  height={500}
                  className="w-72 h-72 object-cover"
                />
                <h6 className="mt-4">Daftar Paket Dry Clean</h6>
              </div>
            </Link>
            
            <Link href="/cucisatuan" className="w-1/3">
              <div className="bg-gray-100 flex flex-col justify-center items-center pb-12">
                <Image
                  src="/cuci-satuan.png"
                  alt="Karyawan"
                  width={500}
                  height={500}
                  className="w-72 h-72 object-cover"
                />
                <h6 className="mt-4">Daftar Paket Cuci Satuan</h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

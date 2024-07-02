import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="fixed w-full bg-blue-600 text-white">
      <div className="flex justify-between items-center py-4 px-8">
        <Link href="/dashboard" className="text-2xl">
          SISFO <span className="font-semibold">LAUNDRY</span>
        </Link>
        {/*  */}
        <button>Admin</button>
      </div>

      <div className="bg-blue-700 flex justify-center items-center gap-10 pt-1.5 pb-2 text-sm">
        <Link
          href="/dashboard/transaction-history"
          className={`${
            router.pathname === "/dashboard/transaction-history"
              ? "text-white"
              : "text-gray-300"
          }`}
        >
          Riwayat Pesanan
        </Link>
        <Link
          href="/dashboard/employees"
          className={`${
            router.pathname === "/dashboard/employees"
              ? "text-white"
              : "text-gray-300"
          }`}
        >
          Manage Karyawan
        </Link>
        <Link
          href="/dashboard/package-list"
          className={`${
            router.pathname === "/dashboard/package-list"
              ? "text-white"
              : "text-gray-300"
          }`}
        >
          Daftar Paket
        </Link>
      </div>
    </div>
  );
}

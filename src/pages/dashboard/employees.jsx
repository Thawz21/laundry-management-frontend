import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      /*
        id INT AUTO_INCREMENT PRIMARY KEY,
        nama VARCHAR(100),
        nomor_telepon VARCHAR(15),
        email VARCHAR(100),
      */
      setEmployees([
        {
          id: 1,
          nama: "Budi",
          nomor_telepon: "81234567890",
          email: "budi@gmail.com",
        },
        {
          id: 2,
          nama: "Ani",
          nomor_telepon: "82345678901",
          email: "ani@gmail.com",
        },
        {
          id: 3,
          nama: "Nabil",
          nomor_telepon: "83456789012",
          email: "nabil@gmail.com",
        },
        {
          id: 4,
          nama: "Kelvin",
          nomor_telepon: "84567890123",
          email: "kelvin@gmail.com",
        },
      ]);
    };
    fetchEmployeeData();
  }, []);

  return (
    <div className="min-h-screen text-black bg-sky-100">
      <Navbar />

      <div className="pt-32 px-20 pb-16">
        <h1 className="text-3xl font-semibold tracking-wide">
          MANAJEMEN KARYAWAN
        </h1>

        <div className="mt-8 bg-white py-4 px-2 pb-16">
          <h3 className="ms-2 font-semibold text-xl">Daftar Karyawan</h3>

          <table className="mt-6 table">
            <thead className="text-white font-semibold bg-blue-700">
              <tr>
                <th>No.</th>
                <th>Nama Karyawan</th>
                <th>Nomor Telepon</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
                  <td>{index + 1}</td>
                  <td>{employee.nama}</td>
                  <td>+62 {employee.nomor_telepon}</td>
                  <td>{employee.email}</td>
                  <td>
                    <Link
                      href={`/dashboard/order/${employee.id}`}
                      className="bg-red-500 text-white px-2 py-1 rounded-md text-xs"
                    >
                      Hapus
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

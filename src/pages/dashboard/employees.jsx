import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/karyawan");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Fetch employee data error: ", error);
      }
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

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        username,
        password,
      });
      if (response.status === 200) {
        // Redirect to dashboard or home page
        localStorage.setItem("karyawan", JSON.stringify(response.data));
        router.push("/dashboard");
      }
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen text-black bg-sky-100 flex justify-center items-center">
      <div className="bg-white rounded-3xl flex justify-center items-center">
        <div className="w-[60%] self-start py-14">
          <h1 className="text-3xl text-center">
            SISFO <span className="font-semibold">LAUNDRY</span>
          </h1>
          {error}
          <div className="mt-6 flex flex-col justify-center items-center gap-4 w-[70%] mx-auto">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input input-bordered input-info bg-white border-0 border-b-2 rounded-none w-full ps-2"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered input-info bg-white border-0 border-b-2 rounded-none w-full ps-2"
            />
            <button
              onClick={handleSubmit}
              className="mt-4 text-center bg-gradient-to-r from-blue-600 to-sky-300 w-full text-white rounded-sm py-2 text-sm font-semibold"
            >
              LOGIN
            </button>
          </div>
        </div>

        <div className="w-[40%] p-12 bg-gradient-to-bl from-sky-300 to-blue-600 rounded-3xl rounded-tl-[50%] rounded-bl-none">
          <Image
            src="/sisfo-laundy.png"
            alt="Sisfo Laundry"
            width={500}
            height={500}
            className="w-full ms-4 mt-6"
          />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen text-black bg-sky-100 flex justify-center items-center">
      <div className="bg-white rounded-3xl flex justify-center items-center">
        <div className="w-[60%] self-start py-14">
          <h1 className="text-3xl text-center">
            SISFO <span className="font-semibold">LAUNDRY</span>
          </h1>
          {/*  */}
          <div className="mt-6 flex flex-col justify-center items-center gap-4 w-[70%] mx-auto">
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered input-info bg-white border-0 border-b-2 rounded-none w-full ps-2"
            />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered input-info bg-white border-0 border-b-2 rounded-none w-full ps-2"
            />
            <button className="mt-4 text-center bg-gradient-to-r from-blue-600 to-sky-300 w-full text-white rounded-sm py-2 text-sm font-semibold">
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

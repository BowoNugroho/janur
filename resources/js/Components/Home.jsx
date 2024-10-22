import React from "react";
import home from "@/Assets/home.jpeg";
import home1 from "@/Assets/home1.jpeg";
import home2 from "@/Assets/home2.jpeg";

const Home = () => {
    return (
        <div className="home">
            <div className="container mx-auto py-2">
                <div className="grid grid-cols-1 pt-28 items-center gap-4 px-5">
                    <div
                        className="box rounded-2xl lg:h-[600px] md:h-[400px] h-[300px] bg-cover bg-center lg:w-full md:w-full "
                        style={{ backgroundImage: `url(${home})` }}
                    >
                        <div className="flex flex-col lg:gap-2 items-center px-5 lg:pt-44 sm:pt-28 pt-16">
                            <h1 className="text-center lg:text-2xl text-lg text-white">
                                Selamat Datang
                            </h1>
                            <h1 className="text-center lg:text-4xl text-2xl text-white font-bold">
                                <span>Ridwan Janur</span>
                            </h1>
                            <p className="text-white text-center lg:text-[18px] text-[12px]">
                                Melayani pesanan Janur, Dekorasi Siraman /
                                Wedding, Tuwuhan, Rajut Melati CPW, Rias Busana
                                , MC & Pemandu dll.
                            </p>
                            <a
                                href=""
                                className="px-3 lg:px-8 py-2 w-32 shadow bg-orange-400 outline-none text-center text-white lg:text-sm text-[12px] hover:bg-gray-500 rounded-full"
                            >
                                Pesan
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 pt-10 px-5">
                    <div
                        className="box rounded-2xl lg:h-[450px] md:h-[350px] h-[300px] bg-cover bg-center w-full"
                        style={{ backgroundImage: `url(${home1})` }}
                    >
                        <div className=" flex flex-col lg:gap-2 items-end pt-36 px-10">
                            <h1 className="text-right lg:text-xl text-lg text-white ">
                                Melayani
                            </h1>
                            <h1 className="text-right lg:text-5xl text-xl text-white font-bold ">
                                <span> Dekorasi Gedung</span>
                            </h1>
                            {/* <p className="text-white text-right lg:text-[16px] text-[12px] ">
                                Dapatkan{" "}
                                <span className="font-bold text-orange-400 underline">
                                    Harga Miring
                                </span>
                            </p> */}
                            <button className="px-3 lg:px-8 py-2 w-32 mt-4 shadow bg-orange-400 outline-none text-white lg:text-sm text-[12px] hover:bg-gray-500 rounded-full">
                                Pesan
                            </button>
                        </div>
                    </div>
                    <div
                        className="box rounded-2xl lg:h-[450px] md:h-[350px] h-[300px] bg-cover bg-center w-full"
                        style={{ backgroundImage: `url(${home2})` }}
                    >
                        <div className=" flex flex-col lg:gap-2 items-end pt-36 px-10">
                            <h1 className="text-right lg:text-xl text-lg text-white ">
                                Melayani
                            </h1>
                            <h1 className="text-right lg:text-5xl text-xl text-white font-bold ">
                                <span> Dekorasi Siraman</span>
                            </h1>
                            {/* <p className="text-white text-right lg:text-[16px] text-[12px] ">
                        Dapatkan{" "}
                        <span className="font-bold text-orange-400 underline">
                            Harga Miring
                        </span>
                    </p> */}
                            <button className="px-3 lg:px-8 py-2 w-32 mt-4 shadow bg-orange-400 outline-none text-white lg:text-sm text-[12px] hover:bg-gray-500 rounded-full">
                                Pesan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

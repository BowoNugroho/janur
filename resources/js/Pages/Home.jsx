import React from "react";
import Navbar from "@/Components/Navbar";
// import Home from "../Components/Home";
import About from "../Components/About";
import Layout from "../Layouts/Layout";
import home from "@/Assets/home.jpeg";
import home1 from "@/Assets/home1.jpeg";
import home2 from "@/Assets/home2.jpeg";
import home11 from "@/Assets/home11.jpeg";
import ongkir2 from "@/Assets/ongkir2.svg";
import wedding from "@/Assets/wedding.svg";
import money1 from "@/Assets/money1.svg";

function Home() {
    return (
        // <div>
        //     {/* <Navbar /> */}
        //     {/* <Home /> */}
        //     {/* <About /> */}
        // </div>

        <Layout>
            <div className="home">
                <div className="container mx-auto py-2">
                    <div className="grid grid-cols-1 pt-28 items-center gap-4 px-5">
                        <div
                            className="box rounded-2xl lg:h-[600px] md:h-[400px] h-[300px] bg-cover bg-center lg:w-full md:w-full "
                            style={{ backgroundImage: `url(${home1})` }}
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
                                    Wedding, Tuwuhan, Rajut Melati CPW, Rias
                                    Busana , MC & Pemandu dll.
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
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-10 px-5 mb-10">
                        <div
                            className="box lg:col-span-2 rounded-2xl lg:h-[450px] md:h-[350px] h-[300px] bg-cover bg-center w-full"
                            style={{ backgroundImage: `url(${home11})` }}
                        >
                            <div className=" flex flex-col lg:gap-2 items-end pt-36 px-10">
                                <h1 className="text-right lg:text-xl text-lg text-white ">
                                    Melayani
                                </h1>
                                <h1 className="text-right lg:text-5xl text-xl text-white font-bold ">
                                    <span> Dekorasi Gedung</span>
                                </h1>
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
                                <h1 className="text-right lg:text-4xl text-xl text-white font-bold ">
                                    <span> Dekorasi Siraman</span>
                                </h1>
                                <button className="px-3 lg:px-8 py-2 w-32 mt-4 shadow bg-orange-400 outline-none text-white lg:text-sm text-[12px] hover:bg-gray-500 rounded-full">
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-7 px-5 rounded-xl mb-10">
                        <div className="flex justify-center">
                            <img
                                src={wedding}
                                alt=""
                                className="lg:h-[150px] md:h-[130px] h-[100px]"
                            />
                        </div>
                        <h1 className="text-center mt-8 lg:text-[30px] md:text-[25px] text-[15px]">
                            "Rayakan Pernikahan Anda dengan Dekorasi yang
                            <span className="text-orange-400 underline font-bold px-1">
                                Elegan dan Romantis
                            </span>
                            "
                        </h1>
                    </div>
                    <div className=" gap-4 px-5 mb-10">
                        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5  pt-5 pb-5 bg-slate-200 rounded-2xl">
                            <div className="box flex justify-center">
                                <img
                                    src={ongkir2}
                                    alt=""
                                    className="lg:h-[290px] md:h-[250px] h-[150px] "
                                />
                            </div>
                            <div className="box lg:col-span-2">
                                <div className=" flex flex-col lg:gap-2 items-star px-10 pt-12">
                                    <h1 className="text-left lg:text-[45px] h-[30px] text-lg font-bold">
                                        Gratis Ongkos Kirim
                                    </h1>
                                    <p className="mt-5 text-gray-400 underline lg:text-[16px] md:text-[14px] text-[12px]">
                                        Syarat & Ketentuan Berlaku
                                    </p>
                                    <p className="lg:text-[16px] md:text-[14px] text-[12px]">
                                        "Wujudkan dekorasi impian Anda tanpa
                                        khawatir ongkos kirim! Nikmati GRATIS
                                        ONGKIR untuk semua layanan kami!"
                                    </p>
                                    <button className="px-3 lg:px-8 py-2 w-32 mt-4 shadow bg-orange-400 outline-none text-white lg:text-sm text-[12px] hover:bg-gray-500 rounded-full">
                                        Pesan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gap-4 px-5 mb-10">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5  pt-5 pb-5 bg-slate-200 rounded-2xl">
                            <div className="box lg:col-span-2 lg:order-1 md:order-1 order-2">
                                <div className=" flex flex-col lg:gap-2 items-star px-10 pt-16">
                                    <h1 className="text-left lg:text-[43px] h-[30px] text-lg font-bold">
                                        Keamanan Pembayaran
                                    </h1>
                                    {/* <p className="mt-5 text-gray-400 underline lg:text-[16px] md:text-[14px] text-[12px]">
                                        Syarat & Ketentuan Berlaku
                                    </p> */}
                                    <p className="lg:text-[16px] md:text-[14px] text-[12px] mt-5">
                                        "Keamanan Anda adalah prioritas kami!
                                        Nikmati layanan dekorasi dengan sistem
                                        pembayaran yang aman dan terpercaya."
                                    </p>
                                    <button className="px-3 lg:px-8 py-2 w-32 mt-4 shadow bg-orange-400 outline-none text-white lg:text-sm text-[12px] hover:bg-gray-500 rounded-full">
                                        Pesan
                                    </button>
                                </div>
                            </div>
                            <div className="box flex justify-center lg:order-2 md:order-2 order-1">
                                <img
                                    src={money1}
                                    alt=""
                                    className="lg:h-[290px] md:h-[250px] h-[150px] "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default Home;

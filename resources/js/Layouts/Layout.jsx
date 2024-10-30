import React, { useState, useEffect } from "react";
import wa from "@/Assets/wa.png";
// import { Link } from "react-scroll";
import { Link } from "@inertiajs/react";
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { SiGooglemaps, SiGmail, SiWhatsapp, SiInstagram } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineGlobal, AiOutlineCopyright } from "react-icons/ai";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";

const Layout = ({ children }) => {
    const [nav, setNav] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 5) {
                setNav(false);
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    });

    let scrollActive = scroll ? "top-0 bg-white shadow" : "top-8";
    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center  w-full  text-[11px] px-5 lg:px-[117px] py-2  bg-orange-400">
                    <SiWhatsapp className="mr-2 text-white" />
                    <p className="text-white"> HUBUNGI KAMI : 0813 9373 0949</p>
                </div>
                <div
                    className={`flex justify-between items-center px-5 lg:px-[120px] h-[60px] w-full fixed ${scrollActive}`}
                >
                    <div className="w-[120px] h-[15]">
                        {/* <img
                    src={logo}
                    alt=""
                    className="w-full h-full object-contain"
                /> */}
                        <p>Ridwan Janur</p>
                    </div>
                    <ul className="hidden md:flex">
                        <li className="flex gap-x-4">
                            <Link
                                href="/"
                                // to="home"
                                // key="home"
                                className="hover:text-orange-400 text-sm md:text-md"
                            >
                                Beranda
                            </Link>
                            <Link
                                href="/about"
                                // to="about"
                                // key="about"
                                className="hover:text-orange-400 text-sm md:text-md"
                            >
                                Tentang Kami
                            </Link>
                            <Link
                                href="/product"
                                // to="product"
                                // key="product"
                                className="hover:text-orange-400 text-sm md:text-md"
                            >
                                Layanan Kami
                            </Link>
                            <Link
                                href="/contact"
                                // to="contact"
                                // key="contact"
                                className="hover:text-orange-400 text-sm md:text-md"
                            >
                                Kontak Kami
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center">
                        <button className="px-3 lg:px-8 py-2 text-white  bg-orange-400 outline-none lg:text-sm text-[12px] hover:bg-gray-500 rounded-full">
                            Sosial Media
                        </button>
                        <TiThMenuOutline
                            className="text-2xl block md:hidden ml-2"
                            onClick={() => setNav((prev) => !prev)}
                        />
                    </div>
                    <div
                        className={`${
                            nav ? "right-0" : "-right-[100%]"
                        }   flex flex-col gap-4 pt-5 px-5 md:hidden absolute top-0 w-full h-screen bg-white`}
                    >
                        <IoMdCloseCircleOutline
                            className="cursor-pointer text-2xl"
                            onClick={() => setNav((prev) => !prev)}
                        />
                        <ul className="">
                            <li className="flex gap-y-4 flex-col">
                                <Link
                                    to="home"
                                    key="home"
                                    className="hover:text-orange-400 text-sm md:text-md border-b cursor-pointer py-3"
                                >
                                    Beranda
                                </Link>
                                <Link
                                    to="about"
                                    key="about"
                                    className="hover:text-orange-400 text-sm md:text-md border-b cursor-pointer py-3"
                                >
                                    Tentang Kami
                                </Link>
                                <Link
                                    to="product"
                                    key="product"
                                    className="hover:text-orange-400 text-sm md:text-md border-b cursor-pointer py-3"
                                >
                                    Layanan Kami
                                </Link>
                                <Link
                                    to="contact"
                                    key="contact"
                                    className="hover:text-orange-400 text-sm md:text-md border-b cursor-pointer py-3"
                                >
                                    Kontak Kami
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <main className="mb-10">{children}</main>
            <div className="bg-gray-500 ">
                <div className="container mx-auto py-2">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-14 px-5">
                        <div className="box">
                            <span className="font-bold text-white lg:text-2xl text-xl px-10">
                                Ridwan Janur
                            </span>
                            <p className="text-white lg:text-lg md:text-md  text-sm px-10 mt-5">
                                Kami melayani pesanan anyaman Janur, Dekorasi
                                Bunga Siraman / Wedding, Tuwuhan, Rajut Melati
                                CPW, Rias Busana , MC & Pemandu dan berbagai
                                macam kebutuhan wedding.
                            </p>
                        </div>
                        <div className=" box  text-white lg:text-lg md:text-md text-sm px-10 ">
                            <span className="font-bold ">Kontak Kami</span>
                            <p className=" flex mt-5 ">
                                <SiGooglemaps className="mr-3 text-2xl" />
                                Jln pintu pasar barat losjanur no 8 balimester
                                jatinegara 13310
                            </p>
                            <p className=" flex">
                                <SiGmail className="mr-3 h-6 text-md" />
                                ridwanjanur@gmail.com
                            </p>
                            <p className=" flex">
                                <BsTelephoneFill className="mr-3 h-6 text-md" />
                                0813 9373 0949
                            </p>
                            <p className=" flex">
                                <SiWhatsapp className="mr-3 h-6 text-md" />
                                0813 9373 0949
                            </p>
                            <p className=" flex">
                                <AiOutlineGlobal className="mr-3 h-7 text-lg" />
                                www.ridwanjanur.com
                            </p>
                        </div>
                        <div className="box  text-white lg:text-lg md:text-md text-sm px-10 mb-5">
                            <span className="font-bold ">Layanan Kami</span>
                            <p className="mt-5">
                                Dekorasi Bunga Gedung / Wedding
                            </p>
                            <p>Dekorasi Bunga Siraman</p>
                            <p>Pesanan Anyaman Janur</p>
                            <p>Tuwuhan</p>
                            <p>Rajut Melati CPW</p>
                            <p>Rias Busana</p>
                            <p>MC & Pemandu</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer bg-gray-600 ">
                <div className="container mx-auto py-2">
                    <div className="flex justify-between pt-5 px-5">
                        <p className="flex  text-white px-5 lg:text-lg md:text-md text-[12px]">
                            <AiOutlineCopyright className="lg:h-6 h-4 text-lg" />
                            2024 ridwanjanur.com. All rights reserved.
                        </p>
                        <div className="flex gap-4 text-white px-5 lg:text-lg md:text-md text-[12px]">
                            <SiInstagram />
                            <FaFacebookF />
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;

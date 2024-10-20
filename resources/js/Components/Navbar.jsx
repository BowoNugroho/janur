import React, { useState, useEffect } from "react";
import logo from "@/Assets/logo.png";
import wa from "@/Assets/wa.png";
import { Link } from "react-scroll";
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
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
        <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center  w-full  text-[11px] px-5 lg:px-[117px] py-2  bg-orange-400">
                <img
                    src={wa}
                    alt=""
                    className="w-[20px] h-[15] object-contain "
                />
                <p>HUBUNGI KAMI : 087485416954</p>
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
                            to="home"
                            key="home"
                            className="hover:text-orange-400 text-sm md:text-md"
                        >
                            Beranda
                        </Link>
                        <Link
                            to="about"
                            key="about"
                            className="hover:text-orange-400 text-sm md:text-md"
                        >
                            Tentang Kami
                        </Link>
                        <Link
                            to="product"
                            key="product"
                            className="hover:text-orange-400 text-sm md:text-md"
                        >
                            Layanan Kami
                        </Link>
                        <Link
                            to="contact"
                            key="contact"
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
    );
};

export default Navbar;

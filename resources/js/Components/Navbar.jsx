import React, { useState } from "react";
import logo from "@/Assets/logo.png";
import { Link } from "react-scroll";
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className="flex justify-between items-center px-5 lg:px-[72px] h-[80px] w-full fixed top-0">
            <div className="w-[103px] h-[25]">
                <img
                    src={logo}
                    alt=""
                    className="w-full h-full object-contain"
                />
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
                <button className="px-6 lg:px-8 bg-white outline-none text-sm hover:bg-orange-400 hover:text-white rounded-full">
                    Masuk
                </button>
                <TiThMenuOutline
                    className="text-2xl block md:hidden"
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
                            className="hover:text-orange-400 text-sm md:text-md border-b cursor-pointer"
                        >
                            Beranda
                        </Link>
                        <Link
                            to="about"
                            key="about"
                            className="hover:text-orange-400 text-sm md:text-md border-b cursor-pointer"
                        >
                            Tentang Kami
                        </Link>
                        <Link
                            to="product"
                            key="product"
                            className="hover:text-orange-400 text-sm md:text-md border-b cursor-pointer"
                        >
                            Layanan Kami
                        </Link>
                        <Link
                            to="contact"
                            key="contact"
                            className="hover:text-orange-400 text-sm md:text-md border-b cursor-pointer"
                        >
                            Kontak Kami
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

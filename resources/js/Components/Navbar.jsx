import React from "react";
import logo from "@/Assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-5 lg:px-[72px] h-[80px] w-full fixed top-0">
            <div className="w-[103px] h-[25]">
                <img
                    src={logo}
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>
            <ul>
                <li className="flex gap-x-4">
                    <Link to="home" key="home">
                        Beranda
                    </Link>
                    <Link to="about" key="about">
                        Tentang Kami
                    </Link>
                    <Link to="product" key="product">
                        Layanan Kami
                    </Link>
                    <Link to="contact" key="contact">
                        Kontak Kami
                    </Link>
                </li>
            </ul>
            <div>
                <button className="px-6 lg:px-8 bg-white outline-none hover:bg-orange-400 hover:text-white rounded-full">
                    Masuk
                </button>
            </div>
        </div>
    );
};

export default Navbar;

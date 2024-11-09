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
import { motion } from "framer-motion";

const Layout = ({ children }) => {
    const [nav, setNav] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolled2, setIsScrolled2] = useState(false);

    const handleScroll = () => {
        // Memeriksa apakah sudah menggulir ke bawah
        if (window.scrollY > 2200) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    const handleScroll2 = () => {
        // Memeriksa apakah sudah menggulir ke bawah
        if (window.scrollY > 2300) {
            setIsScrolled2(true);
        } else {
            setIsScrolled2(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 5) {
                setNav(false);
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScroll2);
    });

    const phoneNumber = "628156715273"; // Ganti dengan nomor WhatsApp Anda
    const message =
        "Halo! Saya ingin bertanya tentang Dekorasi Bunga Gedung Referensi dari Website"; // Pesan default
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    let scrollActive = scroll ? "top-0 bg-white shadow" : "top-8";

    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    const variants2 = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    // Durasi animasi
                    className="flex items-center  w-full  text-[11px] px-5 lg:px-[117px] py-2  bg-orange-400"
                >
                    <SiWhatsapp className="mr-2 text-white" />
                    <p className="text-white"> HUBUNGI KAMI : 0813 9373 0949</p>
                </motion.div>
                <div
                    className={`flex justify-between items-center px-5 lg:px-[120px]  h-[60px] w-full fixed ${scrollActive}`}
                >
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants2}
                        className="w-[120px] h-[15]"
                    >
                        <p>Ridwan Janur</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
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
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="flex items-center"
                    >
                        {/* <button>Pesan</button> */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            className="px-3 lg:px-8 py-2 text-white  bg-orange-400 outline-none lg:text-sm text-[12px] hover:bg-gray-500 rounded-full"
                        >
                            Pesan
                        </a>
                        <TiThMenuOutline
                            className="text-2xl block md:hidden ml-2"
                            onClick={() => setNav((prev) => !prev)}
                        />
                    </motion.div>
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
                                    href="/"
                                    // to="home"
                                    // key="home"
                                    className="hover:text-orange-400 text-sm md:text-md border-b cursor-pointer py-3"
                                >
                                    Beranda
                                </Link>
                                <Link
                                    href="/about"
                                    // to="about"
                                    // key="about"
                                    className="hover:text-orange-400 text-sm md:text-md border-b cursor-pointer py-3"
                                >
                                    Tentang Kami
                                </Link>
                                <Link
                                    href="/product"
                                    // to="product"
                                    // key="product"
                                    className="hover:text-orange-400 text-sm md:text-md border-b cursor-pointer py-3"
                                >
                                    Layanan Kami
                                </Link>
                                <Link
                                    href="/contact"
                                    // to="contact"
                                    // key="contact"
                                    className="hover:text-orange-400 text-sm md:text-md border-b cursor-pointer py-3"
                                >
                                    Kontak Kami
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <main className="">{children}</main>
        </>
    );
};

export default Layout;

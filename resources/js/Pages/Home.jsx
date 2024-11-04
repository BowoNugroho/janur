import React, { useEffect, useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiDoubleQuotesL } from "react-icons/ri";
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
import client1 from "@/Assets/client1.jpeg";
import tuwuhan from "@/Assets/tuwuhan.jpeg";
import janur1 from "@/Assets/janur1.jpeg";
import janur2 from "@/Assets/janur2.jpeg";
import janur3 from "@/Assets/janur3.jpeg";
import dekor1 from "@/Assets/dekor1.jpeg";
import dekor2 from "@/Assets/dekor2.jpeg";
import dekor4 from "@/Assets/dekor4.jpeg";
import dekor5 from "@/Assets/dekor5.jpeg";
import dekor6 from "@/Assets/dekor6.jpeg";
import dekor7 from "@/Assets/dekor7.jpeg";
import dekor8 from "@/Assets/dekor8.jpeg";
import dekor9 from "@/Assets/dekor9.jpeg";
import siraman3 from "@/Assets/siraman3.jpeg";
import siraman4 from "@/Assets/siraman4.jpeg";
import { motion } from "framer-motion";

const Home = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const phoneNumber = "628156715273"; // Ganti dengan nomor WhatsApp Anda
    const message =
        "Halo! Saya ingin bertanya tentang Dekorasi Bunga Gedung Referensi dari Website"; // Pesan default
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolled2, setIsScrolled2] = useState(false);
    const [isScrolled3, setIsScrolled3] = useState(false);
    const [isScrolled4, setIsScrolled4] = useState(false);
    const [isScrolled5, setIsScrolled5] = useState(false);
    const [isScrolled6, setIsScrolled6] = useState(false);

    const handleScroll = () => {
        // Memeriksa apakah sudah menggulir ke bawah
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            // setIsScrolled(false);
        }
    };
    const handleScroll2 = () => {
        // Memeriksa apakah sudah menggulir ke bawah
        if (window.scrollY > 500) {
            setIsScrolled2(true);
        } else {
            setIsScrolled2(false);
        }
    };
    const handleScroll3 = () => {
        // Memeriksa apakah sudah menggulir ke bawah
        if (window.scrollY > 800) {
            setIsScrolled3(true);
        } else {
            setIsScrolled3(false);
        }
    };
    const handleScroll4 = () => {
        // Memeriksa apakah sudah menggulir ke bawah
        if (window.scrollY > 1100) {
            setIsScrolled4(true);
        } else {
            setIsScrolled4(false);
        }
    };
    const handleScroll5 = () => {
        // Memeriksa apakah sudah menggulir ke bawah
        if (window.scrollY > 1500) {
            setIsScrolled5(true);
        } else {
            setIsScrolled5(false);
        }
    };
    const handleScroll6 = () => {
        // Memeriksa apakah sudah menggulir ke bawah
        if (window.scrollY > 1900) {
            setIsScrolled6(true);
        } else {
            setIsScrolled6(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScroll2);
        window.addEventListener("scroll", handleScroll3);
        window.addEventListener("scroll", handleScroll4);
        window.addEventListener("scroll", handleScroll5);
        window.addEventListener("scroll", handleScroll6);

        // return () => {
        //     window.removeEventListener("scroll", handleScroll);
        // };
    }, []);

    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2, times: [0.3, 1] },
        },
    };
    const variants2 = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    };
    const variants3 = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    };
    const variants4 = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    const variants5 = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <Layout>
            <div className="home">
                <div className="container mx-auto py-2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        className="grid grid-cols-1 pt-24 items-center gap-4 px-5"
                    >
                        <div
                            className="box rounded-2xl lg:h-[600px] md:h-[400px] h-[300px] bg-cover bg-center lg:w-full md:w-full "
                            style={{ backgroundImage: `url(${home1})` }}
                        >
                            <div className="flex flex-col lg:gap-2 items-center px-5 lg:pt-44 sm:pt-28 pt-16">
                                <motion.h1
                                    initial="hidden"
                                    animate="visible"
                                    variants={variants2}
                                    className="text-center lg:text-2xl text-lg text-white"
                                >
                                    Selamat Datang
                                </motion.h1>
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={variants3}
                                >
                                    <h1 className="text-center lg:text-4xl text-2xl text-white font-bold">
                                        <span>Ridwan Janur</span>
                                    </h1>
                                    <p className="text-white text-center lg:text-[18px] text-[12px]">
                                        Melayani pesanan Janur, Dekorasi Siraman
                                        / Wedding, Tuwuhan, Rajut Melati CPW,
                                        Rias Busana , MC & Pemandu dll.
                                    </p>
                                </motion.div>
                                <motion.a
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 2,
                                        times: [0.8, 1],
                                    }}
                                    href={whatsappUrl}
                                    target="_blank"
                                    className="px-3 lg:px-8 py-2 w-32 shadow bg-orange-400 outline-none text-center text-white lg:text-sm text-[12px] hover:bg-gray-500 rounded-full"
                                >
                                    Pesan
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-10 px-5 mb-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                                isScrolled
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: -20 }
                            }
                            transition={{ duration: 1 }}
                            className="box lg:col-span-2 rounded-2xl lg:h-[450px] md:h-[350px] h-[300px] bg-cover bg-center w-full"
                            style={{ backgroundImage: `url(${home11})` }}
                        >
                            <div className=" flex flex-col lg:gap-2 items-end pt-36 px-10">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={
                                        isScrolled
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 20 }
                                    }
                                    transition={{ duration: 1.5 }}
                                    className="text-right lg:text-xl text-lg text-white "
                                >
                                    Melayani
                                </motion.h1>
                                <motion.h1
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={
                                        isScrolled
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: -20 }
                                    }
                                    transition={{ duration: 1.5 }}
                                    className="text-right lg:text-4xl text-xl text-white font-bold "
                                >
                                    <span> Dekorasi Gedung</span>
                                </motion.h1>
                                <motion.a
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={
                                        isScrolled
                                            ? { opacity: 1, scale: 1 }
                                            : { opacity: 0, scale: 0 }
                                    }
                                    transition={{
                                        duration: 2,
                                        times: [0.6, 1],
                                    }}
                                    href={whatsappUrl}
                                    target="_blank"
                                    className="px-3 lg:px-8 py-2 w-32 shadow bg-orange-400 outline-none text-center text-white lg:text-sm text-[12px] hover:bg-gray-500 rounded-full"
                                >
                                    Pesan
                                </motion.a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={
                                isScrolled
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: 20 }
                            }
                            transition={{ duration: 1 }}
                            className="box rounded-2xl lg:h-[450px] md:h-[350px] h-[300px] bg-cover bg-center w-full"
                            style={{ backgroundImage: `url(${home2})` }}
                        >
                            <div className=" flex flex-col lg:gap-2 items-end pt-36 px-10">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={
                                        isScrolled
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 20 }
                                    }
                                    transition={{ duration: 1.5 }}
                                    className="text-right lg:text-xl text-lg text-white "
                                >
                                    Melayani
                                </motion.h1>
                                <motion.h1
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={
                                        isScrolled
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: -20 }
                                    }
                                    transition={{ duration: 1.5 }}
                                    className="text-right lg:text-4xl text-xl text-white font-bold "
                                >
                                    <span> Dekorasi Siraman</span>
                                </motion.h1>
                                <motion.a
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={
                                        isScrolled
                                            ? { opacity: 1, scale: 1 }
                                            : { opacity: 0, scale: 0 }
                                    }
                                    transition={{
                                        duration: 2,
                                        times: [0.6, 1],
                                    }}
                                    href={whatsappUrl}
                                    target="_blank"
                                    className="px-3 lg:px-8 py-2 w-32 shadow bg-orange-400 outline-none text-center text-white lg:text-sm text-[12px] hover:bg-gray-500 rounded-full"
                                >
                                    Pesan
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                    <div className="pt-7 px-5 rounded-xl mb-10">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={
                                isScrolled2
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: -20 }
                            }
                            transition={{ duration: 1.5 }}
                            className="flex justify-center"
                        >
                            <img
                                src={wedding}
                                alt=""
                                className="lg:h-[150px] md:h-[130px] h-[100px]"
                            />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                isScrolled2
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 1.5 }}
                            className="text-center mt-8 lg:text-[30px] md:text-[25px] text-[15px]"
                        >
                            "Rayakan Pernikahan Anda dengan Dekorasi yang
                            <span className="text-orange-400 underline font-bold px-1">
                                Elegan dan Romantis
                            </span>
                            "
                        </motion.h1>
                    </div>
                    <div className=" gap-4 px-5 mb-10">
                        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5  pt-5 pb-5rounded-2xl">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                animate={
                                    isScrolled3
                                        ? { opacity: 1, x: 0 }
                                        : { opacity: 0, x: -100 }
                                }
                                transition={{ duration: 0.8 }}
                                className="box flex justify-center"
                            >
                                <img
                                    src={ongkir2}
                                    alt=""
                                    className="lg:h-[290px] md:h-[250px] h-[150px] "
                                />
                            </motion.div>
                            <div className="box lg:col-span-2">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={
                                        isScrolled3
                                            ? { opacity: 1, x: 0 }
                                            : { opacity: 0, x: 100 }
                                    }
                                    transition={{ duration: 0.8 }}
                                    className=" flex flex-col lg:gap-2 items-star px-10 pt-12"
                                >
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
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        className="px-3 lg:px-8 py-2 w-32 shadow bg-orange-400 outline-none text-center text-white lg:text-sm text-[12px] hover:bg-gray-500 rounded-full"
                                    >
                                        Pesan
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="gap-4 px-5 mb-10">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5  pt-5 pb-5  rounded-2xl">
                            <div className="box lg:col-span-2 lg:order-1 md:order-1 order-2">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={
                                        isScrolled4
                                            ? { opacity: 1, x: 0 }
                                            : { opacity: 0, x: -100 }
                                    }
                                    transition={{ duration: 0.8 }}
                                    className=" flex flex-col lg:gap-2 items-star px-10 pt-16"
                                >
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
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        className="px-3 lg:px-8 py-2 w-32 shadow bg-orange-400 outline-none text-center text-white lg:text-sm text-[12px] hover:bg-gray-500 rounded-full"
                                    >
                                        Pesan
                                    </a>
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={
                                    isScrolled4
                                        ? { opacity: 1, x: 0 }
                                        : { opacity: 0, x: 100 }
                                }
                                transition={{ duration: 0.8 }}
                                className="box flex justify-center lg:order-2 md:order-2 order-1"
                            >
                                <img
                                    src={money1}
                                    alt=""
                                    className="lg:h-[290px] md:h-[250px] h-[150px] "
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="pt-7 px-5 ">
                        <div className="rounded-xl mb-14 ">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={
                                    isScrolled5
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: -20 }
                                }
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                }}
                                className="flex justify-center mb-10"
                            >
                                <p className="font-bold lg:text-[43px] h-[32px] text-2xl">
                                    Pelanggan Kami
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={
                                    isScrolled5
                                        ? {
                                              opacity: 1,
                                              y: [100, 0, -25, 0, -10, 0],
                                          }
                                        : { opacity: 0, y: 100 }
                                }
                                transition={{
                                    duration: 1.5,
                                    ease: "easeOut",
                                }}
                                className=""
                            >
                                <Carousel responsive={responsive}>
                                    <div className="flex justify-center px-5">
                                        <img
                                            src={dekor5}
                                            alt=""
                                            className="h-[250px] rounded-xl"
                                        />
                                    </div>
                                    <div className="flex justify-center px-5">
                                        <img
                                            src={client1}
                                            alt=""
                                            className=" h-[250px] rounded-xl"
                                        />
                                    </div>
                                    <div className="flex justify-center px-5">
                                        <img
                                            src={tuwuhan}
                                            alt=""
                                            className=" h-[250px] rounded-xl"
                                        />
                                    </div>
                                    <div className="flex justify-center px-5">
                                        <img
                                            src={janur1}
                                            alt=""
                                            className=" h-[250px] rounded-xl"
                                        />
                                    </div>
                                    <div className="flex justify-center px-5">
                                        <img
                                            src={siraman3}
                                            alt=""
                                            className=" h-[250px] rounded-xl"
                                        />
                                    </div>
                                    <div className="flex justify-center px-5">
                                        <img
                                            src={janur2}
                                            alt=""
                                            className=" h-[250px] rounded-xl"
                                        />
                                    </div>
                                    <div className="flex justify-center px-5">
                                        <img
                                            src={dekor2}
                                            alt=""
                                            className=" h-[250px] rounded-xl"
                                        />
                                    </div>
                                    <div className="flex justify-center px-5">
                                        <img
                                            src={janur3}
                                            alt=""
                                            className=" h-[250px] rounded-xl"
                                        />
                                    </div>
                                    <div className="flex justify-center px-5">
                                        <img
                                            src={dekor4}
                                            alt=""
                                            className=" h-[250px] rounded-xl"
                                        />
                                    </div>
                                    <div className="flex justify-center px-5">
                                        <img
                                            src={siraman4}
                                            alt=""
                                            className=" h-[250px] rounded-xl"
                                        />
                                    </div>
                                    <div className="flex justify-center px-5">
                                        <img
                                            src={dekor6}
                                            alt=""
                                            className=" h-[250px] rounded-xl"
                                        />
                                    </div>
                                    <div className="flex justify-center px-5">
                                        <img
                                            src={dekor9}
                                            alt=""
                                            className=" h-[250px] rounded-xl"
                                        />
                                    </div>
                                    <div className="flex justify-center px-5">
                                        <img
                                            src={dekor1}
                                            alt=""
                                            className="h-[250px] rounded-xl"
                                        />
                                    </div>
                                    <div className="flex justify-center px-5">
                                        <img
                                            src={dekor8}
                                            alt=""
                                            className=" h-[250px] rounded-xl"
                                        />
                                    </div>
                                    <div className="flex justify-center px-5">
                                        <img
                                            src={dekor7}
                                            alt=""
                                            className=" h-[250px] rounded-xl"
                                        />
                                    </div>
                                </Carousel>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-200">
                    <div className="container mx-auto py-2 pb-10">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={
                                isScrolled6
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: -20 }
                            }
                            transition={{
                                duration: 0.8,
                            }}
                            className="flex justify-center mb-6 pt-6"
                        >
                            <p className="font-bold lg:text-[43px] h-[32px] text-2xl">
                                Testimoni
                            </p>
                        </motion.div>
                        <div className="pt-7 px-5">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -40 }}
                                    animate={
                                        isScrolled6
                                            ? { opacity: 1, x: 0 }
                                            : { opacity: 0, x: -40 }
                                    }
                                    transition={{
                                        duration: 0.8,
                                    }}
                                    className="box bg-white rounded-xl px-10 pt-10"
                                >
                                    <div className="grid grid-cols-3 px-5">
                                        <div className="box px-2 flex">
                                            <RiDoubleQuotesL className="text-gray-400 text-5xl" />
                                        </div>
                                        <div className="box px-2 pt-2 col-span-2">
                                            <p className="lg:text-2xl text-lg font-semibold">
                                                olivia
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center text-center px-5 p-5">
                                        <p className="lg:text-[20px] text-[14px]">
                                            "Dekorasi siraman kami benar-benar
                                            luar biasa! Tim dekorasi sangat
                                            profesional dan hasilnya melebihi
                                            ekspektasi kami. Terima kasih telah
                                            membuat momen spesial kami semakin
                                            berkesan!"
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={
                                        isScrolled6
                                            ? { opacity: 1, scale: 1 }
                                            : { opacity: 0, scale: 0 }
                                    }
                                    transition={{
                                        duration: 0.8,
                                    }}
                                    className="box bg-white rounded-xl px-10 pt-10"
                                >
                                    <div className="grid grid-cols-3 px-5">
                                        <div className="box px-2 flex">
                                            <RiDoubleQuotesL className="text-gray-400 text-5xl" />
                                        </div>
                                        <div className="box px-2 pt-2 col-span-2">
                                            <p className="lg:text-2xl text-lg font-semibold">
                                                olivia
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center text-center px-5 p-5">
                                        <p className="lg:text-[20px] text-[14px]">
                                            "Jasa dekorasi siraman ini sangat
                                            memperhatikan detail. Setiap bunga
                                            dan aksesori dipilih dengan cermat,
                                            dan hasilnya luar biasa. Sangat
                                            puas!"
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={
                                        isScrolled6
                                            ? { opacity: 1, x: 0 }
                                            : { opacity: 0, x: 40 }
                                    }
                                    transition={{
                                        duration: 0.8,
                                    }}
                                    className="box bg-white rounded-xl px-10 pt-10"
                                >
                                    <div className="grid grid-cols-3 px-5">
                                        <div className="box px-2 flex">
                                            <RiDoubleQuotesL className="text-gray-400 text-5xl" />
                                        </div>
                                        <div className="box px-2 pt-2 col-span-2">
                                            <p className="lg:text-2xl text-lg font-semibold">
                                                olivia
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center text-center px-5 p-5">
                                        <p className="lg:text-[20px] text-[14px]">
                                            "Setiap detail dalam dekorasi gedung
                                            kami sangat diperhatikan. Bunga,
                                            lampu, dan semua aksesori membuat
                                            acara kami terasa istimewa. Terima
                                            kasih banyak!"
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Home;

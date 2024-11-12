import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layout";
import dekor from "@/Assets/dekor.jpg";
import home from "@/Assets/home.jpeg";
import siraman from "@/Assets/siraman.jpeg";
import tuwuhan from "@/Assets/tuwuhan.jpeg";
import janur from "@/Assets/janur.jpg";
import rajut from "@/Assets/rajut.jpg";
import rias from "@/Assets/rias.jpg";
import mc from "@/Assets/mc.jpeg";
import { SiGooglemaps, SiGmail, SiWhatsapp, SiInstagram } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineGlobal, AiOutlineCopyright } from "react-icons/ai";
import { motion } from "framer-motion";

const Product = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolled2, setIsScrolled2] = useState(false);
    const [isScrolled7, setIsScrolled7] = useState(false);
    const [isScrolled8, setIsScrolled8] = useState(false);
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
        if (window.scrollY > 400) {
            setIsScrolled2(true);
        } else {
            // setIsScrolled(false);
        }
    };
    const handleScroll7 = () => {
        // Memeriksa apakah sudah menggulir ke bawah
        if (window.scrollY > 600) {
            setIsScrolled7(true);
        } else {
            setIsScrolled7(false);
        }
    };
    const handleScroll8 = () => {
        // Memeriksa apakah sudah menggulir ke bawah
        if (window.scrollY > 800) {
            setIsScrolled8(true);
        } else {
            setIsScrolled8(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScroll2);
        window.addEventListener("scroll", handleScroll7);
        window.addEventListener("scroll", handleScroll8);
    }, []);

    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };
    return (
        <Layout>
            <div className="product mb-10">
                <div className="pt-24">
                    <div
                        className="lg:h-[300px] h-[250px] w-full bg-center bg-inherit"
                        style={{
                            backgroundImage: `url(${dekor})`,
                            backgroundSize: `2000px`,
                        }}
                    ></div>
                </div>
                <div className="container mx-auto py-2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        className="flex justify-center pt-10"
                    >
                        <p className="lg:text-[35px] text-[25px]  font-bold">
                            Layanan Kami
                        </p>
                    </motion.div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-5 px-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="box bg-gray-100 rounded-2xl"
                        >
                            <div className="flex justify-center pt-10">
                                <img
                                    src={home}
                                    alt=""
                                    className="h-[150px] rounded-lg"
                                />
                            </div>
                            <div className="flex justify-center pt-5  font-bold mb-10">
                                <p>Dekorasi Bunga Gedung</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="box bg-gray-100 rounded-2xl"
                        >
                            <div className="flex justify-center pt-10">
                                <img
                                    src={siraman}
                                    alt=""
                                    className="h-[150px] rounded-lg"
                                />
                            </div>
                            <div className="flex justify-center pt-5  font-bold mb-10">
                                <p>Dekorasi Bunga Siraman</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="box bg-gray-100 rounded-2xl"
                        >
                            <div className="flex justify-center pt-10">
                                <img
                                    src={janur}
                                    alt=""
                                    className="h-[150px] rounded-lg"
                                />
                            </div>
                            <div className="flex justify-center pt-5  font-bold mb-10">
                                <p>Berbagai Anyaman Janur</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={
                                isScrolled
                                    ? { opacity: 1, scale: 1 }
                                    : { opacity: 0, scale: 0 }
                            }
                            transition={{
                                duration: 1,
                            }}
                            className="box bg-gray-100 rounded-2xl"
                        >
                            <div className="flex justify-center pt-10">
                                <img
                                    src={tuwuhan}
                                    alt=""
                                    className="h-[150px] rounded-lg"
                                />
                            </div>
                            <div className="flex justify-center pt-5  font-bold mb-10">
                                <p>Tuwuhan</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={
                                isScrolled
                                    ? { opacity: 1, scale: 1 }
                                    : { opacity: 0, scale: 0 }
                            }
                            transition={{
                                duration: 1,
                            }}
                            className="box bg-gray-100 rounded-2xl"
                        >
                            <div className="flex justify-center pt-10">
                                <img
                                    src={rajut}
                                    alt=""
                                    className="h-[150px] rounded-lg"
                                />
                            </div>
                            <div className="flex justify-center pt-5  font-bold mb-10">
                                <p>Rajut Melati</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={
                                isScrolled
                                    ? { opacity: 1, scale: 1 }
                                    : { opacity: 0, scale: 0 }
                            }
                            transition={{
                                duration: 1,
                            }}
                            className="box bg-gray-100 rounded-2xl"
                        >
                            <div className="flex justify-center pt-10">
                                <img
                                    src={rias}
                                    alt=""
                                    className="h-[150px] rounded-lg"
                                />
                            </div>
                            <div className="flex justify-center pt-5  font-bold mb-10">
                                <p>Rias Busana</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={
                                isScrolled2
                                    ? { opacity: 1, scale: 1 }
                                    : { opacity: 0, scale: 0 }
                            }
                            transition={{
                                duration: 1,
                            }}
                            className="box bg-gray-100 rounded-2xl"
                        >
                            <div className="flex justify-center pt-10">
                                <img
                                    src={mc}
                                    alt=""
                                    className="h-[150px] rounded-lg"
                                />
                            </div>
                            <div className="flex justify-center pt-5  font-bold mb-10">
                                <p>MC dan Pemandu</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className="bg-gray-500 ">
                <div className="container mx-auto py-2">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-14 px-5">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={
                                isScrolled7
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: 50 }
                            }
                            transition={{ duration: 0.5 }}
                            className="box"
                        >
                            <span className="font-bold text-white lg:text-2xl text-xl px-10">
                                Cahaya Abadi
                            </span>
                            <p className="text-white lg:text-lg md:text-md  text-sm px-10 mt-5">
                                Kami melayani pesanan anyaman Janur, Dekorasi
                                Bunga Siraman / Wedding, Tuwuhan, Rajut Melati
                                CPW, Rias Busana , MC & Pemandu dan berbagai
                                macam kebutuhan wedding.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={
                                isScrolled7
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: 50 }
                            }
                            transition={{ duration: 2, times: [0.2, 1] }}
                            className=" box  text-white lg:text-lg md:text-md text-sm px-10 "
                        >
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
                                www.cahayaabadi.com
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={
                                isScrolled7
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: 50 }
                            }
                            transition={{ duration: 2, times: [0.6, 1] }}
                            className="box  text-white lg:text-lg md:text-md text-sm px-10 mb-5"
                        >
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
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="footer bg-gray-600 ">
                <div className="container mx-auto py-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            isScrolled8
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 1 }}
                        className="flex justify-center pt-5 px-5"
                    >
                        <p className="flex  text-white px-5 lg:text-lg md:text-md text-[12px]">
                            <AiOutlineCopyright className="lg:h-6 h-4 text-lg" />
                            2024 cahayaabadi.com. All rights reserved.
                        </p>
                        {/* <div className="flex gap-4 text-white px-5 lg:text-lg md:text-md text-[12px]">
                            <SiInstagram />
                            <FaFacebookF />
                            <FaYoutube />
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default Product;

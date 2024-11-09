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
import { motion } from "framer-motion";

const Product = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolled2, setIsScrolled2] = useState(false);
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
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScroll2);
    }, []);

    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };
    return (
        <Layout>
            <div className="product">
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
        </Layout>
    );
};

export default Product;

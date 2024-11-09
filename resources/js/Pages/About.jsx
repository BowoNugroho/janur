import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layout";
import wal from "@/Assets/wal.jpg";
import office from "@/Assets/office.jpg";
import { TbMathGreater } from "react-icons/tb";
import { SiGooglemaps, SiGmail, SiWhatsapp, SiInstagram } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineGlobal, AiOutlineCopyright } from "react-icons/ai";
import { motion } from "framer-motion";

const About = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolled7, setIsScrolled7] = useState(false);
    const [isScrolled8, setIsScrolled8] = useState(false);

    const handleScroll = () => {
        // Memeriksa apakah sudah menggulir ke bawah
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            // setIsScrolled(false);
        }
    };
    const handleScroll7 = () => {
        // Memeriksa apakah sudah menggulir ke bawah
        if (window.scrollY > 200) {
            setIsScrolled7(true);
        } else {
            setIsScrolled7(false);
        }
    };
    const handleScroll8 = () => {
        // Memeriksa apakah sudah menggulir ke bawah
        if (window.scrollY > 250) {
            setIsScrolled8(true);
        } else {
            setIsScrolled8(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScroll7);
        window.addEventListener("scroll", handleScroll8);
    }, []);

    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };
    const variants2 = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    const variants3 = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    return (
        <Layout>
            <div className="about mb-10">
                <div className="pt-24">
                    <div
                        className="h-[200px]   w-full bg-center"
                        style={{
                            backgroundImage: `url(${wal})`,
                            backgroundSize: `2000px`,
                        }}
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        >
                            <span className="flex justify-center pt-10 text-white font-bold lg:text-[45px] md:text-[35px] text-[25px]">
                                Tentang Kami
                            </span>
                            <p className="flex justify-center text-white lg:text-[16px] md:text-[14px] text-sm">
                                home <TbMathGreater className="h-6" />
                                <span className="underline">tentang kami</span>
                            </p>
                        </motion.div>
                    </div>
                </div>
                <div className="container mx-auto py-2">
                    <div className="grid lg:grid-cols-2  grid-cols-1  gap-4 pt-14 px-5">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants2}
                            className="box lg:order-1 order-2"
                        >
                            <h1 className="lg:text-2xl md:text-lg text-sm font-bold mb-4">
                                Tentang Kami
                            </h1>
                            <p className="mb-4 leading-8 lg:text-[16px] md:text-[14px] text-sm">
                                Kami adalah tim profesional yang berdedikasi
                                dalam bidang dekorasi acara, termasuk siraman,
                                pernikahan, rias wajah, dan anyaman janur.
                                Dengan pengalaman bertahun-tahun, kami memahami
                                betapa pentingnya setiap detail dalam
                                menciptakan suasana yang memukau dan berkesan.
                            </p>
                            <p className=" leading-8 lg:text-[16px] md:text-[14px] text-sm">
                                Kami percaya bahwa setiap acara adalah unik, dan
                                kami berkomitmen untuk menghadirkan desain yang
                                sesuai dengan keinginan dan tema acara Anda. Tim
                                kami terdiri dari ahli dekorasi, perias, dan
                                pengrajin janur yang memiliki passion tinggi
                                dalam seni dan budaya, siap membantu mewujudkan
                                impian Anda.
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants3}
                            className="box lg:order-2 order-1"
                        >
                            <img
                                src={office}
                                alt=""
                                className="rounded-3xl lg:h-[400px] md:h-[300px] h-[250px]"
                            />
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
                                Ridwan Janur
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
                                www.ridwanjanur.com
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
                            2024 ridwanjanur.com. All rights reserved.
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

export default About;

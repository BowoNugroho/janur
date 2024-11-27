import React, { useState, useEffect } from "react";
import Layout from "../Layouts/Layout";
import kontak from "@/Assets/kontak.jpg";
import { SiGooglemaps, SiGmail, SiWhatsapp } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { AiOutlineCopyright } from "react-icons/ai";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Contact = () => {
    // const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [isScrolled7, setIsScrolled7] = useState(false);
    const [isScrolled8, setIsScrolled8] = useState(false);

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
        window.addEventListener("scroll", handleScroll7);
        window.addEventListener("scroll", handleScroll8);
    }, []);

    // Fungsi untuk mengirim pesan
    const sendMessage = (e) => {
        e.preventDefault();
        if (!message) {
            Swal.fire("Dibatalkan", "pesan harus diisi!.", "info");
            return;
        }
        const phone = "6281393730949";
        const message2 = " \n (Referensi website https://cahayaabadi.com/)"; // Pesan default
        // Membuat URL WhatsApp
        const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
            message + message2
        )}`;

        // Mengarahkan ke URL WhatsApp
        window.open(whatsappURL, "_blank");
    };

    const containerStyle = {
        width: "100%",
        height: "300px",
    };

    const center = {
        lat: -6.216505,
        lng: 106.864459,
    };

    const variants = {
        hidden: { opacity: 0, y: -30 },
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
    const variants4 = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };
    return (
        <Layout>
            <div className="contact mb-10">
                <div className="pt-24">
                    <div
                        className="lg:h-[350px] h-[250px] w-full bg-center bg-inherit"
                        style={{
                            backgroundImage: `url(${kontak})`,
                            backgroundSize: `1900px`,
                        }}
                    ></div>
                </div>
                <div className="container mx-auto py-2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        className="pt-10"
                    >
                        <div className="flex justify-center">
                            <p className="lg:text-[35px] text-[25px]  font-bold">
                                Kontak Kami
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <p>- - - - - -</p>
                        </div>
                    </motion.div>
                    <div className="grid lg:grid-cols-3  grid-cols-1 gap-4 pt-5 px-5">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants2}
                            className="box flex lg:justify-end justify-center"
                        >
                            <div>
                                <p className="font-bold">Ridwan Janur</p>
                                <table>
                                    <tr>
                                        <td className="w-10 h-20">
                                            <SiGooglemaps className="mr-3 text-xl" />
                                        </td>
                                        <td className="w-[250px]">
                                            Jln pintu pasar barat losjanur no 8
                                            balimester jatinegara 13310
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <BsTelephoneFill className="mr-3 h-6 text-md" />
                                        </td>
                                        <td>0813 9373 0949</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <SiGmail className="mr-3 h-6 text-md" />
                                        </td>
                                        <td>ridwanjanur@gmail.com</td>
                                    </tr>
                                </table>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants3}
                            className="box lg:col-span-2"
                        >
                            <h2 className="mb-5">Form Kirim Pesan WhatsApp</h2>
                            <form onSubmit={sendMessage}>
                                <div className="mb-5  w-[600px]">
                                    <textarea
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="message"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        placeholder="Masukkan pesan Anda"
                                    />
                                </div>
                                <button
                                    className=" flex justify-center px-3 lg:px-8 py-2 w-28 shadow bg-green-400 outline-none text-center text-white lg:text-sm text-[12px] hover:bg-gray-300 rounded-full"
                                    type="submit"
                                >
                                    {/* <BiSolidPaperPlane /> */}
                                    Kirim
                                </button>
                            </form>
                        </motion.div>
                    </div>
                    <div className="pt-24 px-5">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants4}
                            className="box lg:col-span-2 flex justify-center"
                        >
                            <div className=" w-[600px]">
                                <LoadScript googleMapsApiKey="AIzaSyCu93gVURWzaBcLl42_e0Zg5eN6EznqEks">
                                    <GoogleMap
                                        mapContainerStyle={containerStyle}
                                        center={center}
                                        zoom={11}
                                    >
                                        <Marker position={center} />
                                    </GoogleMap>
                                </LoadScript>
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

export default Contact;

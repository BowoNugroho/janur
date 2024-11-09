import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import kontak from "@/Assets/kontak.jpg";
import { SiGooglemaps, SiGmail, SiWhatsapp } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Contact = () => {
    // const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    // Fungsi untuk mengirim pesan
    const sendMessage = (e) => {
        e.preventDefault();
        if (!message) {
            Swal.fire("Dibatalkan", "pesan harus diisi!.", "info");
            return;
        }
        const phone = "628156715273";
        // Membuat URL WhatsApp
        const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
            message
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
            <div className="contact">
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
        </Layout>
    );
};

export default Contact;

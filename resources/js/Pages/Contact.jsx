import React from "react";
import Layout from "../Layouts/Layout";
import kontak from "@/Assets/kontak.jpg";
import { SiGooglemaps, SiGmail, SiWhatsapp } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Contact = () => {
    const containerStyle = {
        width: "100%",
        height: "300px",
    };

    const center = {
        lat: -6.216505,
        lng: 106.864459,
    };
    return (
        <Layout>
            <div className="contact">
                <div className="pt-24">
                    <div
                        className="h-[400px] w-full bg-center bg-inherit"
                        style={{
                            backgroundImage: `url(${kontak})`,
                            backgroundSize: `1900px`,
                        }}
                    ></div>
                </div>
                <div className="container mx-auto py-2">
                    <div className="pt-10">
                        <div className="flex justify-center">
                            <p className="lg:text-[35px] text-[25px]  font-bold">
                                Kontak Kami
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <p>- - - - - -</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-5 px-5">
                        <div className="box flex justify-end">
                            <div>
                                <p>Ridwan Janur</p>
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
                        </div>
                        <div className="box col-span-2">
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
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;

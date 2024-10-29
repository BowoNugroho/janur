import React from "react";
import Layout from "../Layouts/Layout";
import dekor from "@/Assets/dekor.jpg";
import home from "@/Assets/home.jpeg";
import siraman from "@/Assets/siraman.jpeg";
import tuwuhan from "@/Assets/tuwuhan.jpeg";
import janur from "@/Assets/janur.jpg";
import rajut from "@/Assets/rajut.jpg";
import rias from "@/Assets/rias.jpg";
import mc from "@/Assets/mc.jpeg";

const Product = () => {
    return (
        <Layout>
            <div className="product">
                <div className="pt-24">
                    <div
                        className="h-[400px] w-full bg-center bg-inherit"
                        style={{
                            backgroundImage: `url(${dekor})`,
                            backgroundSize: `2000px`,
                        }}
                    ></div>
                </div>
                <div className="container mx-auto py-2">
                    <div className="flex justify-center pt-10">
                        <p className="lg:text-[35px] text-[25px]  font-bold">
                            Layanan Kami
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-5 px-5">
                        <div className="box bg-gray-100 rounded-2xl">
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
                        </div>
                        <div className="box bg-gray-100 rounded-2xl">
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
                        </div>
                        <div className="box bg-gray-100 rounded-2xl">
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
                        </div>
                        <div className="box bg-gray-100 rounded-2xl">
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
                        </div>
                        <div className="box bg-gray-100 rounded-2xl">
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
                        </div>
                        <div className="box bg-gray-100 rounded-2xl">
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
                        </div>
                        <div className="box bg-gray-100 rounded-2xl">
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
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Product;

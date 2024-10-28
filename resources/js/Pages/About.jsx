import React from "react";
import Layout from "../Layouts/Layout";
import wal from "@/Assets/wal.jpg";
import office from "@/Assets/office.jpg";

const About = () => {
    return (
        <Layout>
            <div className="about ">
                <div className="pt-32">
                    <div
                        className="h-[200px] w-full bg-center"
                        style={{
                            backgroundImage: `url(${wal})`,
                            backgroundSize: `2000px`,
                        }}
                    >
                        <span className="flex justify-center pt-10 text-white font-bold text-[45px]">
                            Tentang Kami
                        </span>
                        <p className="flex justify-center text-white">
                            home >
                            <span className="underline">tentang kami</span>
                        </p>
                    </div>
                </div>
                <div className="container mx-auto py-2">
                    <div className="grid grid-cols-2 gap-4 pt-14 px-5">
                        <div className="box">
                            <h1 className="text-2xl font-bold mb-4">
                                Tentang Kami
                            </h1>
                            <p className="mb-4 leading-8">
                                Kami adalah tim profesional yang berdedikasi
                                dalam bidang dekorasi acara, termasuk siraman,
                                pernikahan, rias wajah, dan anyaman janur.
                                Dengan pengalaman bertahun-tahun, kami memahami
                                betapa pentingnya setiap detail dalam
                                menciptakan suasana yang memukau dan berkesan.
                            </p>
                            <p className=" leading-8">
                                Kami percaya bahwa setiap acara adalah unik, dan
                                kami berkomitmen untuk menghadirkan desain yang
                                sesuai dengan keinginan dan tema acara Anda. Tim
                                kami terdiri dari ahli dekorasi, perias, dan
                                pengrajin janur yang memiliki passion tinggi
                                dalam seni dan budaya, siap membantu mewujudkan
                                impian Anda.
                            </p>
                        </div>
                        <div className="box ">
                            <img
                                src={office}
                                alt=""
                                className="rounded-3xl h-[400px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;

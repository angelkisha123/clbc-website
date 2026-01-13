"use client";

import {
    EyeIcon,
    HeartIcon,
    HomeIcon,
    SparklesIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="relative bg-[url('/images/img1.jpg')] bg-cover bg-center bg-fixed min-h-screen flex flex-col justify-center items-center text-white">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

                <header
                    className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
                        isScrolled
                            ? "bg-slate-900 shadow-lg"
                            : "bg-slate-900/70 backdrop-blur-sm"
                    } py-3 px-5 flex flex-col md:flex-row items-center justify-between`}
                >
                    <a
                        href="#"
                        className="flex items-center gap-1 group transition-all duration-500 ease-in-out"
                    >
                        <HomeIcon className="w-8 h-8 text-white transition-all duration-500 ease-in-out group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                        <div
                            className="text-4xl font-bold tracking-wider text-white transition-all duration-500 ease-in-out
                            group-hover:text-transparent group-hover:bg-clip-text
                            group-hover:bg-gradient-to-r group-hover:from-cyan-400
                            group-hover:via-purple-400 group-hover:to-pink-400"
                        >
                            CLBC
                        </div>
                    </a>

                    <nav className="flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-center mt-2 md:mt-0 font-semibold text-sm md:text-base">
                        <a
                            href="#"
                            className="hover:text-pink-400 transition-colors"
                        >
                            HOME
                        </a>
                        <a
                            href="#about"
                            className="hover:text-pink-400 transition-colors"
                        >
                            ABOUT US
                        </a>
                        <a
                            href="#ministry"
                            className="hover:text-pink-400 transition-colors"
                        >
                            MINISTRIES
                        </a>
                        <a
                            href="#event"
                            className="hover:text-pink-400 transition-colors"
                        >
                            EVENTS
                        </a>
                        <a
                            href="#giving"
                            className="hover:text-pink-400 transition-colors"
                        >
                            GIVING
                        </a>
                    </nav>
                </header>

                <main className="relative z-10 text-center px-6 mt-32" id="hero">
                    <h1 className="font-playlist text-[60px] sm:text-[90px] md:text-[130px] lg:text-[150px] drop-shadow-lg animate-pulse-slow">
                        Welcome
                    </h1>
                    <p className="text-gray-200 max-w-2xl mx-auto text-lg sm:text-xl mt-4 leading-relaxed">
                        Experience faith, community, and the presence of God at{" "}
                        <br />{" "}
                        <span className="text-pink-400 font-semibold">
                            City Life Building Church
                        </span>
                    </p>

                    <a
                        href="#about"
                        className="inline-block mt-8 px-8 py-3 bg-pink-500 hover:bg-pink-400 text-white font-semibold rounded-full shadow-md transition-all duration-300"
                    >
                        Join Us This Sunday
                    </a>
                </main>
            </div>

            <section
                id="about"
                className=" text-white bg-slate-900 py-20 px-8 md:px-20"
            >
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
                        About Us
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed mb-10">
                        City Life Building Church (CLBC) is a Christ-centered
                        community where people from all walks of life can
                        encounter the love and truth of Jesus. We exist to build
                        lives, strengthen families, and impact our city through
                        faith, hope, and love.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10 mt-10 text-left">
                        <div>
                            <img
                                src="images/mission.jpg"
                                alt="mission image"
                                className="w-auto object-cover object-center h-[250px]"
                            />
                            <div className="flex items-center gap-3 py-2">
                                <HeartIcon className="h-14 w-14 text-pink-500" />
                                <h3 className="text-2xl font-semibold ">
                                    Our Mission
                                </h3>
                            </div>
                            <p className=" leading-relaxed">
                                To bring people closer to Christ and help them
                                grow in faith through worship, discipleship, and
                                community service.
                            </p>
                        </div>

                        <div>
                            <img
                                src="images/vision.jpg"
                                className="w-auto object-cover object-center h-[250px]"
                                alt="vision image"
                            />
                            <div className="flex items-center gap-3 py-2">
                                <EyeIcon className="h-14 w-14 text-blue-500" />
                                <h3 className="text-2xl font-semibold ">
                                    Our Vision
                                </h3>
                            </div>
                            <p className=" leading-relaxed">
                                To see a generation transformed by God’s Word —
                                empowered to make a difference in their homes,
                                workplaces, and the world.
                            </p>
                        </div>

                        <div>
                            <img
                                src="images/value.jpg"
                                alt="value image"
                                className="w-auto object-cover object-center h-[250px]"
                            />
                            <div className="flex items-center gap-3 py-2">
                                <SparklesIcon className="h-14 w-14 text-yellow-500" />
                                <h3 className="text-2xl font-semibold ">
                                    Our Values
                                </h3>
                            </div>
                            <p className=" leading-relaxed">
                                We value faith, family, excellence, integrity,
                                and compassion — building a community where
                                everyone belongs and grows together in Christ.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="ministry"
                className="relative bg-slate-900 text-white py-20 px-6 md:px-16 overflow-hidden"
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-5xl font-extrabold mb-16 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_#ff00aa]">
                        Our Ministries
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                        {[
                            {
                                name: "Youth Ministry",
                                images: [
                                    "images/mission.jpg",
                                    "images/vision.jpg",
                                    "images/value.jpg",
                                ],
                            },
                            {
                                name: "Kids Ministry",
                                images: [
                                    "images/mission.jpg",
                                    "images/vision.jpg",
                                    "images/value.jpg",
                                ],
                            },
                            {
                                name: "Worship Team",
                                images: [
                                    "images/mission.jpg",
                                    "images/vision.jpg",
                                    "images/value.jpg",
                                ],
                            },
                        ].map((ministry, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center group"
                            >
                                <div className="relative w-64 h-80">
                                    {ministry.images.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`${ministry.name} ${
                                                index + 1
                                            }`}
                                            className={`
                  absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-lg transition-all duration-500 ease-out
                  ${index === 0 ? "translate-x-0 rotate-[-4deg] z-10" : ""}
                  ${index === 1 ? "translate-x-6 rotate-[2deg] z-20" : ""}
                  ${index === 2 ? "translate-x-12 rotate-[5deg] z-30" : ""}
                  hover:z-50 hover:scale-110
                `}
                                        />
                                    ))}
                                </div>

                                <h3 className="mt-6 text-2xl font-semibold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_#ff66cc]">
                                    {ministry.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="osk"
                className="relative py-24 px-8 md:px-20 text-center text-white overflow-hidden"
            >
                {/* Cyberpunk grid background */}
                <div className="absolute inset-0 bg-black">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                </div>

                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-purple-900/40 to-pink-900/40"></div>

                {/* Neon glow effects */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]"></div>

                {/* Scanline effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.03)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

                {/* Content */}
                <div className="relative max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide drop-shadow-[0_0_20px_rgba(0,255,255,0.5)] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                        Oras Sa Kaayohan (OSK)
                    </h2>
                    <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed text-gray-200">
                        A weekly life-changing series that brings hope, faith,
                        and encouragement through powerful messages and
                        real-life testimonies. Be inspired and strengthened in
                        your walk with God as we share stories of transformation
                        and purpose every week.
                    </p>

                    <p className="text-base md:text-lg mb-10 opacity-80 italic text-cyan-300">
                        "Be transformed by the renewing of your mind." — Romans
                        12:2
                    </p>

                    <button
                        onClick={() => (window.location.href = "/osk")}
                        className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-black font-bold px-8 py-3 rounded-full shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:shadow-[0_0_60px_rgba(255,0,255,0.8)] transition-all duration-300 border border-cyan-400/50"
                    >
                        View All Episodes
                    </button>
                </div>
            </section>

            {/* 💫 PROGRAMS & COUNSELING SECTION */}
            <section
                id="program"
                className="relative bg-[url('/resources/images/event.jpg')] bg-cover bg-right-top bg-fixed text-white py-24 px-6 md:px-16 overflow-hidden"
            >
                <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1px]"></div>
                {/* Subtle background effects */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"></div>

                <div className="relative text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
                        Programs & Counseling
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Guiding individuals and families in faith, love, and
                        purpose.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            name: "One2One Program",
                            icon: "🙏",
                            description:
                                "Personal discipleship and mentorship journey, walking alongside you in faith and spiritual growth.",
                            accentColor: "cyan",
                        },
                        {
                            name: "Lovers Counseling",
                            icon: "💕",
                            description:
                                "Pre-marital guidance rooted in biblical principles, preparing couples for a Christ-centered relationship.",
                            accentColor: "pink",
                        },
                        {
                            name: "Couples Counseling",
                            icon: "💑",
                            description:
                                "Strengthening marriages through faith-based counseling, communication, and mutual understanding in Christ.",
                            accentColor: "purple",
                        },
                        {
                            name: "Faith Seminars",
                            icon: "📖",
                            description:
                                "Enriching teaching sessions focused on deepening your understanding of God's Word and purpose.",
                            accentColor: "cyan",
                        },
                    ].map((program, i) => (
                        <div
                            key={i}
                            className="group relative bg-slate-900/60 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all duration-300"
                        >
                            {/* Top accent line */}
                            <div
                                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                                    program.accentColor === "cyan"
                                        ? "from-cyan-400 to-purple-400"
                                        : program.accentColor === "pink"
                                        ? "from-pink-400 to-purple-400"
                                        : "from-purple-400 to-pink-400"
                                } rounded-t-2xl`}
                            ></div>

                            <div className="relative">
                                {/* Icon with glow */}
                                <div className="mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.2)] text-3xl">
                                        {program.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                                    {program.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {program.description}
                                </p>

                                {/* Learn more link */}
                                <div className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/link">
                                    <span className="text-sm font-medium">
                                        Learn More
                                    </span>
                                    <svg
                                        className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Subtle corner accent */}
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400/20 rounded-br-lg"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom decorative element */}
                <div className="relative mt-20 max-w-3xl mx-auto">
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                    </div>
                </div>
            </section>

            {/* 🌌 EVENTS SECTION */}
            <section
                id="event"
                className="relative bg-gradient-to-b from-black via-slate-950 to-black text-white py-24 px-6 md:px-16 overflow-hidden"
            >
                {/* Subtle grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                {/* Soft glow effects */}
                <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]"></div>

                <div className="relative text-center mb-16 z-10">
                    <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4">
                        Upcoming Events
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Be part of life-changing events that strengthen faith
                        and build community.
                    </p>
                </div>

                {/* Timeline-style layout */}
                <div className="relative max-w-4xl mx-auto z-10">
                    {/* Center vertical line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-purple-400/50 to-pink-400/50 hidden md:block"></div>

                    <div className="space-y-12">
                        {[
                            {
                                name: "Youth Events",
                                desc: "Empowering the next generation through worship, fellowship, and discipleship activities.",
                                icon: "🙏",
                            },
                            {
                                name: "Kids Feeding Program",
                                desc: "Sharing God's love through nourishing meals and care for children in our community.",
                                icon: "🍞",
                            },
                            {
                                name: "Kids Gift Giving",
                                desc: "Bringing joy and hope to children by sharing blessings and celebrating God's generosity.",
                                icon: "🎁",
                            },
                            {
                                name: "Youth Camp",
                                desc: "A transformative retreat experience focused on spiritual growth and building lasting friendships.",
                                icon: "⛺",
                            },
                            {
                                name: "Family Camp",
                                desc: "Strengthening family bonds through worship, teaching, and quality time together in God's presence.",
                                icon: "👨‍👩‍👧‍👦",
                            },
                            {
                                name: "Church Anniversary",
                                desc: "Celebrating God's faithfulness and the journey of our church community throughout the years.",
                                icon: "🎉",
                            },
                        ].map((event, i) => (
                            <div
                                key={i}
                                className={`relative flex items-center gap-8 ${
                                    i % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                }`}
                            >
                                {/* Content */}
                                <div
                                    className={`flex-1 ${
                                        i % 2 === 0
                                            ? "md:text-right"
                                            : "md:text-left"
                                    }`}
                                >
                                    <div className="bg-slate-900/60 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all duration-300">
                                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-3">
                                            {event.name}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {event.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Center icon with glow */}
                                <div className="hidden md:block flex-shrink-0 relative">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-2xl shadow-[0_0_30px_rgba(0,255,255,0.4)] border-4 border-slate-950">
                                        {event.icon}
                                    </div>
                                    {/* Connecting line dot */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="flex-1 hidden md:block"></div>

                                {/* Mobile icon */}
                                <div className="md:hidden flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-xl shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                                        {event.icon}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative bottom element */}
                <div className="relative mt-20 max-w-3xl mx-auto">
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                    </div>
                </div>
            </section>

            {/* GIVING SECTION */}
            <section
                id="giving"
                className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
            >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-[url('/giving-bg.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Background Glows */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 blur-3xl animate-pulse delay-700"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
                    {/* Title */}
                    <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_#ff00aa]">
                        Giving
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
                        Your generosity helps us continue building lives,
                        serving our community, and sharing God’s love through{" "}
                        <span className="text-pink-400 font-semibold">
                            City Life Building Church
                        </span>
                        .
                    </p>

                    {/* Giving Options */}
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Tithes",
                                description:
                                    "A faithful act of worship that honors God and supports the ministry of the church.",
                                image: "images/tithe.jpeg",
                            },
                            {
                                title: "Offerings",
                                description:
                                    "Freewill gifts that empower outreach, missions, and church growth.",
                                image: "images/offering.jpg",
                            },
                            {
                                title: "Donations",
                                description:
                                    "Extend love beyond the church walls — support community programs and special causes.",
                                image: "images/donation.avif",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative bg-white/10 border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                <div className="p-6 text-center">
                                    <h3 className="text-2xl font-semibold mb-3 text-white drop-shadow-[0_0_10px_#ff66cc]">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 mb-6">
                                        {item.description}
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full font-semibold text-white shadow-md hover:from-cyan-400 hover:to-pink-500 transition-all duration-300"
                                    >
                                        Give Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="mt-16 text-gray-400 text-sm max-w-2xl mx-auto">
                        <p>
                            Prefer giving in person? You can also give through{" "}
                            <span className="text-pink-400 font-semibold">
                                GCash, PayPal, or Bank Transfer
                            </span>
                            . For more details, please contact our finance team
                            or visit our church office.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

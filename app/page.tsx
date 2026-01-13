"use client";

import {
  EyeIcon,
  HeartIcon,
  HomeIcon,
  SparklesIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(" ");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showExpect, setShowExpect] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const getNextSundayPH = () => {
      const now = new Date();

      // Convert current time to PH time (UTC+8)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const phNow = new Date(utc + 8 * 60 * 60000);

      // Find next Sunday
      const daysUntilSunday = (7 - phNow.getDay()) % 7;
      phNow.setDate(phNow.getDate() + daysUntilSunday);

      // Set to 3:00 PM PH time
      phNow.setHours(15, 0, 0, 0);

      return phNow;
    };

    const target = getNextSundayPH();

    const timer = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("Happening Now!");
        clearInterval(timer);
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`${d}d ${h}h ${m}m`);
    }, 1000);

    return () => clearInterval(timer);
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
            className="flex items-center gap-2 group transition-all duration-500 ease-in-out"
          >
            <img
              src="images/logo.png"
              alt="CLBC Logo"
              width={70}
              height={55}
              className="transition-all duration-100 ease-in-out
               group-hover:scale-105
               group-hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.9)]"
            />
          </a>

          <nav className="flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-center mt-2 md:mt-0 font-semibold text-sm md:text-base">
            <a href="#" className="hover:text-pink-400 transition-colors">
              HOME
            </a>
            <a href="#about" className="hover:text-pink-400 transition-colors">
              ABOUT US
            </a>
            <a
              href="#ministry"
              className="hover:text-pink-400 transition-colors"
            >
              MINISTRIES
            </a>
            <a href="#event" className="hover:text-pink-400 transition-colors">
              EVENTS
            </a>
            <a href="#giving" className="hover:text-pink-400 transition-colors">
              GIVING
            </a>
          </nav>
        </header>

        <main className="relative z-10 text-center px-6" id="hero">
          <h1 className="font-playlist text-[60px] sm:text-[90px] md:text-[130px] lg:text-[150px] drop-shadow-lg animate-pulse-slow">
            Welcome
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg sm:text-xl mt-4 leading-relaxed">
            Experience faith, community, and the presence of God at <br />{" "}
            <span className="text-pink-400 font-semibold">
              City Life Building Church
            </span>
          </p>

          <a
            href="#join-us"
            className="inline-block mt-8 px-8 py-3 bg-pink-500 hover:bg-pink-400 text-white font-semibold rounded-full shadow-md transition-all duration-300"
          >
            There’s a Place for You Here
          </a>
        </main>
      </div>
      <section
        id="about"
        className=" text-white bg-slate-900 py-20 px-8 md:px-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ">About Us</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-10">
            City Life Building Church (CLBC) is a Christ-centered community
            where people from all walks of life can encounter the love and truth
            of Jesus. We exist to build lives, strengthen families, and impact
            our city through faith, hope, and love.
          </p>

          <div className="grid md:grid-cols-1 gap-10 mt-10 text-left">
            <div>
              <img
                src="images/clbc.jpg"
                className="w-full object-cover object-center h-[350px] rounded-xl"
                alt="vision image"
              />
              <div className="flex items-center justify-center py-2">
                <h3 className="text-2xl font-semibold text-center">Vision</h3>
              </div>
              <p className=" leading-relaxed text-center">
                Connecting and Empoweing individual talents driven by God's love
                to become a good witness in the family, community, and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="join-us"
        className="relative isolate text-white py-24 px-6 md:px-20 overflow-hidden bg-[url('/images/orbs.jpg')] bg-cover bg-center"
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/70 z-0" />
        <p className="mb-8 text-xl text-cyan-300 font-semibold drop-shadow w-full text-center">
          Next Service Starts In:{" "}
          <span className="text-pink-400">{timeLeft}</span>
        </p>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]">
            Join Us This Sunday
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
            We’d love to worship with you! Whether it’s your first time or your
            church home, City Life Building Church is a place where you belong.
          </p>

          {/* Schedule Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Oras Sa Kaayohan",
                time: "Sunday – 10:00 AM",
                icon: "🙏",
                desc: "A life-changing series that brings hope, faith, and healing through powerful messages.",
              },
              {
                title: "Sunday Worship Service",
                time: "3:00 PM – 6:00 PM",
                icon: "⛪",
                desc: "A powerful time of worship, teaching, and fellowship for the whole family.",
              },
              {
                title: "Kids Ministry",
                time: "During Service",
                icon: "👨‍👩‍👧‍👦",
                desc: "Engaging and faith-filled programs for kids to grow in Christ.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-slate-900/60 backdrop-blur-sm border  rounded-3xl p-8 border-cyan-400/50 shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-3xl shadow-[0_0_25px_rgba(0,255,255,0.5)]">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {item.title}
                </h3>

                <p className="text-pink-400 font-semibold mb-3">{item.time}</p>

                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 rounded-3xl overflow-hidden border border-cyan-400/30 shadow-[0_0_40px_rgba(0,255,255,0.2)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.634860819313!2d123.9516379967895!3d10.371052299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9a2a11335ef55%3A0x3d2979c4a2caea68!2sJCIL-EHM%20CONSOLACION%20-%20CLBC!5e0!3m2!1sen!2sph!4v1768288163796!5m2!1sen!2sph"
              width="100%"
              height="350"
              loading="lazy"
              className="w-full border-0"
            />
          </div>

          {/* Location & CTA */}
          <div className="mt-10 max-w-3xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mb-5"></div>

            <p className="text-gray-300 text-lg mb-6">
              📍 <span className="text-cyan-400 font-semibold">Location:</span>{" "}
              City Life Building Church, Thomas P. Go Road Riverside, Poblacion
              Oriental Consolacion, Cebu, Philippines
            </p>
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
                  "images/youth3.jpg",
                  "images/youth2.jpg",
                  "images/youth1.jpg",
                ],
              },
              {
                name: "Kids Ministry",
                images: [
                  "images/kids3.jpg",
                  "images/kids2.jpg",
                  "images/kids1.jpg",
                ],
              },
              {
                name: "Worship Team",
                images: ["images/wt3.jpg", "images/wt2.jpg", "images/wt1.jpg"],
              },
            ].map((ministry, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="relative w-64 h-80">
                  {ministry.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${ministry.name} ${index + 1}`}
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
            Guiding individuals and families in faith, love, and purpose.
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
              name: "Pastor's Maker",
              icon: "📖",
              description:
                "Pastor’s Maker exists to uplift and support our pastors through prayer, encouragement, and resources—building a strong spiritual foundation for the entire church.",
              accentColor: "cyan",
            },
          ].map((program, i) => (
            <div
              key={i}
              className="group relative bg-slate-900/60 backdrop-blur-sm border  rounded-2xl p-8 border-cyan-400/50 shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all duration-300"
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
            Be part of life-changing events that strengthen faith and build
            community.
          </p>
        </div>

        {/* Timeline-style layout */}
        <div className="relative max-w-4xl mx-auto z-10">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-purple-400/50 to-pink-400/50 hidden md:block"></div>

          <div className="space-y-12">
            {[
              {
                name: "Family Camp",
                desc: "Strengthening family bonds through worship, teaching, and quality time together in God's presence.",
                icon: "👨‍👩‍👧‍👦",
              },
              {
                name: "Youth Events",
                desc: "Empowering the next generation through worship, fellowship, and discipleship activities.",
                icon: "🙏",
              },
              {
                name: "Youth Camp",
                desc: "A transformative retreat experience focused on spiritual growth and building lasting friendships.",
                icon: "⛺",
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
                name: "Church Anniversary",
                desc: "Celebrating God's faithfulness and the journey of our church community throughout the years.",
                icon: "🎉",
              },
            ].map((event, i) => (
              <div
                key={i}
                className={`relative flex items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="bg-slate-900/60 backdrop-blur-sm border rounded-2xl p-6 border-cyan-400/50 shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all duration-300">
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
            Your generosity helps us continue building lives, serving our
            community, and sharing God’s love through{" "}
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
                description: "Support community programs and special causes.",
                image: "images/donation.avif",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white/10 border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg shadow-cyan-500/30 transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 text-center flex justify-between flex-col">
                  <div className="">
                    <h3 className="text-2xl font-semibold mb-3 text-white drop-shadow-[0_0_10px_#ff66cc]">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{item.description}</p>
                  </div>
                  <a
                    href="#"
                    className="
    inline-block px-6 py-2
    rounded-full font-semibold text-white shadow-md
    bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
    bg-[length:200%_200%] bg-left
    hover:bg-right
    transition-[background-position] duration-700 ease-in-out
  "
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
              . For more details, please contact our finance team or visit our
              church office.
            </p>
          </div>
        </div>
      </section>
      {showExpect && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 max-w-lg p-8 rounded-2xl border border-pink-400 shadow-[0_0_50px_rgba(255,0,255,0.6)]">
            <h3 className="text-3xl font-bold mb-4 text-pink-400">
              What to Expect
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>✔ Friendly & welcoming atmosphere</li>
              <li>✔ Contemporary worship</li>
              <li>✔ Practical Bible-based message</li>
              <li>✔ Kids & youth programs</li>
              <li>✔ Casual dress is welcome</li>
            </ul>

            <button
              onClick={() => setShowExpect(false)}
              className="mt-6 px-6 py-2 bg-pink-500 rounded-full font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <a
        href="#join-us"
        className="
    fixed bottom-6 right-6 z-50
    inline-block px-6 py-3
    rounded-full font-bold text-white
    shadow-[0_0_40px_rgba(255,0,255,0.7)]
    bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
    bg-[length:200%_200%] bg-left
    hover:bg-right
    transition-[background-position,transform] duration-700 ease-in-out
    hover:scale-105
  "
      >
        Join Us
      </a>
      ;
    </>
  );
}

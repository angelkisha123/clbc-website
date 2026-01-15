"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(" ");
  const [activeImage, setActiveImage] = useState<{
    ministryIndex: number;
    imageIndex: number;
  } | null>(null);

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


        <main
          id="hero"
          className="
    relative z-10
    text-center
    px-4 sm:px-6 md:px-8
    pt-24 sm:pt-28 md:pt-32
    flex flex-col items-center
  "
        >
          <h1
            className="
      font-playlist
      text-[60px]
      sm:text-[90px]
      md:text-[130px]
      lg:text-[150px]
      leading-none
      drop-shadow-lg
      animate-pulse-slow
    "
          >
            Welcome
          </h1>

          <p
            className="
      text-gray-200
      max-w-xl sm:max-w-2xl
      mx-auto
      text-base sm:text-lg md:text-xl
      mt-4 sm:mt-6
      leading-relaxed
    "
          >
            Experience faith, community, and the presence of God at <br />
            <span className="text-pink-400 font-semibold">
              City Life Building Church
            </span>
          </p>

          <a
            href="#join-us"
            className="
      inline-block
      mt-6 sm:mt-8
      px-6 sm:px-8
      py-3
      text-sm sm:text-base
      bg-pink-500 hover:bg-pink-400
      text-white font-semibold
      rounded-full
      shadow-md
      transition-all duration-300
      hover:scale-105
    "
          >
            There’s a Place for You Here
          </a>
        </main>
      </div>
      <section
        id="about"
        className="
    relative
    text-white
    bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
    py-24
    px-4 sm:px-6 md:px-12 lg:px-20
    overflow-hidden
  "
      >
        {/* subtle background glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-500/10 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px]" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Title */}
          <h2
            className="
        text-3xl sm:text-4xl md:text-5xl
        font-extrabold
        mb-6
        bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
        bg-clip-text text-transparent
        drop-shadow-[0_0_20px_rgba(236,72,153,0.35)]
      "
          >
            About Us
          </h2>

          {/* Description */}
          <p
            className="
        text-base sm:text-lg md:text-xl
        leading-relaxed
        text-gray-300
        max-w-3xl
        mx-auto
        mb-14
      "
          >
            City Life Building Church (CLBC) is a Christ-centered community
            where people from all walks of life can encounter the love and truth
            of Jesus. We exist to build lives, strengthen families, and impact
            our city through faith, hope, and love.
          </p>

          {/* Content Card */}
          <div className="grid grid-cols-1 gap-10">
            <div
              className="
          relative
          bg-slate-900/70
          backdrop-blur
          border border-cyan-400/20
          rounded-3xl
          p-6 sm:p-8
          shadow-[0_0_40px_rgba(0,255,255,0.08)]
          transition-all duration-500
          hover:border-cyan-400/40
        "
            >
              {/* Image */}
              <img
                src="images/clbc.jpg"
                alt="vision image"
                className="
            w-full
            h-[220px] sm:h-[280px] md:h-[350px]
            object-cover object-center
            rounded-2xl
            mb-6
            shadow-lg
          "
              />

              {/* Vision Title */}
              <div className="flex items-center justify-center mb-2">
                <h3
                  className="
              text-xl sm:text-2xl
              font-bold
              text-transparent
              bg-clip-text
              bg-gradient-to-r from-cyan-400 to-pink-400
              drop-shadow-[0_0_12px_rgba(0,255,255,0.4)]
            "
                >
                  Vision
                </h3>
              </div>

              {/* Vision Text */}
              <p
                className="
            text-sm sm:text-base md:text-lg
            leading-relaxed
            text-gray-300
            text-center
            max-w-2xl
            mx-auto
          "
              >
                Connecting and Empoweing individual talents driven by God's love
                to become a good witness in the family, community, and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="join-us"
        className="
    relative isolate
    text-white
    py-20 sm:py-24 md:py-28
    px-4 sm:px-6 md:px-12 lg:px-20
    overflow-hidden
    bg-[url('/images/orbs.jpg')]
    bg-cover bg-center
  "
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        <p
          className="
      mb-6 sm:mb-8
      text-base sm:text-lg md:text-xl
      text-cyan-300 font-semibold
      drop-shadow
      w-full text-center
      relative z-10
    "
        >
          Next Service Starts In:{" "}
          <span className="text-pink-400">{timeLeft}</span>
        </p>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Title */}
          <h2
            className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-bold
        mb-5 sm:mb-6
        text-transparent bg-clip-text
        bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
        drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]
      "
          >
            Join Us This Sunday
          </h2>

          <p
            className="
        text-sm sm:text-base md:text-lg
        text-gray-300
        max-w-xl sm:max-w-2xl md:max-w-3xl
        mx-auto
        mb-12 sm:mb-16
        leading-relaxed
      "
          >
            We’d love to worship with you! Whether it’s your first time or your
            church home, City Life Building Church is a place where you belong.
          </p>

          {/* Schedule Cards */}
          <div
            className="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        gap-6 sm:gap-8 md:gap-10
      "
          >
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
                className="
            relative
            bg-slate-900/60
            backdrop-blur-sm
            border border-cyan-400/50
            rounded-3xl
            p-6 sm:p-8
            shadow-[0_0_30px_rgba(0,255,255,0.2)]
            transition-all duration-300
          "
              >
                {/* Icon */}
                <div className="mb-5 sm:mb-6 flex justify-center">
                  <div
                    className="
                w-14 h-14 sm:w-16 sm:h-16
                rounded-full
                bg-gradient-to-br from-cyan-500 to-purple-500
                flex items-center justify-center
                text-2xl sm:text-3xl
                shadow-[0_0_25px_rgba(0,255,255,0.5)]
              "
                  >
                    {item.icon}
                  </div>
                </div>

                <h3
                  className="
              text-xl sm:text-2xl
              font-bold
              mb-2
              text-transparent bg-clip-text
              bg-gradient-to-r from-cyan-400 to-purple-400
            "
                >
                  {item.title}
                </h3>

                <p className="text-pink-400 font-semibold mb-3 text-sm sm:text-base">
                  {item.time}
                </p>

                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Map */}
          <div
            className="
        mt-14 sm:mt-16 md:mt-20
        rounded-3xl
        overflow-hidden
        border border-cyan-400/30
        shadow-[0_0_40px_rgba(0,255,255,0.2)]
      "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.634860819313!2d123.9516379967895!3d10.371052299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9a2a11335ef55%3A0x3d2979c4a2caea68!2sJCIL-EHM%20CONSOLACION%20-%20CLBC!5e0!3m2!1sen!2sph!4v1768288163796!5m2!1sen!2sph"
              width="100%"
              height="320"
              loading="lazy"
              className="w-full border-0"
            />
          </div>

          {/* Location */}
          <div className="mt-8 sm:mt-10 max-w-3xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mb-4 sm:mb-5"></div>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6">
              📍 <span className="text-cyan-400 font-semibold">Location:</span>{" "}
              City Life Building Church, Thomas P. Go Road Riverside, Poblacion
              Oriental Consolacion, Cebu, Philippines
            </p>
          </div>
        </div>
      </section>
      <section
        id="ministry"
        className="
    relative
    bg-slate-900
    text-white
    py-16 sm:py-20 md:py-24
    px-4 sm:px-6 md:px-12 lg:px-16
    overflow-hidden
  "
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="
        text-3xl sm:text-4xl md:text-5xl
        font-extrabold
        mb-12 sm:mb-16
        bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400
        bg-clip-text text-transparent
        drop-shadow-[0_0_15px_#ff00aa]
      "
          >
            Our Ministries
          </h2>

          <div
            className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-10 sm:gap-14 lg:gap-16
      "
          >
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
              <div
                key={i}
                className="
            flex flex-col items-center
            group
          "
              >
                <div
                  className="
              relative
              w-56 h-72
              sm:w-60 sm:h-80
              md:w-64 md:h-80
            "
                  onClick={() => setActiveImage(null)}
                >
                  {ministry.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${ministry.name} ${index + 1}`}
                      onClick={() =>
                        setActiveImage({
                          ministryIndex: i,
                          imageIndex: index,
                        })
                      }
                      className={`
                  absolute top-0 left-0
                  w-full h-full
                  object-cover
                  rounded-xl
                  shadow-lg
                  transition-all duration-500 ease-out
                     ${index === 0 ? "translate-x-0 rotate-[-4deg]" : ""}
    ${index === 1 ? "translate-x-4 sm:translate-x-6 rotate-[2deg]" : ""}
    ${index === 2 ? "translate-x-8 sm:translate-x-12 rotate-[5deg]" : ""}

    /* Desktop hover */
    md:hover:z-50 md:hover:scale-110

    /* Mobile tap behavior */
    ${
      activeImage?.ministryIndex === i && activeImage?.imageIndex === index
        ? "z-50 scale-110"
        : "z-10"
    }
  `}
                    />
                  ))}
                </div>

                <h3
                  className="
              mt-5 sm:mt-6
              text-xl sm:text-2xl
              font-semibold
              bg-gradient-to-r from-pink-400 to-cyan-400
              bg-clip-text text-transparent
              drop-shadow-[0_0_10px_#ff66cc]
            "
                >
                  {ministry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="program"
        className="
    relative
    bg-[url('/resources/images/event.jpg')]
    bg-cover bg-right-top bg-fixed
    text-white
    py-16 sm:py-20 md:py-24
    px-4 sm:px-6 md:px-12 lg:px-16
    overflow-hidden
  "
      >
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1px]"></div>

        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-purple-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"></div>

        <div className="relative text-center mb-12 sm:mb-16">
          <h2
            className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-bold
        bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
        text-transparent bg-clip-text
        mb-4
      "
          >
            Programs & Counseling
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Guiding individuals and families in faith, love, and purpose.
          </p>
        </div>

        <div
          className="
      relative
      grid
      grid-cols-1
      md:grid-cols-2
      gap-6 sm:gap-8
      max-w-5xl
      mx-auto
    "
        >
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
              className="
          group
          relative
          bg-slate-900/60 backdrop-blur-sm
          border border-cyan-400/50
          rounded-2xl
          p-6 sm:p-8
          shadow-[0_0_30px_rgba(0,255,255,0.15)]
          transition-all duration-300
        "
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
                {/* Icon */}
                <div className="mb-5 sm:mb-6 ">
                  <div
                    className="
                inline-flex items-center justify-center
                w-14 h-14 sm:w-16 sm:h-16
                rounded-full
                bg-gradient-to-br from-cyan-500/20 to-purple-500/20
                border border-cyan-400/30
                shadow-[0_0_20px_rgba(0,255,255,0.2)]
                text-2xl sm:text-3xl
              "
                  >
                    {program.icon}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
              text-xl sm:text-2xl
              font-bold
              text-transparent bg-clip-text
              bg-gradient-to-r from-cyan-400 to-purple-400
              mb-3 sm:mb-4
            "
                >
                  {program.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {program.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400/20 rounded-br-lg"></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="relative mt-16 sm:mt-20 max-w-3xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
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
            A weekly life-changing series that brings hope, faith, and
            encouragement through powerful messages and real-life testimonies.
            Be inspired and strengthened in your walk with God as we share
            stories of transformation and purpose every week.
          </p>

          <p className="text-base md:text-lg mb-10 opacity-80 italic text-cyan-300">
            "Be transformed by the renewing of your mind." — Romans 12:2
          </p>

          <Link
            href="/osk"
            className="
    inline-block px-6 py-2
    rounded-full font-semibold text-white shadow-md
    bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
    bg-[length:200%_200%] bg-left
    hover:bg-right
    transition-[background-position] duration-700 ease-in-out
  "
          >
            View All Episodes
          </Link>
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
          {/* Center vertical line (desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-purple-400/50 to-pink-400/50 hidden lg:block"></div>

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

                {/* CENTER ICON — animated, hidden ONLY on md */}
                <div className="hidden lg:block flex-shrink-0 relative">
                  <div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-2xl border-4 border-slate-950
              shadow-[0_0_30px_rgba(0,255,255,0.5)]
              animate-[float_4s_ease-in-out_infinite]"
                  >
                    {event.icon}
                  </div>

                  {/* Pulsing glow dot */}
                  <div className="absolute inset-0 rounded-full animate-ping bg-cyan-400/30"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
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
      <a
        href="#join-us"
        className="
    fixed z-50
    bottom-4 right-4
    sm:bottom-5 sm:right-5
    md:bottom-6 md:right-6

    inline-flex items-center justify-center
    px-5 py-2.5
    sm:px-6 sm:py-3

    rounded-full font-bold text-white
    text-sm sm:text-base

    shadow-[0_0_30px_rgba(255,0,255,0.6)]
    sm:shadow-[0_0_40px_rgba(255,0,255,0.7)]

    bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
    bg-[length:200%_200%] bg-left
    hover:bg-right

    transition-[background-position,transform] duration-700 ease-in-out
    hover:scale-105
    active:scale-95
  "
      >
        Join Us
      </a>
    </>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function OurSolutions() {
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setAnimateIn(true), 200);
        return () => clearTimeout(t);
    }, []);


    const cards = [
        {
          title: "AR / VR Solutions",
          image: "/arvr.png",
          to: "/ar-vr",
        },
        {
          title: "Digital Twin",
          image: "/digital-twin.png",
          to: "/digital-twin",
        },
        {
          title: "3D Modelling",
          image: "/3d.png",
          to: "/3d-modelling",
        },
        {
          title: "Immersive XR",
          image: "/xr.png",
          to: "/immersive-xr",
        },
        {
          title: "Aerial 360",
          image: "/aerial.png",
          to: "/aerial-360",
        },
        {
          title: "Virtual Walkthrough",
          image: "/walkthrough.png",
          to: "/walkthrough",
        },
      ];
      
    return (
        <section className="relative min-h-screen w-full overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/solution.png')",
                }}
            />


            {/* DARK OVERLAY */}
            <div className="absolute  inset-0 bg-black/40" />

            {/* CONTENT */}
            <div className="relative z-10 min-h-screen w-full mx-auto px-6 pt-32 text-center text-white">

                {/* WHAT WE DO */}
                <p className="text-sm text-white font-bold tracking-widest uppercase opacity-80">
                    What We Do
                </p>

                {/* HEADING + LINE */}
                <div className="relative inline-block mt-6 overflow-hidden">

                    {/* OUR SOLUTIONS */}
                    <h2
                        className={`
              text-5xl md:text-6xl font-semibold
              transition-all duration-700 ease-out
              ${animateIn
                                ? "translate-x-0 opacity-100"
                                : "translate-x-32 opacity-0"}
            `}
                    >
                        Our Solutions
                    </h2>

                    {/* GREEN LINE */}
                    <span
                        className={`
              block mx-auto mt-3 h-0.75 w-20 bg-[rgb(101,255,75)]
              transition-all duration-700 delay-150 ease-out
              ${animateIn
                                ? "translate-x-0 opacity-100"
                                : "translate-x-20 opacity-0"}
            `}
                    />
                </div>

                {/* SUBTITLE */}
                <p className="
  mt-6
  text-sm md:text-base
  opacity-80
  whitespace-nowrap
  overflow-hidden
  text-ellipsis
  max-w-full
">
                    AR / VR / XR & Metaverse | YouTube 360 Video | CGS & GIS |
                    3D Modelling | Customised VR | Walkthrough | Aerial 360 |
                    Digital Twin | Rendering
                </p>

                {/* CARDS GRID */}
                {/* CARDS GRID */}
{/* CARDS GRID */}
<div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
  {cards.map((card, i) => (
    <Link
      key={i}
      to={card.to}
      className="
        group
        relative h-224 rounded-xl
        bg-white/10 backdrop-blur
        border border-white/10
        transition-all duration-300
        hover:border-[rgb(101,255,75)]
        hover:-translate-y-2
        overflow-hidden
        cursor-pointer
      "
    >
      {/* IMAGE */}
      <img
        src={card.image}
        alt={card.title}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-105
        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* VERTICAL TITLE */}
      <div className="absolute inset-0 flex items-center mx-5 justify-start z-10">
        <h3
          className="
            text-4xl font-semibold opacity-90 text-white
            [writing-mode:vertical-rl]
            rotate-180
          "
        >
          {card.title}
        </h3>
      </div>

      {/* BIG GREEN ARROW – LOWER MIDDLE */}
      <div
        className="
          absolute
          top-[65%]
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[180px]
          h-[28px]
          z-20
        "
      >
        {/* STATIC LINE */}
        <div
          className="
            absolute top-1/2 left-0 right-0
            h-[2px]
            bg-[rgb(101,255,75)]
            -translate-y-1/2
            pointer-events-none
          "
        />

        {/* STATIC ARROW */}
        <div
          className="
            absolute right-0 top-1/2
            -translate-y-1/2
            text-[rgb(101,255,75)]
            text-3xl font-bold
            pointer-events-none
            z-10
          "
        >
          &gt;
        </div>

        {/* MOVING SPHERE ONLY */}
        <div
          className="
            absolute top-1/2 right-[4px]
            -translate-y-1/2
            w-7 h-7
            rounded-full
            bg-[rgba(101,255,75,0.35)]
            shadow-[0_0_20px_rgba(101,255,75,0.8)]
            transition-transform duration-500 ease-out
            group-hover:-translate-x-[80px]
          "
        />
      </div>
    </Link>
  ))}
</div>



            </div>
        </section>
    );
}

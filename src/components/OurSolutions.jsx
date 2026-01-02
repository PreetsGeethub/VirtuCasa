import { useEffect, useState } from "react";

export default function OurSolutions() {
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setAnimateIn(true), 200);
        return () => clearTimeout(t);
    }, []);

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
            <div className="absolute inset-0 bg-black/40" />

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 text-center text-white">

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
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {[
                        "AR / VR Solutions",
                        "Digital Twin",
                        "3D Modelling",
                        "Immersive XR",
                        "Aerial 360",
                        "Virtual Walkthrough"
                    ].map((title, i) => (
                        <div
                            key={i}
                            className="
                relative h-64 rounded-xl
                bg-white/10 backdrop-blur
                border border-white/10
                transition-all duration-300
                hover:border-[rgb(101,255,75)]
                hover:-translate-y-2
              "
                        >
                            {/* CARD CONTENT */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-xl font-semibold opacity-90">
                                    {title}
                                </h3>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

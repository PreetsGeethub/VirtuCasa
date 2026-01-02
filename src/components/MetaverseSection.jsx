import { useEffect, useRef, useState } from "react";

export default function MetaverseSection() {
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsInView(true),
            { threshold: 0.35 }
        );
        sectionRef.current && observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen bg-[#0b061a] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-8 py-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        {/* METAVERSE TAG */}
                        <p className="text-sm text-[rgb(101,255,75)] tracking-widest uppercase">
                            Metaverse
                        </p>

                        {/* GREEN LINE (LEFT → RIGHT) */}
                        <span
                            className={`
                block mt-2 h-[3px] bg-[rgb(101,255,75)]
                transition-all duration-700 ease-out
                ${isInView ? "w-24 opacity-100" : "w-0 opacity-0"}
              `}
                        />

                        {/* HEADING LINE 1 */}
                        <h2
                            className={`
                mt-6 text-4xl lg:text-5xl font-semibold text-white
                transition-all duration-700 ease-out
                ${isInView ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"}
              `}
                        >
                            Empowering Business
                        </h2>

                        {/* HEADING LINE 2 */}
                        <h3
                            className={`
                mt-2 text-4xl lg:text-5xl font-semibold text-white
                transition-all duration-700 delay-150 ease-out
                ${isInView ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"}
              `}
                        >
                            With Metaverse
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="mt-6 text-white/70 max-w-lg leading-relaxed">
                            We are dedicated to pushing the boundaries of interactive
                            presentation by harnessing the power of Metaverse technology.
                            With our innovative approach, we bring you a new era of
                            immersive digital experiences.
                        </p>

                        {/* BUTTON */}
                        <button
                            className="
                relative mt-8 px-6 py-3 rounded-lg
                bg-gradient-to-r from-purple-500 to-pink-500
                text-white font-semibold overflow-hidden group
              "
                        >
                            <span
                                className="
                  absolute inset-0 bg-[rgb(101,255,75)]
                  translate-x-full group-hover:translate-x-0
                  transition-transform duration-500 ease-out
                "
                            />
                            <span className="relative z-10 group-hover:text-[#0b061a] transition-colors">
                                Get In Touch
                            </span>
                        </button>
                    </div>

                    {/* RIGHT VISUAL */}
                    {/* RIGHT VISUAL */}
                    <div
                        className={`
    relative flex justify-center
    h-[600px]
    perspective-[1400px]
    transition-all duration-1000 ease-out
    ${isInView ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}
  `}
                    >
                        {/* VR IMAGE (behind card) */}
                        <img
                            src="/PINKVR7.png"
                            alt="VR Experience"
                            className="
      absolute
      bottom-[140px]
      z-10
      w-[520px]
    "
                        />

                        {/* WALKTHRU PARALLELOGRAM */}
                        {/* WALKTHRU CARD */}
    <div
                            className="
    absolute
    bottom-[10%]
    right-[-10px]
    z-20
    perspective-[1400px]
  "
                        >
                            <div
                                className="
      w-[460px] h-[180px]
      bg-gradient-to-r from-pink-500 to-orange-400
      rounded-xl shadow-2xl
      transform
      [transform-style:preserve-3d]
    "
                                style={{
                                    transform: `
        perspective(1400px)
        rotateY(-18deg)
        skewX(4deg)
        translateZ(80px)
      `,
                                }}
                            >
                                {/* TEXT CONTENT */}
                                <div
  className="
    absolute
    bottom-[10%]
    right-[30px]
    z-30
    pointer-events-none
  "
>
  <div className="w-[300px] text-left">
    <h4 className="text-[48px] font-extrabold leading-none text-black font-[Poppins]">
      WalkThru
    </h4>

    <p className="mt-2 text-[22px] font-semibold text-black font-[Poppins] pl-[34px]">
      VR / MR / AR
    </p>
  </div>
</div>


                            </div>
                        </div>


                        </div>


                </div>
            </div>





            
        </section>
    );
}

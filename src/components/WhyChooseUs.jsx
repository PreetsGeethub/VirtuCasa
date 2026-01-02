import { useEffect, useRef, useState } from "react";

export default function WhyChooseUs() {
    const sectionRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.35 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);


    useEffect(() => {
        const onScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // progress: 0 → 1 while section scrolls
            const scrollProgress =
                1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

            setProgress(scrollProgress);
        };

        window.addEventListener("scroll", onScroll);
        onScroll(); // initial call

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // parallax math
    // eased progress (slow → fast → slow)
    const eased = Math.pow(progress, 1.4);

    // stronger parallax movement
    const imageTranslate = eased * 160;

    // slow brightness fade
    const imageBrightness = 1.25 - eased * 0.55;


    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen bg-[#0b061a] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-8 pt-32 relative z-10">

                {/* TOP CONTENT */}
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT TEXT */}
                    <div>
                        {/* WHY CHOOSE US */}
                        <div className="relative inline-block">
                            <p className="text-sm text-white/70 tracking-widest uppercase">
                                Why Choose Us
                            </p>

                            {/* GREEN LINE */}
                            <span
                                className={`
        absolute left-0 -bottom-2 h-[2px]
        bg-[rgb(101,255,75)]
        transition-all duration-1100 ease-out
        ${isInView ? "w-full opacity-100" : "w-0 opacity-0"}
      `}
                            />
                        </div>

                        {/* HEADING LINE 1 */}
                        <h2
                            className={`
      mt-6 text-4xl lg:text-5xl font-semibold text-pink-500
      transition-all duration-1100 ease-out
      ${isInView
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-24 opacity-0"}
    `}
                        >
                            An ISO 9001 : 2015
                        </h2>

                        {/* HEADING LINE 2 (DELAYED) */}
                        <h2
                            className={`
      mt-2 text-4xl lg:text-5xl font-semibold text-pink-500
      transition-all duration-1100 delay-150 ease-out
      ${isInView
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-24 opacity-0"}
    `}
                        >
                            Certified Company
                        </h2>

                        {/* PARAGRAPH */}
                        <p className="mt-6 text-2xl text-white/80 max-w-lg leading-relaxed">
                            At WalkThru Tech Private Limited, our DGCA-certified remote pilots
                            deliver a smooth flying experience as we harness the power of
                            immersive technology to elevate experiences and drive innovation.
                        </p>

                        <button
                            className="
    relative mt-8 px-6 py-3 rounded-lg
    bg-gradient-to-r from-purple-500 to-pink-500
    text-white font-semibold
    overflow-hidden
    group
  "
                        >
                            {/* GREEN HOVER FILL */}
                            <span
                                className="
      absolute inset-0
      bg-[rgb(101,255,75)]
      transform translate-x-full
      transition-transform duration-500 ease-out
      group-hover:translate-x-0
    "
                            />

                            {/* BUTTON TEXT */}
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0b061a]">
                                Get Started
                            </span>
                        </button>


                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center">
                        <img
                            src="/PINKVR2.png"
                            alt="VR Woman"
                            style={{
                                transform: `translateY(${imageTranslate}px)`,
                                filter: `brightness(${imageBrightness})`,
                            }}
                            className="
    w-[920px] h-[680px]
    transition-[transform,filter]
    duration-500
    ease-out
    will-change-transform
  "
                        />

                    </div>
                </div>

                {/* CARDS */}
                <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Expertise",
                            text:
                                "Our team comprises skilled professionals with extensive knowledge in immersive technology.",
                            icon: "/one.png",
                        },
                        {
                            title: "Customization",
                            text:
                                "We understand that every client has unique requirements and tailor solutions.",
                            icon: "/two.png",
                        },
                        {
                            title: "Quality Assurance",
                            text:
                                "We are committed to delivering high-quality products adhering to industry standards.",
                            icon: "/three.png",
                        },
                        {
                            title: "Our Approach",
                            text:
                                "Our clients are at the heart of everything we do.",
                            icon: "/four.png",
                        },
                    ].map((card, i) => (
                        <div key={i} className="why-card group">

                            {/* ICON (top-left) */}
                            <div className="relative z-10 mb-6">
                            <img
  src={card.icon}
  alt={card.title}
  className="
    w-12 h-12
    transition-all duration-300
    group-hover:grayscale
    group-hover:brightness-0
  "
/>
                            </div>

                            {/* TEXT */}
                            <div className="relative z-10">
                                <h3 className="text-lg font-semibold text-white mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    {card.text}
                                </p>
                            </div>

                            {/* GREEN SLIDE FILL */}
                            <span className="card-fill" />
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}

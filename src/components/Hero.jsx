import React from 'react'

function Hero() {
    return (
        <>
            <section
                className="
    relative min-h-screen overflow-hidden
    bg-gradient-to-b
    from-[#6c5b7b]
    via-[#2a1d88]
    to-[#8b8296]
  "
            >
                {/* grid */}
                <div className="absolute inset-0 hero-grid opacity-40" />

                {/* dots */}
                <div className="absolute inset-0 hero-dots opacity-20" />

                {/* radial glow */}
                <div
                    className="absolute inset-0
      bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.18),transparent_60%)]"
                />

                {/* content */}
                <div
                    className="
      relative z-10 max-w-7xl mx-auto px-8 pt-32
      grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
    "
                >
                    {/* LEFT TEXT */}
                    <div className="text-white animate-fade-up">
                        <h1 className="text-5xl lg:text-6xl font-semibold leading-tight">
                            Immersive Interaction
                        </h1>

                        <p className="mt-6 max-w-md text-lg opacity-90">
                            Our cutting-edge visualizations bring built & unbuilt infrastructure
                            to life, revolutionizing architectural design.
                        </p>

                        <button
                            className="
          mt-10 px-6 py-3 rounded-xl
          bg-white/20 backdrop-blur
          hover:bg-white/30 transition duration-300
        "
                        >
                            Get Started
                        </button>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative flex justify-center animate-fade-up animate-delay-200">
                        <img
                            src="/images/head.png"
                            alt="AI Head"
                            className="w-[420px] relative z-10"
                        />
                    </div>
                </div>

                {/* FLOATING SPHERE */}
                <img
                    src="/images/sphere.webp"
                    alt="Sphere"
                    className="
      absolute bottom-28 left-1/2
      w-40 opacity-90
      float-slow
    "
                />
            </section>



        </>
    )
}

export default Hero
import React from 'react'

function Hero() {
    return (
        <>
            <section
                className="
    relative min-h-screen overflow-hidden
    bg-[linear-gradient(to_bottom,#6c5b7b_0%,rgb(26,9,135)_35%,rgb(26,9,135)_50%,rgb(92,78,105)_70%,rgb(150,135,142)_100%)]

  "
            >
                {/* grid */}
                <div className="absolute inset-0 hero-grid opacity-40 pointer-events-none" />

                {/* dots */}
                <div className="absolute inset-0 hero-dots opacity-20 pointer-events-none" />

                {/* radial glow */}
                <div
                    className="absolute inset-0
      bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.18),transparent_60%)] pointer-events-none"
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
                    <h1 className="text-5xl lg:text-6xl font-semibold leading-tight overflow-hidden">

{/* IMMERSIVE */}
<span
  className="block"
  style={{
    animation: "immersiveLeft 0.9s cubic-bezier(0.25,1,0.5,1) forwards"
  }}
>
  Immersive
</span>

{/* INTERACTION */}
<span
  className="block"
  style={{
    animation: "immersiveRight 0.9s cubic-bezier(0.25,1,0.5,1) forwards",
    animationDelay: "0.2s",
    opacity: 0
  }}
>
  Interaction
</span>

</h1>



                        <p className="mt-6 max-w-md text-lg opacity-90">
                            Our cutting-edge visualizations bring built & unbuilt infrastructure
                            to life, revolutionizing architectural design.
                        </p>

                        <button
                            className="
    relative mt-10 px-15 py-7 rounded-xl
    text-black font-bold text-2xl
    cursor-pointer overflow-hidden
     bg-[linear-gradient(to_right,rgb(118,61,192)_0%,rgb(131,84,193)_45%,rgb(172,156,199)_100%)]
    transition-all duration-300
    hover:brightness-110
    group
  "
                        >
                            {/* SHINE LAYER */}
                            <span
                                className="
      absolute top-0 left-[-150%]
      w-[120%] h-full
    bg-[linear-gradient(120deg,transparent_0%,rgba(101,255,75,0)_25%,rgba(101,255,75,0.95)_50%,rgba(101,255,75,0)_75%,transparent_100%)]

      skew-x-12
      transition-all duration-2000
      group-hover:left-[150%]
      pointer-events-none
    "
                            />

                            {/* BUTTON TEXT */}
                            <span className="relative z-10">
                                Get Started
                            </span>
                        </button>


                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative flex justify-center animate-fade-up animate-delay-200">
                        <img
                            src="src/assets/head.png"
                            alt="AI Head"
                            className="w-210 h-190 relative z-10"
                        />
                    </div>
                </div>

                {/* FLOATING SPHERE */}
                {/* FLOATING SPHERE */}
                <div
                    className="
    absolute bottom-11 left-1/2
    -translate-x-1/2
    w-48 h-48
    z-20
      cursor-pointer
    rounded-full
    flex items-center justify-center
    bg-[rgb(88,108,125)]
    float-container
    group
  "
                >
                    {/* ROTATING SPHERE IMAGE */}
                    <img
                        src="src/assets/sphere.webp"
                        alt="Sphere"
                        className="w-42 spin-sphere"
                    />

                    {/* FIXED ARROW (DOES NOT ROTATE) */}
                    <span
                        className="
      absolute
      right-16 bottom-14
      text-[rgb(101,253,76)]
      text-7xl
      rounded-2xl
      pointer-events-none
    "
                    >
                        ↘
                    </span>
                </div>


            </section>



        </>
    )
}

export default Hero
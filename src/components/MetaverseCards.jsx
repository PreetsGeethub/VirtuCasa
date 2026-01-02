import { Link } from "react-router-dom";

export default function MetaverseCards() {
  const cards = [
    {
      tag: "VR",
      title: "VIRTUAL REALITY TOUR",
      image: "/des.png",
      to: "/virtual-reality", // future page
    },
    {
      tag: "AERIAL",
      title: "INTERACTIVE LAND DESIGN",
      image: "/des2.png",
      featured: true,
      to: "/aerial-design", // future page
    },
    {
      tag: "MR",
      title: "MIXED REALITY",
      image: "/des3.png",
      to: "/mixed-reality", // future page
    },
  ];

  return (
    <section className="bg-[#0b061a] py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <p className="text-[rgb(101,255,75)] uppercase tracking-widest text-sm">
            Metaverse
          </p>

          <span className="block w-10 h-[2px] bg-[rgb(101,255,75)] mx-auto mt-2" />

          <h2 className="mt-6 text-4xl lg:text-5xl font-semibold text-white">
            Revolutionizing Experience
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <Link
              key={i}
              to={card.to}
              className="group cursor-pointer block"
            >
              {/* IMAGE */}
              <div
  className="
    relative rounded-2xl overflow-hidden
    transition-all duration-500 ease-out
    group-hover:-translate-y-3
    ring-1 ring-white/10
    group-hover:ring-2 group-hover:ring-[rgb(101,255,75)]
  "
>

                {/* TAG */}
                <span
                  className="
                    absolute top-4 left-4 z-10
                    px-4 py-1 rounded-full
                    bg-[rgb(101,255,75)]
                    text-black text-sm font-semibold
                  "
                >
                  {card.tag}
                </span>

                <img
                  src={card.image}
                  alt={card.title}
                  className="
                    w-full h-[320px] object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-105
                  "
                />
              </div>

              {/* TITLE + ARROW */}
              <div className="
  mt-6 flex items-baseline gap-2
  text-white
  transition-colors duration-300
  group-hover:text-[rgb(101,255,75)]
">
                <h3 className="text-lg font-semibold tracking-wide">
                  {card.title}
                </h3>

                <span
  className="
    text-[42px]
    font-black
    ml-[2px]
    leading-none
    transition-all duration-300
    group-hover:translate-x-2
  "
>
  →
</span>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

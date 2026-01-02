import { Link } from "react-router-dom";

const topRow = [
    { label: "DIGITAL Twin", to: "/digital-twin" },
    { label: "VR/MR Virtual,Mixed Reality", to: "/vr-mr" },
    { label: "AR", to: "/ar" },
    { label: "XR Lab", to: "/xr-lab" },
];

const bottomRow = [
    { label: "360 Virtual Tour", to: "/360-tour" },
    { label: "Aerial 360 View", to: "/aerial-360" },
    { label: "Immersive XR Lab", to: "/immersive" },
];
const renderLabel = (label) => {
    const [first, ...rest] = label.split(" ");
    const restText = rest.join(" ");
  
    return (
      <span className="label-wrap">
        <span className="word-green">{first}</span>
  
        {rest.length > 0 && (
          <span
            className="word-stroke-fill"
            data-text={restText}   // ← THIS WAS MISSING
          >
            {" "}{restText}
          </span>
        )}
      </span>
    );
  };
  
  
  
export default function ServicesMarquee() {
    return (
      <section className="relative overflow-hidden bg-[#0b0b1f] py-20 ">
  
        {/* TOP ROW */}
        <div className="marquee marquee-left">
          <div className="marquee-track">
            {[...topRow, ...topRow].map((item, i) => (
              <Link key={i} to={item.to} className="marquee-item ">
                {renderLabel(item.label)}
              </Link>
            ))}
          </div>
        </div>
  
        {/* BOTTOM ROW */}
        <div className="marquee marquee-right mt-12">
          <div className="marquee-track">
            {[...bottomRow, ...bottomRow].map((item, i) => (
              <Link key={i} to={item.to} className="marquee-item">
                {renderLabel(item.label)}
              </Link>
            ))}
          </div>
        </div>
  
      </section>
    );
  }
  
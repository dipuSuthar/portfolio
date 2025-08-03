import { useEffect, useRef, useState } from "react";

const educationData = [
  {
    university: "Parul University",
    degree: "Master of Computer Application(MCA)",
    duration: "September 2021 - june 2023",
    logo: "./parul-university.png",
  },
  {
    university: "K J Institute of Engineering & Technology",
    degree: "Bachelor of Computer Application(BCA)",
    duration: "September 2018 - April 2021",
    logo: "./kjit.png",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className=" text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-l-4 border-purple-500 pl-4">
          Education
        </h2>
        {educationData.map((edu, i) => (
          <EducationCard key={i} {...edu} />
        ))}
      </div>
    </section>
  );
}

function EducationCard({ university, degree, duration, desc, points, logo }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting); // Dynamically toggle on scroll
      },
      { threshold: 0.4 } // Trigger when 40% of card is visible
    );

    if (ref.current) observer.observe(ref.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <div ref={ref} className="mb-12">
      <div className="flex items-start gap-6 ">
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 object-contain rounded-full "
        />
        <div>
          <h3 className="text-2xl font-semibold">{university}</h3>
          <p className="font-bold">{degree}</p>
          <p className="text-sm text-gray-300 mb-1">{duration}</p>
          <p className="mb-2">{desc}</p>
        </div>
      </div>

      {/* Animated underline */}
      <div className="mt-4 h-1 bg-gray-600 w-full overflow-hidden">
        <div
          className={`h-full bg-cyan-400 transition-all duration-700 ease-in-out ${
            visible ? "w-full" : "w-0"
          }`}
        ></div>
      </div>
    </div>
  );
}

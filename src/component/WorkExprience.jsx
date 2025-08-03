import Ananta from "../assests/images/anantaservices_logo.jpg";
export default function WorkExperience() {
  const experience = {
    company: "Ananta Services",
    title: "Front-End Developer",
    duration: "Jan 2023 – Present",
    logo: Ananta, // place this in /public/icons/
    color: "bg-red-600",
    description:
      "Ananta Services is dedicated to provide top quality candidates in the Software, and IT arenas, which includes a larger pool from testers to developer to upper management",
  };

  return (
    <section
      id="work"
      className=" text-white py-20 px-6 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12 border-l-4 border-purple-500 pl-4">
          Work Experience
        </h2>

        {/* Experience Card */}
        <div className="flex justify-center">
          <div className="rounded-xl overflow-hidden bg-gray-800 shadow-lg border  hover:shadow-purple-600 transition border-gray-700 w-full max-w-md">
            {/* Top Colored Header */}
            <div className="bg-purple-700 p-6 text-center">
              <h3 className="text-xl font-bold">{experience.company}</h3>
              <div className="flex justify-center">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-16 h-16 rounded-full border-4 border-white -mb-8 mt-4"
                />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="pt-12 pb-6 px-6 text-center">
              <h4 className="text-lg font-semibold">{experience.title}</h4>
              <p className="text-sm text-gray-400 mb-4">
                {experience.duration}
              </p>
              <p className="text-sm text-gray-300">{experience.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

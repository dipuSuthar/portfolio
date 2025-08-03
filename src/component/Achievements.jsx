import Udemy from "../assests/images/udemy.png";

const achievementsData = [
  {
    title: "Full-Stack Web Developer",
    image: Udemy,
    description: " The Complete 2024 Web Development Bootcamp",
    instructor: " Dr.Angela Yu",
    links: [{ label: "Certification" }],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className=" text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-l-4 border-purple-500 pl-4">
          Achievements & Certifications 🏆
        </h2>

        {achievementsData.length === 1 ? (
          <div className="flex justify-center">
            <AchievementCard item={achievementsData[0]} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {achievementsData.map((item, idx) => (
              <AchievementCard key={idx} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function AchievementCard({ item }) {
  return (
    <div className="bg-[#111827] rounded-xl p-6 shadow-md border border-gray-700 hover:shadow-purple-600 transition duration-300 max-w-sm w-full">
      <img
        src={item.image}
        alt={item.title}
        className="w-40 h-40 mx-auto object-contain mb-4"
      />
      <h3 className="text-xl font-bold text-center mb-2">{item.title}</h3>
      <p className="text-sm text-center text-gray-300 mb-4">
        {item.description}
      </p>
      <p className="text-sm text-center text-gray-300 mb-4">
        {`Instructor:
        ${item.instructor} `}
      </p>
      <div className="flex justify-center mt-4">
        <p className="text-sm bg-purple-700 hover:bg-purple-800 text-white px-3 py-1 rounded-full">
          {item.links[0].label}
        </p>
      </div>
    </div>
  );
}

import "./styles/index.scss";
import WorkExperience from "./component/WorkExprience";
import Skills from "./component/Skills";
import Achievements from "./component/Achievements";
import EducationSection from "./component/Education";
import OpenSourceProjects from "./component/OpenSourceProjects";
import Contact from "./component/contact";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <EducationSection />
      <WorkExperience />
      <Achievements />
      <OpenSourceProjects />
      <Contact />
    </div>
  );
}

export default App;

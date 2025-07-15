import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionA from "./components/SectionA";
import SkillSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectSlide";
function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <main>
        <SectionA />
        <ProjectsSection />
        <SkillSection />
      </main>
      <Footer />
    </ChakraProvider>
  );
}

export default App;

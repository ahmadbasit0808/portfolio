import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";
import SkillSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectSlide";
import ContactForm from "./components/ContactSection";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <main>
        <LandingSection />
        <ProjectsSection />
        <SkillSection />
        <ContactForm />
      </main>
      <Footer />
    </ChakraProvider>
  );
}

export default App;

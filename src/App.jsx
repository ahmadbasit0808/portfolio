import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionA from "./components/SectionA";
function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <main>
        <SectionA />
      </main>
      <Footer />
    </ChakraProvider>
  );
}

export default App;

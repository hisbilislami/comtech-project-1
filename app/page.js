import Hero_section from "./components/Hero_section";
import Mission_section from "./components/Mission_section";
import History from "./components/History";
import Testimoni from "./components/testimoni";
import Contact from "./components/Contact";
import Subcription_section from "./components/Subcription_section";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero_section></Hero_section>
      <Mission_section></Mission_section>
      <History></History>
      <Testimoni />
      <Subcription_section></Subcription_section>
      <Contact />
      <Footer></Footer>
    </main>
  );
}

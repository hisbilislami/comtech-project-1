import Hero_section from "./components/Hero_section";
import Mission_section from "./components/Mission_section";
import History from "./components/History";
import Testimoni from "./components/testimoni";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <main>
      <Hero_section></Hero_section>
      <Mission_section></Mission_section>
      <History></History>
      <Testimoni />
      <Contact />
    </main>
  );
}

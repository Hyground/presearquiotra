import { useEffect } from "react";
import { Cable, CircuitBoard, Wifi, Sparkles } from "lucide-react";
import { SectionTitle } from "./components/ui";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TransmissionComparison from "./components/TransmissionComparison";
import TransmissionModes from "./components/TransmissionModes";
import UARTSection from "./components/UARTSection";
import USBTimeline from "./components/USBTimeline";
import LegacyPorts from "./components/LegacyPorts";
import PCIeSection from "./components/PCIeSection";
import WifiSection from "./components/WifiSection";
import BluetoothSection from "./components/BluetoothSection";
import WifiVsBluetooth from "./components/WifiVsBluetooth";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.06 },
    );
    document
      .querySelectorAll(".section,.subsection")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="topic-strip">
          <span>
            <Cable /> De los cables
          </span>
          <span className="strip-dots">······</span>
          <span>
            <CircuitBoard /> a los buses
          </span>
          <span className="strip-dots">······</span>
          <span>
            <Wifi /> a lo inalámbrico
          </span>
          <span className="strip-end">
            <Sparkles size={15} /> Un mundo conectado.
          </span>
        </div>
        <section id="basicos" className="section">
          <TransmissionComparison />
          <TransmissionModes />
        </section>
        <section id="cableados" className="section cable-section">
          <UARTSection />
          <USBTimeline />
          <LegacyPorts />
        </section>
        <PCIeSection />
        <section id="inalambricos" className="section wireless-section">
          <SectionTitle
            number="06"
            title="Sin cables. Con posibilidades."
            description="Las ondas llevan los datos. La tecnología define cómo los aprovechamos."
          />
          <WifiSection />
          <BluetoothSection />
          <WifiVsBluetooth />
        </section>
      </main>
      <Footer />
    </>
  );
}

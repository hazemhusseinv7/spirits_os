import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Preview from "./components/Preview";
import Plans from "./components/Plans";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Features />
      <Preview />
      <Plans />
      <Footer />
    </>
  );
}

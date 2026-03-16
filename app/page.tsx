import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="p-6 shadow rounded">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p>Modern web applications using React and Spring Boot</p>
          </div>

          <div className="p-6 shadow rounded">
            <h3 className="text-xl font-semibold">POS Software</h3>
            <p>Retail POS and inventory management systems</p>
          </div>

          <div className="p-6 shadow rounded">
            <h3 className="text-xl font-semibold">ERP Solutions</h3>
            <p>Custom ERP systems for business automation</p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
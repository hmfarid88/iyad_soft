import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto py-16 min-h-screen">

        <h1 className="text-4xl font-bold mb-10">Our Services</h1>

        <ul className="space-y-4">

          <li>✔ Custom Software Development</li>
          <li>✔ POS Software Development</li>
          <li>✔ ERP Solutions</li>
          <li>✔ Web Development</li>
          <li>✔ Mobile App Development</li>

        </ul>

      </div>

      <Footer />
    </>
  );
}
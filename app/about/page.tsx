import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-16 min-h-screen">

        <h1 className="text-4xl font-bold mb-6">About Iyad Soft</h1>

        <p>
          Iyad Soft is a professional software company specializing in
          web applications, POS software, ERP systems and custom
          enterprise solutions.
        </p>

      </div>

      <Footer />
    </>
  );
}
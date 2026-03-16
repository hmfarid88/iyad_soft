import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto py-16 min-h-screen">

        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded"
          />

          <textarea
            placeholder="Message"
            className="w-full border p-3 rounded"
          ></textarea>

          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            Send Message
          </button>

        </form>

      </div>

      <Footer />
    </>
  );
}
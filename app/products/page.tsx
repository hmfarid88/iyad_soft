import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Products() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto py-16 min-h-screen">

        <h1 className="text-4xl font-bold mb-10">Our Products</h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 shadow rounded">
            <h3 className="text-xl font-bold">Retail POS</h3>
            <p>Complete POS solution for shops and supermarkets</p>
          </div>

          <div className="p-6 shadow rounded">
            <h3 className="text-xl font-bold">Inventory System</h3>
            <p>Advanced inventory tracking system</p>
          </div>

          <div className="p-6 shadow rounded">
            <h3 className="text-xl font-bold">Accounting Software</h3>
            <p>Business accounting and finance management</p>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}
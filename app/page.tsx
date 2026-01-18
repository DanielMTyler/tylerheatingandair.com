import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
    {/* Hero Section */}
    <section className="relative bg-slate-900 text-white py-16 px-6 text-center">
    <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">
    Automotive <span className="text-orange-500">A/C</span> & <span className="text-blue-400">Electrical</span>
    </h1>
    <p className="text-xl md:text-2xl font-semibold mb-8">
    Mobile & Shop Service by Appointment Only
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a
    href="tel:2296992496"
    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg"
    >
    Call 229-699-2496
    </a>
    <a
    href="sms:2296992496"
    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg"
    >
    Text Now
    </a>
    </div>
    </div>
    </section>

    {/* Services Section */}
    <section className="py-16 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12 uppercase">Professional Services</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      "Automotive A/C and Heat",
      "Electrical Diagnostics & Repair",
      "Starting & Charging Systems",
      "General Auto Maintenance"
    ].map((service) => (
      <div key={service} className="p-6 border-2 border-slate-100 rounded-xl shadow-sm bg-slate-50 hover:border-orange-500 transition-colors">
      <p className="font-bold text-lg leading-tight">{service}</p>
      </div>
    ))}
    </div>
    </section>
    </main>
  );
}

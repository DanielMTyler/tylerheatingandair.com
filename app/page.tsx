export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
    {/* Hero Section */}
    <section className="relative bg-slate-900 text-white py-16 px-6 text-center">
    <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">
    Mobile Automotive <span className="text-orange-500">A/C</span> and <span className="text-blue-400">Heat</span>
    </h1>
    <p className="text-xl md:text-2xl font-semibold mb-3">
    By Appointment Only &middot; Serving Central Georgia
    </p>
    <p className="text-base md:text-lg text-slate-300 mb-8">
    Mobile service throughout Central Georgia. Vehicle drop-off and pickup available for larger jobs.
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
      "A/C Diagnosis & Leak Detection",
      "Recharge & Refrigerant Service",
      "Compressor & Component Replacement",
      "Heat, Defrost & Airflow Repair"
    ].map((service) => (
      <div key={service} className="p-6 border-2 border-slate-100 rounded-xl shadow-sm bg-slate-50 hover:border-orange-500 transition-colors">
      <p className="font-bold text-lg leading-tight">{service}</p>
      </div>
    ))}
    </div>
    </section>

    {/* Service Area Section */}
    <section className="bg-slate-50 border-t border-slate-100 py-16 px-6">
    <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4 uppercase">Service Area</h2>
    <p className="text-lg text-slate-600 mb-8">
    Mobile service across Central Georgia, based in Unadilla. Travel is priced by county, with one travel fee per visit.
    </p>
    <div className="grid gap-6 md:grid-cols-3 text-left">
    {[
      { name: "Zone 1", fee: "No travel fee", counties: ["Dooly", "Pulaski", "Crisp", "Bleckley", "Wilcox", "Macon"] },
      { name: "Zone 2", fee: "$40 travel fee", counties: ["Houston", "Peach", "Sumter", "Turner", "Dodge"] },
      { name: "Zone 3", fee: "$75 travel fee", counties: ["Bibb", "Worth", "Tift"] }
    ].map((zone) => (
      <div key={zone.name} className="bg-white border border-slate-200 rounded-xl p-5">
      <h3 className="font-bold text-slate-800 uppercase">{zone.name}</h3>
      <p className="text-sm font-semibold text-slate-500 mb-3">{zone.fee}</p>
      <div className="flex flex-wrap gap-2">
      {zone.counties.map((county) => (
        <span key={county} className="bg-slate-50 border border-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-slate-700">
        {county} County
        </span>
      ))}
      </div>
      </div>
    ))}
    </div>
    <p className="text-sm text-slate-500 mt-8 max-w-2xl mx-auto">
    This isn&apos;t a hard boundary &mdash; contact us about service just outside the listed counties.
    Your travel fee is based on the county where the vehicle is located and is charged once per visit. It is credited back when you approve a repair of $300 or more.
    </p>
    </div>
    </section>
    </main>
  );
}

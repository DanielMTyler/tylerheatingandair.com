import ZoneMap from "./ZoneMap";
import { ZONES } from "./zones";

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

    {/* Upfront Prices */}
    <h2 className="text-3xl font-bold text-center mt-16 mb-8 uppercase">Upfront Prices</h2>
    <div className="flex flex-col gap-6">
    <div className="grid md:grid-cols-3 gap-6">
    {[
      { name: "A/C Check", price: "$95", note: "Performance test and leak check" },
      { name: "Heat Check", price: "$95", note: "Performance test and coolant system check" },
      { name: "A/C Recharge", price: "from $225", note: "R-134a $225 · R-1234yf $365. Leak test, vacuum, dye and up to 2 lb of refrigerant" },
    ].map((item) => (
      <div key={item.name} className="p-6 border-2 border-slate-100 rounded-xl shadow-sm bg-white text-center">
      <p className="font-bold text-lg uppercase">{item.name}</p>
      <p className="text-3xl font-black text-orange-600 my-2">{item.price}</p>
      <p className="text-sm text-slate-600">{item.note}</p>
      </div>
    ))}
    </div>

    <p className="text-center text-slate-600">
    Most 1994 to mid-2010s vehicles use R-134a. Most newer ones use R-1234yf. Not sure? Text me the year, make and model and I&apos;ll tell you which.
    </p>

    {/* Diagnosis */}
    <div className="bg-slate-900 text-white rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-center md:text-left">
    <div className="md:w-1/3">
    <p className="text-sm font-semibold text-blue-300 uppercase tracking-wide">Need more than a check?</p>
    <p className="font-bold text-lg uppercase mt-2">Diagnosis</p>
    <p className="text-3xl font-black text-orange-500 my-2">$150</p>
    </div>
    <p className="md:w-2/3 text-slate-200">
    Up to 1 hour of hands-on testing to find problems a quick check can&apos;t pin down, like electrical faults and problems that come and go.
    </p>
    </div>

    {/* Credit */}
    <div className="bg-orange-50 border-2 border-orange-500 rounded-xl p-6 text-center">
    <p className="font-bold text-lg">Your check or diagnosis comes off the repair</p>
    <p className="mt-2 text-slate-700">
    Approve a repair the same visit and what you paid for the check, or up to 1 hour of diagnosis, is credited in full. The work can be done another day.
    </p>
    </div>

    <div className="text-center">
    <p className="font-semibold text-slate-800">
    90-day warranty on labor. Parts carry the manufacturer&apos;s warranty.
    </p>
    <p className="mt-2 text-sm text-slate-500">
    Travel is extra outside Zone 1 and isn&apos;t credited. See the service area below.
    </p>
    <p className="mt-2 text-sm text-slate-500">
    A 50% deposit is required to schedule repairs. The balance is due when the work is complete.
    </p>
    </div>
    </div>
    </section>

    {/* Service Area Section */}
    <section className="bg-slate-50 border-t border-slate-100 py-16 px-6">
    <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4 uppercase">Service Area</h2>
    <p className="text-lg text-slate-600 mb-8">
    Mobile service across Central Georgia, based in Unadilla. Travel is priced by county, with one travel fee per visit.
    </p>
    <ZoneMap />
    <div className="grid gap-6 md:grid-cols-3 text-left">
    {ZONES.map((zone) => (
      <div key={zone.name} className="bg-white border border-slate-200 rounded-xl p-5">
      <h3 className="font-bold text-slate-800 uppercase flex items-center gap-2">
      <span className="inline-block w-3 h-3 rounded-sm border border-slate-300" style={{ backgroundColor: zone.fill }} />
      {zone.name}
      </h3>
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
    Outside these counties? Call or text for a quote.
    Your travel fee is based on the county where the vehicle is located and is charged once per visit. Travel fees are not credited toward repairs.
    </p>
    </div>
    </section>
    </main>
  );
}

import Image from "next/image";

export default function CareersPage() {
  const benefits = [
    "Employee ownership and long-term career paths",
    "Opportunities across yard, delivery, sales, and support roles",
    "A team focused on serving local builders and communities",
  ];

  const sampleRoles = [
    "CDL Driver – Delivery",
    "Inside Sales – Building Materials",
    "Yard Associate",
  ];

  return (
    <div className="space-y-6 max-w-4xl">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-beisserGray">Careers at Beisser</h1>
        <p className="text-sm text-slate-600">
          This page is meant to help candidates understand what it&apos;s like to work at Beisser—employee
          ownership, long-term career opportunities, and a culture focused on supporting Iowa builders. Replace
          the placeholder content below with your own story, benefits, and open positions.
        </p>
      </header>
      <div className="rounded-lg border bg-white overflow-hidden">
        <Image
          src="/images/careers-team.png"
          alt="Beisser team placeholder"
          width={800}
          height={450}
          className="w-full h-56 object-cover"
        />
        <div className="p-4 space-y-3 text-sm text-slate-700">
          <p>
            Use this area to describe your culture and what makes Beisser a great place to work. You might
            emphasize safety, training, collaboration between branches, and the impact employees have on local
            construction projects.
          </p>
        </div>
      </div>
      <section className="grid gap-6 md:grid-cols-2 text-sm">
        <div>
          <h2 className="text-lg font-semibold text-beisserGray mb-2">Why work here</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            {benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-beisserGray mb-2">Example opportunities</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            {sampleRoles.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 mt-2">
            Replace these with real job titles or a link to your external job board or HR system.
          </p>
        </div>
      </section>
    </div>
  );
}

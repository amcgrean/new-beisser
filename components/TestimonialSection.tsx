import { testimonials } from "@/app/data/testimonials";

export default function TestimonialSection() {
  const visible = testimonials.filter((item) => item.quote.trim().length > 0);
  if (visible.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-beisserGray">Contractor testimonials</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {visible.map((item) => (
          <article key={`${item.name}-${item.product}`} className="rounded-lg border bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-700">“{item.quote}”</p>
            <p className="mt-3 text-xs font-semibold text-beisserGray">{item.name} • {item.company}</p>
            <p className="text-xs text-slate-500">{item.branch} • {item.product} • {item.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

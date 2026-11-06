import { testimonials } from "@/app/data/testimonials";

export default function TestimonialSection() {
  const visible = testimonials.filter((item) => item.quote.trim().length > 0);
  if (visible.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-ink-1">Contractor testimonials</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {visible.map((item) => (
          <article key={`${item.name}-${item.product}`} className="card p-4">
            <p className="text-ink-3">“{item.quote}”</p>
            <p className="mt-3 text-xs font-semibold text-ink-1">{item.name} • {item.company}</p>
            <p className="text-xs text-ink-5">{item.branch} • {item.product} • {item.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

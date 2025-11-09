export default function Testimonials() {
  const quotes = [
    {
      quote:
        "Migrating to Zyntr was effortless. Speed and uptime are unmatched.",
      author: "Jane D.",
    },
    {
      quote:
        "Support guided me every step. Performance is incredible.",
      author: "Mark R.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-gray-900" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}>
          Loved by fast‑growing teams
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {quotes.map((q) => (
            <figure key={q.author} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <blockquote className="text-gray-800">“{q.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">— {q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CheckCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="get-started" className="relative bg-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0))",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}>
          Ready to Experience Enterprise-Level WordPress Hosting?
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-lg text-gray-700" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui', fontWeight: 400 }}>
          Launch faster, manage smarter, grow without limits
        </p>
        <div className="mt-8">
          <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-900">
            Get Started
          </a>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-700">
          <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600"/> Premium Infrastructure</span>
          <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600"/> Free SSL & Migrations</span>
          <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600"/> 24/7 Support</span>
        </div>
      </div>
    </section>
  );
}

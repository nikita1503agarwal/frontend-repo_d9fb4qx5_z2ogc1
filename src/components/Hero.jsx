import { Rocket, Play, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0))",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:flex lg:items-center lg:gap-12 lg:py-24">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600 ring-1 ring-gray-200">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>No hidden fees. No trials. Just premium hosting.</span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-gray-900 md:text-5xl" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}>
            Enterprise-Level WordPress Hosting — Without the Enterprise Price
          </h1>
          <p className="mt-4 text-lg font-normal text-gray-700 md:text-xl" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}>
            Launch, manage, and scale WordPress sites effortlessly. Blazing fast, fully managed.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-3 text-white transition hover:bg-gray-900"
            >
              <Rocket className="mr-2 h-4 w-4" /> Get Started
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-300 transition hover:bg-gray-50"
            >
              See Plans
            </a>
          </div>
        </div>
        <div className="mt-10 flex-1 lg:mt-0">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl ring-1 ring-gray-200">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0))",
              }}
            />
            <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-slate-50 to-slate-100">
              <button className="group inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow ring-1 ring-gray-200 backdrop-blur">
                <Play className="h-4 w-4 text-gray-700" />
                <span>Watch dashboard demo</span>
              </button>
              <div className="pointer-events-none absolute inset-x-6 bottom-6 mx-auto max-w-none rounded-md bg-white/80 p-3 text-center text-xs text-gray-700 ring-1 ring-gray-200">
                Speed tests · One‑click deploy · Automated backups
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

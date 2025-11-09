import { Activity, LineChart, Timer } from "lucide-react";

export default function Performance() {
  const metrics = [
    { label: "Load < 400ms" },
    { label: "99.9% Uptime" },
    { label: "Auto Backups & Scaling" },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}>
              Predictable performance you can trust
            </h2>
            <p className="mt-3 text-gray-700" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui', fontWeight: 400 }}>
              Experience predictable performance — no shared resources, no hidden bandwidth fees.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-900">
              {metrics.map((m) => (
                <li key={m.label} className="rounded-full bg-gray-100 px-3 py-1 ring-1 ring-gray-200">
                  {m.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <Timer className="mx-auto h-6 w-6 text-gray-900" />
              <p className="mt-2 text-sm text-gray-600">Speed</p>
              <div className="mt-1 h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 w-11/12 rounded-full bg-gray-900" />
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <Activity className="mx-auto h-6 w-6 text-gray-900" />
              <p className="mt-2 text-sm text-gray-600">Uptime</p>
              <div className="mt-1 h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 w-full rounded-full bg-gray-900" />
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <LineChart className="mx-auto h-6 w-6 text-gray-900" />
              <p className="mt-2 text-sm text-gray-600">Traffic</p>
              <div className="mt-1 h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 w-10/12 rounded-full bg-gray-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

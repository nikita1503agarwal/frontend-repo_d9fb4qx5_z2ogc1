import { Layers, Settings2, TrendingUp, Headphones } from "lucide-react";

export default function Why() {
  const points = [
    { icon: Layers, label: "Dedicated Resources per Website" },
    { icon: Settings2, label: "Fully Managed Hosting" },
    { icon: TrendingUp, label: "Scale Anytime" },
    { icon: Headphones, label: "24/7 Support" },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-gray-900" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}>
          Why ZYNTR
        </h2>
        <p className="mt-3 text-gray-700" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui', fontWeight: 400 }}>
          Focus on your website, we handle infrastructure.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <Icon className="mx-auto h-6 w-6 text-gray-900" />
              <p className="mt-3 text-sm font-medium text-gray-900" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

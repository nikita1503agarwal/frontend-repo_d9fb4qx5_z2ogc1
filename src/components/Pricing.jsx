import { Check } from "lucide-react";

const plans = [
  { name: "Starter", price: 20 },
  { name: "Pro", price: 40 },
  { name: "Business", price: 80 },
  { name: "Enterprise", price: 120 },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-gray-900" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}>
          Simple, predictable pricing
        </h2>
        <p className="mt-3 text-gray-700" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui', fontWeight: 400 }}>
          All plans include Free SSL, Free Migrations, 24/7 Support, Dedicated resources for each site
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.name} className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div>
                <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}>{plan.name}</h3>
                <p className="mt-4 text-4xl font-semibold text-gray-900" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}>
                  ${plan.price}
                  <span className="text-base font-normal text-gray-600">/mo</span>
                </p>
                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  {[
                    "Free SSL",
                    "Free Migrations",
                    "24/7 Support",
                    "Dedicated resources per site",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#get-started"
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
              >
                Select Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

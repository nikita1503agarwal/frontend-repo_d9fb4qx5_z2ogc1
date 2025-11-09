import { ServerCog, DatabaseBackup, File, Gauge, Globe, Lock } from "lucide-react";

export default function Features() {
  const items = [
    { icon: ServerCog, title: "One-Click WordPress Deploy" },
    { icon: DatabaseBackup, title: "Automated Backups & Restore" },
    { icon: File, title: "File Manager" },
    { icon: Gauge, title: "Blazing Fast OpenLiteSpeed Performance" },
    { icon: Globe, title: "Multiple Data Center Locations" },
    { icon: Lock, title: "Free SSL & Migration" },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-gray-900" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}>
          Benefits that power your growth
        </h2>
        <p className="mt-3 text-gray-700" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui', fontWeight: 400 }}>
          Dedicated resources for every site, predictable high performance.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Icon className="h-6 w-6 text-gray-900" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}>{title}</h3>
              <p className="mt-2 text-sm text-gray-600">
                Unlike typical shared hosting, every website gets a stable, isolated environment without complex cloud configs.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

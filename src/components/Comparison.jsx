export default function Comparison() {
  const rows = [
    { feature: "Price", zyntr: "$20", cloudways: "$36+", wpengine: "$25", kinsta: "$30" },
    { feature: "Unlimited Visits", zyntr: "✅ YES", cloudways: "✅ YES (visit caps may apply)", wpengine: "❌ NO - 25k visits", kinsta: "❌ NO - 35k visits" },
    { feature: "Free Backups", zyntr: "✅ YES", cloudways: "❌ Extra", wpengine: "✅ YES", kinsta: "✅ YES" },
    { feature: "File Manager", zyntr: "✅ YES", cloudways: "❌ No", wpengine: "❌ NO", kinsta: "❌ NO" },
    { feature: "Bandwidth", zyntr: "✅ 1TB", cloudways: "❌ Extra cost", wpengine: "❌ 75GB", kinsta: "❌ 125GB" },
    { feature: "Dedicated Resources", zyntr: "✅ YES", cloudways: "❌ Partially", wpengine: "❌ NO", kinsta: "❌ NO" },
    { feature: "Storage", zyntr: "✅ 40GB", cloudways: "❌ 20GB", wpengine: "❌ 10GB", kinsta: "❌ 10GB" },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-900" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}>
            Compare and save
          </h2>
          <p className="mt-2 text-gray-700" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui', fontWeight: 400 }}>
            Get true dedicated resources & predictable performance for less.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] table-auto border-collapse overflow-hidden rounded-xl border border-gray-200">
            <thead>
              <tr className="bg-gray-50 text-left text-sm text-gray-700">
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">ZYNTR</th>
                <th className="px-4 py-3">Cloudways (AWS)</th>
                <th className="px-4 py-3">WP Engine</th>
                <th className="px-4 py-3">Kinsta</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {rows.map((r, idx) => (
                <tr key={r.feature} className={idx % 2 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-900">{r.feature}</td>
                  <td className="px-4 py-3">{r.zyntr}</td>
                  <td className="px-4 py-3">{r.cloudways}</td>
                  <td className="px-4 py-3">{r.wpengine}</td>
                  <td className="px-4 py-3">{r.kinsta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

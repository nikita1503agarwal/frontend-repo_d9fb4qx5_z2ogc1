export default function FAQ() {
  const faqs = [
    { q: "Do I need AWS knowledge?", a: "No, we handle everything behind the scenes" },
    { q: "Can I migrate my WordPress site?", a: "Yes, manually or guided by support" },
    { q: "Is email hosting included?", a: "Connect easily to Google Workspace or Zoho Mail" },
    { q: "Can I scale if traffic grows?", a: "Upgrade anytime for higher performance" },
    { q: "Do I get server access?", a: "Manage WordPress dashboard, files, database" },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-gray-900" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}>FAQ</h2>
        <div className="mt-6 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {faqs.map((f, i) => (
            <details key={f.q} className="group p-6 open:bg-gray-50">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="text-base font-medium text-gray-900" style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}>{f.q}</span>
                <svg className="h-5 w-5 text-gray-500 transition group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10 3a1 1 0 01.832.445l5 7a1 1 0 01-1.664 1.11L10 5.882 5.832 11.555a1 1 0 11-1.664-1.11l5-7A1 1 0 0110 3z" clipRule="evenodd" /></svg>
              </summary>
              <p className="mt-3 text-sm text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

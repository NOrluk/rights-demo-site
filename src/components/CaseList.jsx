export default function CaseList({ cases }) {
  if (!cases || cases.length === 0) {
    return <p className="text-center text-gray-600">No live cases currently available.</p>;
  }
  return (
    <ul className="grid gap-8 md:grid-cols-2">
      {cases.map((c) => (
        <li key={c.id} className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">{c.fields.Name}</h2>
          <p className="mb-2">{c.fields.Description}</p>
          <p className="mb-2">
            <strong>Raised:</strong> ${c.fields['Amount Raised'] ?? 0} / ${c.fields['Amount Requested'] ?? 0}
          </p>
          {c.fields.Image && c.fields.Image[0] && (
            <img
              src={c.fields.Image[0].url}
              alt={c.fields.Name}
              className="mt-3 rounded-lg w-full max-h-60 object-cover"
            />
          )}
          {c.fields['Donation Link'] && (
            <a
              href={c.fields['Donation Link']}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Donate
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

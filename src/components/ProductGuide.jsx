export default function ProductGuide({ guide, product }) {
    return (
      <div className="bg-yellow-100 p-4 rounded">
        <h2 className="text-xl font-bold mb-2">📘 {product} 만드는 방법</h2>
        <ol className="list-decimal ml-6 space-y-1">
          {guide.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    );
  }
  